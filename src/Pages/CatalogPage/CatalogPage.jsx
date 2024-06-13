import FiltersSection from "../../components/FiltersSection/FiltersSection";
import ListSection from "../../components/ListSection/ListSection";
import css from "./CatalogPage.module.css";
import NavBar from "../../components/NavBar/NavBar";

const CatalogPage = () => {
  return (
    <>
      <NavBar />
      <div className={css.container}>
        <FiltersSection />
        <ListSection />
      </div>
    </>
  );
};

export default CatalogPage;
