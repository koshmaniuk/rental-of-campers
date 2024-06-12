import { useDispatch, useSelector } from "react-redux";
import CamperCard from "../CamperCard/CamperCard";
import css from "./ListSection.module.css";
import { getCampers } from "../../redux/campers/operations";
import { useEffect } from "react";

const filterCampers = (campers, filters) => {
  return campers.filter((camper) => {
    if (filters.location && camper.location !== filters.location) {
      return false;
    }
    if (filters.vehicleType && camper.form !== filters.vehicleType) {
      return false;
    }
    if (filters.equipment.AC && !camper.details.airConditioner) {
      return false;
    }
    if (filters.equipment.Automatic && camper.transmission !== "automatic") {
      return false;
    }
    if (filters.equipment.Kitchen && !camper.details.kitchen) {
      return false;
    }
    if (filters.equipment.TV && !camper.details.TV) {
      return false;
    }
    if (
      filters.equipment.ShowerWC &&
      (!camper.details.shower || !camper.details.toilet)
    ) {
      return false;
    }
    return true;
  });
};

const ListSection = () => {
  const dispatch = useDispatch();
  const campers = useSelector((state) => state.campers.items);
  const filters = useSelector((state) => state.filters);

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  const filteredCampers = filterCampers(campers, filters);

  return (
    <ul className={css.container}>
      {filteredCampers.map((camper) => (
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
