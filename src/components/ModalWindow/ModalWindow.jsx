import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
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
}) => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.container}>
        <span onClick={onClose} className={css.closeBtn}>
          <svg width="32px" height="32px" className={css.closeIcon}>
            <use href="sprite.svg#icon-close"></use>
          </svg>
        </span>

        <h2 className={css.mainText}>{name}</h2>
        <div className={css.reviewsContainer}>
          <svg width="16px" height="16px" className={css.ratingIcon}>
            <use href="sprite.svg#icon-rating"></use>
          </svg>
          <a href="" className={css.reviewsRating}>
            {reviewsRating}({reviews} reviews)
          </a>
          <div className={css.locationContainer}>
            <svg width="16px" height="16px" className={css.locationIcon}>
              <use href="sprite.svg#icon-map"></use>
            </svg>
            {location}
          </div>
        </div>
        <p className={css.mainText}>$8000</p>
        <div className={css.imageContainer}>
          {image.map((imag) => (
            <img src={imag} alt="" className={css.image} />
          ))}
        </div>
        <p>{description}</p>
        <div className={css.linksContainer}>
          <a href="">Features</a>
          <a href="">Reviews</a>
        </div>
        <FeaturesContainer />
      </div>
    </div>
  );
};

export default ModalWindow;
