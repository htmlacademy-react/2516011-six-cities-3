import React, { useState } from 'react';
import { RATINGS } from '../../../utils/const';

function ReviewsForm() {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleMouseEnter = (value: number) => {
    setHoveredRating(value);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (rating && reviewText.length >= 50) {
      // Здесь вы можете отправить данные формы, например, на сервер
      console.log('Review submitted:', { reviewText, rating });
    }
  };

  // Обновляем состояние кнопки "Submit", чтобы она была активной только если введено достаточно текста и выбран рейтинг
  React.useEffect(() => {
    if (rating && reviewText.length >= 50) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [reviewText, rating]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map(({ value, title }) => (
          <div key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
              onMouseEnter={() => handleMouseEnter(value)}
              onMouseLeave={handleMouseLeave}
            >
              <svg
                className={`form__star-image ${((hoveredRating !== null && hoveredRating >= value) || (rating !== null && rating >= value)) ? 'active' : ''}`}
                width="37"
                height="33"
              >
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </div>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewText}
        onChange={handleReviewChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
