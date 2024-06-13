import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../redux/filters/filtersSlice";
import css from "./FiltersSection.module.css";
import { nanoid } from "nanoid";

import { icons } from "../../assets/index";

const FiltersSection = () => {
  const dispatch = useDispatch();

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

  return (
    <div className={css.container}>
      <form className={css.filtersForm} onSubmit={handleSubmit}>
        <p className={css.locationText}>Location</p>
        <div className={css.locationContainer}>
          <select name="location" id="location" className={css.location}>
            <option value="">Select location</option>
            <option key={nanoid()} value="Ukraine, Sumy">
              Ukraine, Sumy
            </option>
            <option key={nanoid()} value="Ukraine, Dnipro">
              Ukraine, Dnipro
            </option>
            <option key={nanoid()} value="Ukraine, Poltava">
              Ukraine, Poltava
            </option>
            <option key={nanoid()} value="Ukraine, Kharkiv">
              Ukraine, Kharkiv
            </option>
            <option key={nanoid()} value="Ukraine, Odesa">
              Ukraine, Odesa
            </option>
          </select>
          <svg width="18px" height="20px" className={css.locationIcon}>
            <use href={`${icons}#icon-map`}></use>
          </svg>
        </div>

        <p className={css.subtitleText}>Filters</p>

        <legend className={css.titleText}>Vehicle equipment</legend>
        <fieldset className={css.equipment}>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="AC" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href={`${icons}#icon-acf`}></use>
              </svg>
              <span>AC</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="Automatic" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href={`${icons}#icon-automaticf`}></use>
              </svg>
              <span>Automatic</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="Kitchen" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href={`${icons}#icon-kitchenf`}></use>
              </svg>
              <span>Kitchen</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="TV" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href={`${icons}#icon-tvf`}></use>
              </svg>
              <span>TV</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" name="ShowerWC" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href={`${icons}#icon-showerf`}></use>
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
                <use href={`${icons}#icon-van`}></use>
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
                <use href={`${icons}#icon-fullvan`}></use>
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
                <use href={`${icons}#icon-alcovevan`}></use>
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
