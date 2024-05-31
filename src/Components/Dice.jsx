import React, { useEffect, useState } from 'react'
import dice1 from "../Assets/All dice/dice_1.png";
import dice2 from "../Assets/All dice/dice_2.png";
import dice3 from "../Assets/All dice/dice_3.png";
import dice4 from "../Assets/All dice/dice_4.png";
import dice5 from "../Assets/All dice/dice_5.png";
import dice6 from "../Assets/All dice/dice_6.png";

const Dice = ({randomNum, setRandomNum, handleDiceRoll}) => {

    const allDices = [dice1, dice2, dice3, dice4, dice5, dice6]

    return (
        <section className=' flex flex-col justify-center items-center'>
            <p className='text-lg font-semibold mb-5'>Click on Dice to roll it.</p>
            <div className='dice cursor-pointer' onClick={handleDiceRoll}>
                <img src={allDices[randomNum - 1]} alt={`Dice ${randomNum}`} />
            </div>
        </section>
    )
}

export default Dice
