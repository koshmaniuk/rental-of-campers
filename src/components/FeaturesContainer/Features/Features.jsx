import { Link } from "react-router-dom";
import css from "./Features.module.css";
import { icons } from "../../../assets/index.js";
const Features = ({ camper }) => {
  return (
    <ul className={css.info}>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href={`${icons}#icon-users`}></use>
        </svg>
        <p>adults</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href={`${icons}#icon-automatic`}></use>
        </svg>
        <p>Automatic</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href={`${icons}#icon-ac`}></use>
        </svg>
        <p>AC</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href={`${icons}#icon-petrol`}></use>
        </svg>
        <p>Petrol</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href={`${icons}#icon-kitchen`}></use>
        </svg>
        <p>kitchen</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href={`${icons}#icon-beds`}></use>
        </svg>
        <p>beds</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href={`${icons}#icon-air`}></use>
        </svg>
        <p>air conditioner</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href={`${icons}#icon-cd`}></use>
        </svg>
        <p>CD</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.icon}>
          <use href={`${icons}#icon-radio`}></use>
        </svg>
        <p>Radio</p>
      </li>
      <li className={css.infoItem}>
        <svg width="20px" height="20px" className={css.infoIcons}>
          <use href={`${icons}#icon-hob`}></use>
        </svg>
        <p>hob</p>
      </li>
    </ul>
  );
};

export default Features;
