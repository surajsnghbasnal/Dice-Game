import React, { useEffect, useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import Dice from './Dice'
import GameRules from './GameRules'
import Button from './Button'

const GamePlay = () => {
    const [isSelected, setIsSelected] = useState(true)
    const [randomNum, setRandomNum] = useState(1)
    const [clickedValue, setClickedValue] = useState(undefined)
    const [selectedElem, setSelectedElem] = useState()
    const [score, setScore] = useState(0)
    const [showRules, setShowRules] = useState(false)
    

    useEffect(() => {
        setIsSelected(true)
        console.log(`score is >>> ${score}`);
    }, [score, setScore]);

    const generateRandomNum = () => (Math.floor(Math.random() * 6) + 1)

    const handleDiceRoll = () => {
        setIsSelected(false)

        if (!clickedValue) return;
        setRandomNum(generateRandomNum())
        clickedValue === randomNum ? setScore((prev) => prev + randomNum) : setScore((prev) => prev - randomNum)
        setSelectedElem(undefined)
        setIsSelected(true)
        setClickedValue(undefined)
        console.log(`clicked value >>> ${clickedValue}`);
        console.log(`dice value >>> ${randomNum}`);
    }

    return (
        <main className='min-h-screen bg-blue-100 w-full p-10'>
            <section className='flex items-center justify-between mb-5'>
                <TotalScore score={score} />
                <NumberSelector isSelected={isSelected} setIsSelected={setIsSelected} clickedValue={clickedValue} setClickedValue={setClickedValue} selectedElem={selectedElem} setSelectedElem={setSelectedElem} />
            </section>
            <section>
                <Dice randomNum={randomNum} setRandomNum={setRandomNum} handleDiceRoll={handleDiceRoll} />
            </section>
            <section className='flex flex-col items-center  p-4'>
                <Button text="Reset Score" onClick={() => setScore(0)} />
                <Button text={showRules? "Hide Rules": "Show Rules"} onClick={()=> setShowRules(!showRules)}/>
            </section>
            <section className=' flex justify-center'>
                <GameRules showRules={showRules}/>
            </section>
        </main>
    )
}

export default GamePlay
