import { useDispatch, useSelector } from "react-redux";
import { selectCampers } from "../../redux//campers/selectors";
import { setFilters } from "../../redux/filters/filtersSlice";
import css from "./FiltersSection.module.css";
import { useState } from "react";

const FiltersSection = () => {
  const campers = useSelector(selectCampers);

  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const uniqueLocations = Array.from(
    new Set(campers.map((camper) => camper.location))
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      location: formData.get("location"),
      equipment: {
        AC: formData.get("AC") === "on",
        Automatic: formData.get("Automatic") === "on",
        Kitchen: formData.get("Kitchen") === "on",
        TV: formData.get("TV") === "on",
        ShowerWC: formData.get("ShowerWC") === "on",
      },
      vehicleType: formData.get("form"),
    };

    dispatch(setFilters(data));
  };

  const locations = [
    "Ukraine, Kyiv",
    "Ukraine, Sumy",
    "Ukraine, Dnipro",
    "Ukraine, Poltava",
    "Ukraine, Kharkiv",
    "Ukraine, Odesa",
  ];

  return (
    <div className={css.container}>
      <p className={css.subtitleText}>Filters</p>
      <form className={css.filtersForm} onSubmit={handleSubmit}>
        <p>Location</p>

        <select name="location" id="location" className={css.location}>
          <option value="">Select location</option>
          <option key={1} value="Ukraine, Sumy">
            Ukraine, Sumy
          </option>
          <option key={2} value="Ukraine, Dnipro">
            Ukraine, Dnipro
          </option>
          <option key={3} value="Ukraine, Poltava">
            Ukraine, Poltava
          </option>
          <option key={4} value="Ukraine, Kharkiv">
            Ukraine, Kharkiv
          </option>
          <option key={5} value="Ukraine, Odesa">
            Ukraine, Odesa
          </option>

          {/* {campers.map((camper) => (
            <option key={camper._id} value={camper.location}>
              {camper.location}
            </option>
          ))} */}
        </select>
        <legend className={css.titleText}>Vehicle equipment</legend>
        <fieldset className={css.equipment}>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="AC" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-acf"></use>
              </svg>
              <span>AC</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="Automatic" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-automaticf"></use>
              </svg>
              <span>Automatic</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="Kitchen" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-kitchenf"></use>
              </svg>
              <span>Kitchen</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="TV" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-tvf"></use>
              </svg>
              <span>TV</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="ShowerWC" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-showerf"></use>
              </svg>
              <span>Shower/WC</span>
            </span>
          </label>
        </fieldset>
        <legend className={css.titleText}>Vehicle type</legend>
        <fieldset className={css.type}>
          <label className={css.checkboxContainer}>
            <input
              type="radio"
              name="form"
              value="panelTruck"
              className={css.radio}
            />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-van"></use>
              </svg>
              <span>Van</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input
              type="radio"
              name="form"
              value="fullyIntegrated"
              className={css.radio}
            />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-fullvan"></use>
              </svg>
              <span className={css.text}>Fully Integrated</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input
              type="radio"
              name="form"
              value="alcove"
              className={css.radio}
            />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-alcovevan"></use>
              </svg>
              <span>Alcove</span>
            </span>
          </label>
        </fieldset>
        <button type="submit" className={css.filterBtn}>
          Search
        </button>
      </form>
    </div>
  );
};

export default FiltersSection;
