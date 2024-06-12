import css from "./ReviewsContainer.module.css";
import { useSelector } from "react-redux";

const ReviewsContainer = ({ camper }) => {
  return (
    <div className={css.reviewsContainer}>
      {camper.reviews.map((review) => (
        <div className={css.review}>
          <div className={css.reviewInfo}>
            <div className={css.circle}>
              <p className={css.abv}>A</p>
            </div>
            <div className={css.stars}>
              <p className={css.name}>{review.reviewer_name}</p>
              <svg width="16px" height="16px" className={css.ratingIcon}>
                <use href="sprite.svg#icon-rating"></use>
              </svg>
              <svg width="16px" height="16px" className={css.ratingIcon}>
                <use href="sprite.svg#icon-rating"></use>
              </svg>
              <svg width="16px" height="16px" className={css.ratingIcon}>
                <use href="sprite.svg#icon-rating"></use>
              </svg>
              <svg width="16px" height="16px" className={css.ratingIcon}>
                <use href="sprite.svg#icon-rating"></use>
              </svg>
              <svg width="16px" height="16px" className={css.ratingIcon}>
                <use href="sprite.svg#icon-rating"></use>
              </svg>
            </div>
          </div>

          {/* <p>{review.reviewer_rating}</p> */}
          <p className={css.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsContainer;
