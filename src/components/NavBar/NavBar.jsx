import { Link } from "react-router-dom";
import css from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={css.navbar}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
        </li>
        <li className={css.navItem}>
          <Link to="/catalog" className={css.navLink}>
            Catalog
          </Link>
        </li>
        <li className={css.navItem}>
          <Link to="/favorites" className={css.navLink}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
