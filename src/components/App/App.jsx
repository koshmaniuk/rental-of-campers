import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import css from "./App.module.css";
import HomePage from "../../Pages/HomePage/HomePage";
import CatalogPage from "../../Pages/CatalogPage/CatalogPage";
import FavoritesPage from "../../Pages/FavoritesPage/FavoritesPage";
import { useDispatch } from "react-redux";
import { getCampers } from "../../redux/campers/operations";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCampers());
  // }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
