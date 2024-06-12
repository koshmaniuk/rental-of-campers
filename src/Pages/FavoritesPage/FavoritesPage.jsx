import { useDispatch } from "react-redux";
import FiltersSection from "../../components/FiltersSection/FiltersSection";
import css from "./FavoritesPage.module.css";
import { getCampers } from "../../redux/campers/operations";
import { useEffect } from "react";
import ListFavoritesSection from "../../components/ListFavoritesSection/ListFavoritesSection";

const FavoritesPage = () => {
  return (
    <div className={css.container}>
      <FiltersSection />
      <ListFavoritesSection />
    </div>
  );
};

export default FavoritesPage;
