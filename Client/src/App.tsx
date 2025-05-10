import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PokePage } from "./pages/PokePage/PokePage";
import { SignIn } from "./pages/SignIn/SignIn";
import { ContactUsPage } from "./pages/ContactPage/ContactPage";
import { AllPokemon } from "./pages/AllPokemon/AllPokemon";
import { BuildTeam } from "./pages/BuildTeam/BuildTeam";
import { YourTeam } from "./pages/YourTeam/YourTeam";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokePage/:_pokemonName" element={<PokePage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/allPokemon" element={<AllPokemon />} />
        <Route path="/buildTeam" element={<BuildTeam />} />
        <Route path="/buildTeam" element={<BuildTeam />} />
        <Route path="/yourTeam" element={<YourTeam />} />
      </Routes>
    </>
  );
}

export default App;
