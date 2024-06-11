import FeaturesContainer from "../FeaturesContainer/FeaturesContainer";
import css from "./ModalWindow.module.css";
const ModalWindow = () => {
  return (
    <div className={css.modalOverlay}>
      <div className={css.container}>
        <h2 className={css.mainText}>Mavericks</h2>
        <div className={css.reviewsContainer}>
          <a href="">
            <p>4.4(2 reviews)</p>
          </a>
          <p>Kyiv, Ukraine</p>
        </div>
        <p className={css.mainText}>$8000</p>
        <div className={css.imageContainer}>
          <img src="Switch.jpg" alt="" className={css.image} />
          <img src="Switch.jpg" alt="" className={css.image} />
          <img src="Switch.jpg" alt="" className={css.image} />
        </div>
        <p>
          Embrace simplicity and freedom with the Mavericks panel truck, an
          ideal choice for solo travelers or couples seeking a compact and
          efficient way to explore the open roads. This no-frills yet reliable
          panel truck offers the essentials for a comfortable journey, making it
          the perfect companion for those who value simplicity and
          functionality.
        </p>
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
