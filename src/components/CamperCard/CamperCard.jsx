import CardInfoContainer from "../CardInfoContainer/CardInfoContainer";
import css from "./CamperCard.module.css";
const CamperCard = () => {
  return (
    <li className={css.cardContainer}>
      <img src="../../../public/Switch.jpg" alt="" className={css.image} />
      <CardInfoContainer />
    </li>
  );
};

export default CamperCard;
