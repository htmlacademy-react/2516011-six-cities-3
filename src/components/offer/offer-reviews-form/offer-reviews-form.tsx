import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { postComment } from '../../../store/api-actions';
import { RATINGS } from '../../../utils/const';
import './offer-reviews-form.styles.scss';
import { toast } from 'react-toastify';
import { getIsAuthorized } from '../../../store/user/selectors.ts';

interface ReviewsFormProps {
  offerId: string;
}

function ReviewsForm({ offerId }: ReviewsFormProps) {
  const dispatch = useAppDispatch();

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isAuthorized = useAppSelector(getIsAuthorized);

  const isValid = rating !== null && reviewText.length >= 50 && reviewText.length <= 300;

  const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(event.target.value);
  };

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (isValid) {
      setIsSubmitting(true);

      dispatch(postComment({
        offerId,
        comment: reviewText,
        rating: rating ?? 0,
      }))
        .unwrap()
        .then(() => {
          setReviewText('');
          setRating(null);
          toast.success('Отзыв успешно отправлен!');
        })
        .catch(() => {
          toast.error('Не удалось отправить отзыв. Пожалуйста, попробуйте снова.');
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  if (!isAuthorized) {
    return null;
  }

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div className="reviews__rating-form form__rating">
        {[...RATINGS].map(({ value, title }) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={rating === value}
              onChange={handleRatingChange}
              disabled={isSubmitting}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewText}
        onChange={handleReviewChange}
        disabled={isSubmitting}
        maxLength={300}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
