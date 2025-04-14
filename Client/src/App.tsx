import "./App.css";
import { HomeHeader } from "./pages/Home/components/HomeHeader/HomeHeader";
import { HomeBody } from "./pages/Home/components/HomeBody/HomeBody";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeHeader />} />
        <Route path="/about" element={<HomeBody />} />
      </Routes>
    </>
  );
}

export default App;
