import { NavBar } from "../../common/components/NavBar/NavBar";
import { HomeBody } from "./components/HomeBody/HomeBody";

export const Home = () => {
  return (
    <div style={{ userSelect: "none", width: "100%" }}>
      <NavBar currentPage="HOME" />
      <HomeBody />
    </div>
  );
};
