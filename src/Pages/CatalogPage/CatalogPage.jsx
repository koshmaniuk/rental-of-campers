import FiltersSection from "../../components/FiltersSection/FiltersSection";
import ListSection from "../../components/ListSection/ListSection";
import css from "./CatalogPage.module.css";
const CatalogPage = () => {
  return (
    <div className={css.container}>
      <FiltersSection />
      <ListSection />
    </div>
  );
};

export default CatalogPage;
