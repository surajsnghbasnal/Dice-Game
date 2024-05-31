import React, { useEffect } from "react";
import HomePage from "./Components/homePage";
import GamePlay from "./Components/GamePlay.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/" && navigate("/dice-game");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/dice-game" element={<HomePage />} />
        <Route path="/start" element={<GamePlay />} />
      </Routes>
    </>
  );
};

export default App;
