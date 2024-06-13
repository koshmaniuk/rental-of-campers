import { Route, Routes } from "react-router-dom";

import css from "./App.module.css";
import HomePage from "../../Pages/HomePage/HomePage";
import CatalogPage from "../../Pages/CatalogPage/CatalogPage";
import FavoritesPage from "../../Pages/FavoritesPage/FavoritesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="rental-of-campers/" element={<HomePage />} />
        <Route path="rental-of-campers/catalog" element={<CatalogPage />} />
        <Route path="rental-of-campers/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
