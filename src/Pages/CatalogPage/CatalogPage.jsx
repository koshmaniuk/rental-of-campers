import { useDispatch } from "react-redux";
import FiltersSection from "../../components/FiltersSection/FiltersSection";
import ListSection from "../../components/ListSection/ListSection";
import css from "./CatalogPage.module.css";
import { getCampers } from "../../redux/campers/operations";
import { useEffect } from "react";

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <FiltersSection />
      <ListSection />
    </div>
  );
};

export default CatalogPage;
