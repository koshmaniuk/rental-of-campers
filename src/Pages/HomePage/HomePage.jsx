import css from "./HomePage.module.css";
import NavBar from "../../components/NavBar/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to RoamWheels! Our site is your perfect companion for finding
          and booking campers for exciting adventures. Here you can explore a
          wide range of campers, choose one that suits your needs, and easily
          book it for your next journey.
        </h1>
      </div>
    </>
  );
};

export default HomePage;
