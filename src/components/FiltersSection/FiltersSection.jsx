import css from "./FiltersSection.module.css";
const FiltersSection = () => {
  return (
    <div className={css.container}>
      <p>Location</p>
      <select name="location" id="location" className={css.location}>
        <option value="xs">Kyiv, Ukraine</option>
        <option value="xs">Ivano-Frankivsk, Ukraine</option>
      </select>
      <p className={css.subtitleText}>Filters</p>
      <form className={css.filtersForm}>
        {/*  */}
        <legend className={css.titleText}>Vehicle equipment</legend>
        <fieldset className={css.equipment}>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-acf"></use>
              </svg>
              <span>AC</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-automaticf"></use>
              </svg>
              <span>Automatic</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-kitchenf"></use>
              </svg>
              <span>Kitchen</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-tvf"></use>
              </svg>
              <span>TV</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-showerf"></use>
              </svg>
              <span>Shower/WC</span>
            </span>
          </label>
        </fieldset>
        {/*  */}
        <legend className={css.titleText}>Vehicle type</legend>
        <fieldset className={css.type}>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-van"></use>
              </svg>
              <span>Van</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
            <span className={css.checkmark}>
              <svg width="32px" height="32px" className={css.filterIcon}>
                <use href="sprite.svg#icon-fullvan"></use>
              </svg>
              <span className={css.text}>Fully Integrated</span>
            </span>
          </label>
          <label className={css.checkboxContainer}>
            <input type="checkbox" />
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
