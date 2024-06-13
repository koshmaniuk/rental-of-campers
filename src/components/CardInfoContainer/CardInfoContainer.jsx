import { useDispatch, useSelector } from "react-redux";
import css from "./CardInfoCintainer.module.css";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favoritesSlice";
import { icons } from "../../assets/index";
import { Link } from "react-router-dom";

const CardInfoContainer = ({
  name,
  price,
  rating,
  location,
  adults,
  transmission,
  engine,
  description,
  beds,
  reviews,
  reviewsRating,
  onClick,
  camper,
}) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav._id === camper._id);
  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper));
    } else {
      dispatch(addFavorite(camper));
    }
  };
  return (
    <div className={css.container}>
      <div className={css.mainInfo}>
        <h2 className={css.mainText}>{name}</h2>
        <div className={css.price}>
          <p className={css.mainText}>€{price},00</p>

          <button className={css.iconButton} onClick={handleFavoriteClick}>
            <svg
              width="24px"
              height="24px"
              className={isFavorite ? css.iconActive : css.icon}
            >
              <use href={`${icons}#icon-heart`}></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.reviewsContainer}>
        <svg width="16px" height="16px" className={css.ratingIcon}>
          <use href={`${icons}#icon-rating`}></use>
        </svg>
        <Link to="" className={css.reviewsRating}>
          {reviewsRating}({reviews} reviews)
        </Link>
        <div className={css.locationContainer}>
          <svg width="16px" height="16px" className={css.locationIcon}>
            <use href={`${icons}#icon-map`}></use>
          </svg>
          {location}
        </div>
      </div>
      <p className={css.description}>{description}</p>
      <ul className={css.info}>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.infoIcons}>
            <use href={`${icons}#icon-users`}></use>
          </svg>
          <p>{adults} adults</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href={`${icons}#icon-automatic`}></use>
          </svg>
          <p>{transmission}</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.infoIcons}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p>{engine}</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          <p>Kitchen</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href={`${icons}#icon-beds`}></use>
          </svg>
          <p>{beds} bed</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          <p>AC</p>
        </li>
      </ul>
      <button className={css.showMoreBtn} onClick={onClick}>
        Show more
      </button>
    </div>
  );
};

export default CardInfoContainer;
