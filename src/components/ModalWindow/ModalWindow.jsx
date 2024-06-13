import { useEffect, useState } from "react";
import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import BookContainer from "./BookContainer/BookContainer";
import { icons } from "../../assets/index";
import css from "./ModalWindow.module.css";
import ReviewsContainer from "../ReviewsContainer/ReviewsContainer";
import { nanoid } from "nanoid";

const ModalWindow = ({
  name,
  price,
  location,
  description,
  reviews,
  reviewsRating,
  image,
  onClose,
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
      <div className={css.container}>
        <span onClick={onClose} className={css.closeBtn}>
          <svg width="32px" height="32px" className={css.closeIcon}>
            <use href={`${icons}#icon-close`}></use>
          </svg>
        </span>

        <h2 className={css.mainText}>{name}</h2>

        <div className={css.reviewsContainer}>
          <svg width="16px" height="16px" className={css.ratingIcon}>
            <use href={`${icons}#icon-rating`}></use>
          </svg>
          <a href="" className={css.reviewsRating}>
            {reviewsRating}({reviews} reviews)
          </a>

          <div className={css.locationContainer}>
            <svg width="16px" height="16px" className={css.locationIcon}>
              <use href={`${icons}#icon-map`}></use>
            </svg>
            {location}
          </div>
        </div>

        <p className={css.priceText}>€{price}</p>

        <div className={css.imageContainer}>
          {image.map((imag) => (
            <img src={imag} alt="" key={nanoid()} className={css.image} />
          ))}
        </div>

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
