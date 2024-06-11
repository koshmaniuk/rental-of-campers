import ModalWindow from "../ModalWindow/ModalWindow";
import css from "./CardInfoCintainer.module.css";
const CardInfoContainer = () => {
  return (
    <div className={css.container}>
      <div className={css.mainInfo}>
        <h2 className={css.mainText}>Mavericks</h2>
        <div className={css.price}>
          <p className={css.mainText}>$8000</p>
          <button className={css.iconButton}>
            <svg width="24px" height="24px" className={css.icon}>
              <use href="sprite.svg#icon-heart"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className={css.reviewsContainer}>
        <a href="">
          <p>4.4(2 reviews)</p>
        </a>
        <p>Kyiv, Ukraine</p>
      </div>
      <p className={css.description}>
        The pictures shown here are example vehicles of the respective.
      </p>
      <ul className={css.info}>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.infoIcons}>
            <use href="sprite.svg#icon-users"></use>
          </svg>
          <p>2 adults</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="sprite.svg#icon-automatic"></use>
          </svg>
          <p>Automatic</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.infoIcons}>
            <use href="sprite.svg#icon-petrol"></use>
          </svg>
          <p>Petrol</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="sprite.svg#icon-kitchen"></use>
          </svg>
          <p>Kitchen</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="sprite.svg#icon-beds"></use>
          </svg>
          <p>1 bed</p>
        </li>
        <li className={css.infoItem}>
          <svg width="20px" height="20px" className={css.icon}>
            <use href="sprite.svg#icon-ac"></use>
          </svg>
          <p>AC</p>
        </li>
      </ul>
      <button className={css.showMoreBtn}>Show more</button>
      {/* <ModalWindow /> */}
    </div>
  );
};

export default CardInfoContainer;
