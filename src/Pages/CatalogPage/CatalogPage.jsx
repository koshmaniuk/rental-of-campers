import { useDispatch } from "react-redux";
import FiltersSection from "../../components/FiltersSection/FiltersSection";
import ListSection from "../../components/ListSection/ListSection";
import css from "./CatalogPage.module.css";
import { getCampers } from "../../redux/campers/operations";
import { useEffect } from "react";
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
