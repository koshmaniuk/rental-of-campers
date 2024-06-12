import { configureStore } from "@reduxjs/toolkit";

import { campersReducer } from "./campers/slice";
import { filtersReducer } from "./filters/filtersSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});
