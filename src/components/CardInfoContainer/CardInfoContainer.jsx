import { useDispatch, useSelector } from "react-redux";
import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./CardInfoCintainer.module.css";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favoritesSlice";

const CardInfoContainer = ({
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
          <p className={css.mainText}>€{price}</p>
          <button className={css.iconButton} onClick={handleFavoriteClick}>
            <svg
              width="24px"
              height="24px"
              className={isFavorite ? css.iconActive : css.icon}
            >
              <use href="../../../public/sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.reviewsContainer}>
        <svg width="16px" height="16px" className={css.ratingIcon}>
          <use href="../../../public/sprite.svg#icon-rating"></use>
        </svg>
        <a href="" className={css.reviewsRating}>
          {reviewsRating}({reviews} reviews)
        </a>
        <div className={css.locationContainer}>
          <svg width="16px" height="16px" className={css.locationIcon}>
            <use href="../../../public/sprite.svg#icon-map"></use>
          </svg>
          {location}
        </div>
      </div>
      <p className={css.description}>{description}</p>
      <ul className={css.info}>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.infoIcons}>
            <use href="../../../public/sprite.svg#icon-users"></use>
          </svg>
          <p>{adults} adults</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="../../../public/sprite.svg#icon-automatic"></use>
          </svg>
          <p>{transmission}</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.infoIcons}>
            <use href="../../../public/sprite.svg#icon-petrol"></use>
          </svg>
          <p>{engine}</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="../../../public/sprite.svg#icon-kitchen"></use>
          </svg>
          <p>Kitchen</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="../../../public/sprite.svg#icon-beds"></use>
          </svg>
          <p>{beds} bed</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="../../../public/sprite.svg#icon-ac"></use>
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
