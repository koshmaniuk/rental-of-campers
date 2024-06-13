import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import HomePage from "../../Pages/HomePage/HomePage";
import CatalogPage from "../../Pages/CatalogPage/CatalogPage";
import FavoritesPage from "../../Pages/FavoritesPage/FavoritesPage";
import { useDispatch } from "react-redux";

function App() {
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
