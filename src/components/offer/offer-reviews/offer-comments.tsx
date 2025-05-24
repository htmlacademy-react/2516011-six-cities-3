import { Comment } from '../../../types/comment.ts';

interface Props {
  comments: Comment[];
}

function OfferComments({ comments }: Props) {

  const sortedComments = [...comments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const displayedComments = sortedComments.slice(0, 10);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {displayedComments.map((comment) => (
          <li className="reviews__item" key={comment.id}>
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">{comment.user.name}</span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${(comment.rating / 5) * 100}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <p className="reviews__text">{comment.comment}</p>
              <time className="reviews__time" dateTime={comment.date}>{new Date(comment.date).toLocaleDateString()}</time>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OfferComments;
