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
      <p>The pictures shown here are example vehicles of the respective.</p>
      <ul className={css.info}>
        <li className={css.infoItem}>
          <p>2 adulaaaddts</p>
        </li>
        <li className={css.infoItem}>
          <p>2 adulqqqqts</p>
        </li>
        <li className={css.infoItem}>
          <p>2 adudasdaslts</p>
        </li>
        <li className={css.infoItem}>
          <p>2 adultdasdadass</p>
        </li>
        <li className={css.infoItem}>
          <p>2 adults</p>
        </li>
        <li className={css.infoItem}>
          <p>2 aduldasdasdasts</p>
        </li>
      </ul>
    </div>
  );
};

export default CardInfoContainer;
