import { useState } from "react";
import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import BookContainer from "./BookContainer/BookContainer";

import css from "./ModalWindow.module.css";
import ReviewsContainer from "../ReviewsContainer/ReviewsContainer";

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
  const [activeComponent, setActiveComponent] = useState("features");
  const handleLinkClick = (component) => (e) => {
    e.preventDefault();
    setActiveComponent(component);
  };
  return (
    <div className={css.modalOverlay}>
      {/* modal */}
      <div className={css.container}>
        {/* close icon */}
        <span onClick={onClose} className={css.closeBtn}>
          <svg width="32px" height="32px" className={css.closeIcon}>
            <use href="../../../public/sprite.svg#icon-close"></use>
          </svg>
        </span>
        {/* name */}
        <h2 className={css.mainText}>{name}</h2>
        {/* reviews */}
        <div className={css.reviewsContainer}>
          <svg width="16px" height="16px" className={css.ratingIcon}>
            <use href="../../../public/sprite.svg#icon-rating"></use>
          </svg>
          <a href="" className={css.reviewsRating}>
            {reviewsRating}({reviews} reviews)
          </a>
          {/* location */}
          <div className={css.locationContainer}>
            <svg width="16px" height="16px" className={css.locationIcon}>
              <use href="../../../public/sprite.svg#icon-map"></use>
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
          <a
            href="#"
            onClick={handleLinkClick("features")}
            className={css.linksText}
          >
            Features
          </a>
          <a
            href="#"
            onClick={handleLinkClick("reviews")}
            className={css.linksText}
          >
            Reviews
          </a>
        </div>
        <div className={css.subPageContainer}>
          {activeComponent === "features" && (
            <FeaturesContainer camper={camper} />
          )}
          {activeComponent === "reviews" && (
            <ReviewsContainer camper={camper} />
          )}
          <BookContainer />
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
