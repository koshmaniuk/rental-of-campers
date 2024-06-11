import { useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import css from "./ListSection.module.css";
import { selectCampers } from "../../redux//campers/selectors";

const ListSection = () => {
  const campers = useSelector(selectCampers);
  return (
    <ul className={css.container}>
      {campers.map((camper) => (
        <CamperCard
          key={camper._id}
          camperId={camper._id}
          name={camper.name}
          price={camper.price}
          rating={camper.rating}
          location={camper.location}
          adults={camper.adults}
          transmission={camper.transmission}
          engine={camper.engine}
          description={camper.description}
          kitchen={camper.details.kitchen}
          beds={camper.details.beds}
          ac={camper.details.airConditioner}
          img={camper.gallery}
          reviews={camper.reviews.length}
          reviewsRating={camper.reviews[0].reviewer_rating}
          details={camper.details}
          camper={camper}
        />
      ))}
    </ul>
  );
};

export default ListSection;
