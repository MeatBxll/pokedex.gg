import { useState } from "react";
import { NavBarButton } from "./componenets/NavBarButton/NavBarButton";
import "./navBar.css";
import { GiLightningHelix } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa6";
import { SubHeaderButton } from "./componenets/SubHeaderButton/SubHeaderButton";
import { CgPokemon } from "react-icons/cg";
import { SearchBar } from "../SearchBar/SearchBar";
import { SavedPokemon } from "./SavedPokemon/SavedPokemon";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectUserId, selectIsDarkMode } from "../../../app/userSlice";
import { setIsDarkMode } from "../../../app/userSlice";
interface NavBarProps {
  currentPage: PageTypes;
}

type PageTypes =
  | "HOME"
  | "ALLPOKEMON"
  | "BUILDTEAM"
  | "YOURTEAM"
  | "NONEOFTHESE";

export const NavBar = (props: NavBarProps) => {
  const { currentPage } = props;

  const dispatch = useAppDispatch();

  const isDarkMode = useAppSelector(selectIsDarkMode);
  const userId = useAppSelector(selectUserId);

  const handleSetIsDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  };

  return (
    <div className="homeHeader__wrap">
      <div className="homeHeader__main-Head">
        <div className="homeHeader__main-Head-Left">
          <Link to="/" className="homeHeader__title">
            POKEDEX.GG
          </Link>

          <div className="homeHeader__stats-More">
            <p>
              <GiLightningHelix />
            </p>
            <p> Stats and More</p>
          </div>
        </div>

        <div className="homeHeader__main-Head-Right">
          <div>
            {userId && (
              <SavedPokemon isBuildTeamPage={currentPage === "BUILDTEAM"} />
            )}
          </div>
          {currentPage != "HOME" ? (
            <div className="homeHeader__main-heade-right-search">
              <SearchBar FontSize="1rem" />
            </div>
          ) : null}
          <NavBarButton href="/contactUs" text="Contact Us" />
          <NavBarButton
            onClick={handleSetIsDarkMode}
            icon={isDarkMode ? <MdDarkMode /> : <FaSun />}
          />
          <NavBarButton href="/SignIn" text="Sign In" />
        </div>
      </div>
      <div className="homeHeader__sub-Head">
        <div className="homeHeader__sub-Head-Content-Wrap">
          <div className="homeHeader__sub-Head-Content">
            <SubHeaderButton
              isCurrentPage={currentPage === "HOME"}
              text="Home"
              href="/"
            />
            <SubHeaderButton
              isCurrentPage={currentPage === "ALLPOKEMON"}
              text="Pokemon"
              href="/allPokemon"
            />
            <SubHeaderButton
              text="Build Team"
              isCurrentPage={currentPage === "BUILDTEAM"}
              href="/buildTeam"
            />
          </div>
          <div className="homeHeader__sub-Head-Content">
            {userId && (
              <SubHeaderButton
                isCurrentPage={currentPage === "YOURTEAM"}
                icon={<CgPokemon />}
                text="Your Team"
                href="/yourTeam"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
