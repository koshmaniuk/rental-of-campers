import { useDispatch } from "react-redux";
import FiltersSection from "../../components/FiltersSection/FiltersSection";
import css from "./HomePage.module.css";
import { getCampers } from "../../redux/campers/operations";
import { useEffect } from "react";
import ListFavoritesSection from "../../components/ListFavoritesSection/ListFavoritesSection";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={css.container}></div>
    </>
  );
};

export default HomePage;
