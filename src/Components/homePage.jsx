import React from "react";
import homeImg from '../Assets/dice home.jpg'
import Button from "./Button";
import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="w-4/4 h-screen  flex justify-center items-center">
            
            <div id="inrContainer" className="w-4/5 h-4/5 flex">
                <div id="left" className="w-2/4 h-full">
                    <img src={homeImg} alt="Home image" className="w-4/4 h-4/4  object-cover" />
                </div>
                <div id="right" className="w-2/4 h-full flex flex-col items-end justify-center">
                    <h1><strong className="text-7xl">Dice Game</strong></h1>
                    <Button text="Play Now" onClick={() => {
                        navigate("/start")
                    }} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
