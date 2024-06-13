import Features from "./Features/Features";
import VehicleDetails from "./VehicleDetails/VehicleDetails";
import css from "./FeaturesContainer.module.css";

const FeaturesContainer = ({ camper }) => {
  return (
    <div className={css.featuresContainer}>
      <Features camper={camper} />
      <VehicleDetails camper={camper} />
    </div>
  );
};

export default FeaturesContainer;
