import css from "./VehicleDetails.module.css";
const VehicleDetails = ({ camper }) => {
  return (
    <div className={css.detailsContainer}>
      <h2 className={css.titleText}>VehicleDetails</h2>
      <ul className={css.infoContainer}>
        <li className={css.detailsText}>
          <span>Form</span>
          <span>{camper.form}</span>
        </li>
        <li className={css.detailsText}>
          <span>Length</span>
          <span>{camper.length}</span>
        </li>
        <li className={css.detailsText}>
          <span>Width</span>
          <span>{camper.width}</span>
        </li>
        <li className={css.detailsText}>
          <span>Height</span>
          <span>{camper.height}</span>
        </li>
        <li className={css.detailsText}>
          <span>Tank</span>
          <span>{camper.tank}</span>
        </li>
        <li className={css.detailsText}>
          <span>Consumption</span>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default VehicleDetails;
