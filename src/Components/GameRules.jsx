import React from 'react';

const GameRules = ({ showRules }) => {
    return (
        showRules ? (
            <div className='bg-pink-200 w-fit p-4'>
                <h1 className='text-red-600 mb-2 font-semibold text-lg'>How to play:</h1>
                <ul>
                    <li className='text-sm mb-1'>Select any number.</li>
                    <li className='text-sm mb-1'>Click on dice to roll.</li>
                    <li className='text-sm mb-1'>After clicking on the dice, if the selected number equals the dice number, you get the same points as the dice.</li>
                    <li className='text-sm mb-1'>But if you guess wrong, 2 points will be deducted.</li>
                </ul>
            </div>
        ) : null
    );
}

export default GameRules;
