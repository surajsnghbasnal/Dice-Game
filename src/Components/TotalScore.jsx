import React from 'react'

const TotalScore = ({score}) => {
    return (
        <div className='flex flex-col items-center p-3  h-full w-fit'>
            <h1 className='text-6xl '><strong>{score}</strong></h1>
            <p className='text-2xl'>Total Score</p>
        </div>
    )
}

export default TotalScore
