import { useEffect, useState } from "react";
import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import BookContainer from "./BookContainer/BookContainer";
import { icons } from "../../assets/index";
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
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains(css.modalOverlay)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={css.modalOverlay}>
      {/* modal */}
      <div className={css.container}>
        {/* close icon */}
        <span onClick={onClose} className={css.closeBtn}>
          <svg width="32px" height="32px" className={css.closeIcon}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </span>
        {/* name */}
        <h2 className={css.mainText}>{name}</h2>
        {/* reviews */}
        <div className={css.reviewsContainer}>
          <svg width="16px" height="16px" className={css.ratingIcon}>
            <use href={`${icons}#icon-rating`}></use>
          </svg>
          <a href="" className={css.reviewsRating}>
            {reviewsRating}({reviews} reviews)
          </a>
          {/* location */}
          <div className={css.locationContainer}>
            <svg width="16px" height="16px" className={css.locationIcon}>
              <use href={`${icons}#icon-map`}></use>
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
