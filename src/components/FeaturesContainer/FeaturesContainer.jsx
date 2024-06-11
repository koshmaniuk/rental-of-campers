import Features from "./Features/Features";
import VehicleDetails from "./VehicleDetails/VehicleDetails";
import css from "./FeaturesContainer.module.css";

const FeaturesContainer = () => {
  return (
    <div>
      <Features />
      <VehicleDetails />
    </div>
  );
};

export default FeaturesContainer;
