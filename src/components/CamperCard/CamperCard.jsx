import CardInfoContainer from "../CardInfoContainer/CardInfoContainer";
import css from "./CamperCard.module.css";
const CamperCard = ({
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
}) => {
  return (
    <li className={css.cardContainer}>
      <img src="../../../public/Switch.jpg" alt="" className={css.image} />
      <CardInfoContainer
        camperId={camperId}
        name={name}
        price={price}
        rating={rating}
        location={location}
        adults={adults}
        transmission={transmission}
        engine={engine}
        description={description}
        kitchen={kitchen}
        beds={beds}
        ac={ac}
      />
    </li>
  );
};
