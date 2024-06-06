import CamperCard from "../CamperCard/CamperCard";
import css from "./ListSection.module.css";
const ListSection = () => {
  return (
    <ul className={css.container}>
      <CamperCard />
      <CamperCard />
      <CamperCard />
    </ul>
  );
};

export default ListSection;
