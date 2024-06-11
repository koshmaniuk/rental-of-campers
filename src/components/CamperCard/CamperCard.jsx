import { useState } from "react";
import CardInfoContainer from "../CardInfoContainer/CardInfoContainer";
import css from "./CamperCard.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";

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
  img,
  reviews,
  reviewsRating,
  camper,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleShowMore = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <li className={css.cardContainer}>
      <img src={img[0]} alt="" className={css.image} />
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
        reviews={reviews}
        reviewsRating={reviewsRating}
        onClick={handleShowMore}
      />
      {showModal && (
        <ModalWindow
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
          reviews={reviews}
          reviewsRating={reviewsRating}
          image={img}
          onClose={handleCloseModal}
          camper={camper}
        />
      )}
    </li>
  );
};

export default CamperCard;
