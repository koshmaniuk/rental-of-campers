import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import BookContainer from "./BookContainer/BookContainer";

import css from "./ModalWindow.module.css";

const ModalWindow = ({
  camperId,
  name,
  price,
  rating,
  location,
  adults,
  transmission,
  engine,
  description,
  kitchen,
  beds,
  ac,
  img,
  reviews,
  reviewsRating,
  image,
  onClose,
  details,
  camper,
}) => {
  return (
    <div className={css.modalOverlay}>
      {/* modal */}
      <div className={css.container}>
        {/* close icon */}
        <span onClick={onClose} className={css.closeBtn}>
          <svg width="32px" height="32px" className={css.closeIcon}>
            <use href="sprite.svg#icon-close"></use>
          </svg>
        </span>
        {/* name */}
        <h2 className={css.mainText}>{name}</h2>
        {/* reviews */}
        <div className={css.reviewsContainer}>
          <svg width="16px" height="16px" className={css.ratingIcon}>
            <use href="sprite.svg#icon-rating"></use>
          </svg>
          <a href="" className={css.reviewsRating}>
            {reviewsRating}({reviews} reviews)
          </a>
          {/* location */}
          <div className={css.locationContainer}>
            <svg width="16px" height="16px" className={css.locationIcon}>
              <use href="sprite.svg#icon-map"></use>
            </svg>
            {location}
          </div>
        </div>
        {/* price */}
        <p className={css.priceText}>€{price}</p>
        {/* images */}
        <div className={css.imageContainer}>
          {image.map((imag) => (
            <img src={imag} alt="" className={css.image} />
          ))}
        </div>
        {/* description */}
        <p className={css.descrText}>{description}</p>
        <div className={css.linksContainer}>
          <a href="" className={css.linksText}>
            Features
          </a>
          <a href="" className={css.linksText}>
            Reviews
          </a>
        </div>
        <div className={css.subPageContainer}>
          <FeaturesContainer camper={camper} />
          <BookContainer />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
