import { Link } from "react-router-dom";
import css from "./Features.module.css";
const Features = ({ camper }) => {
  return (
    <ul className={css.info}>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href="sprite.svg#icon-users"></use>
        </svg>
        <p>adults</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href="sprite.svg#icon-automatic"></use>
        </svg>
        <p>Automatic</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href="sprite.svg#icon-ac"></use>
        </svg>
        <p>AC</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href="sprite.svg#icon-petrol"></use>
        </svg>
        <p>Petrol</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href="sprite.svg#icon-kitchen"></use>
        </svg>
        <p>kitchen</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href="sprite.svg#icon-beds"></use>
        </svg>
        <p>beds</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href="sprite.svg#icon-air"></use>
        </svg>
        <p>air conditioner</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href="sprite.svg#icon-cd"></use>
        </svg>
        <p>CD</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href="sprite.svg#icon-radio"></use>
        </svg>
        <p>Radio</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href="sprite.svg#icon-hob"></use>
        </svg>
        <p>hob</p>
      </li>
    </ul>
  );
};

export default Features;
