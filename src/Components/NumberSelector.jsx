import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({clickedValue, selectedElem, setSelectedElem, setClickedValue, isSelected, setIsSelected }) => {
    const num = [1, 2, 3, 4, 5, 6]

    const handleEdit = (item, index) => {
        setClickedValue(item)
        setSelectedElem(index)
        // setIsSelected(true)
    }

    const Box = styled.div`
        width: 72px;
        height: 72px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid black;
        font-size: large;
        font-weight: 600;
        cursor: pointer;
        border-radius: 5px;
    `

    return (
        <section className='flex flex-col items-end gap-4 w-fit p-3'>
            <p className='text-lg'>Select any Number below.👇</p>
            <div className='flex gap-4'>
                {
                    num.map((item, index) => {
                        return (
                            <Box
                                className={`${selectedElem === index ? "bg-black text-white" : "bg-white text-black" } `}
                                onClick={() => handleEdit(item, index)}
                                key={index}>{item}</Box>
                        )
                    })
                }
            </div>
            {isSelected ? "" : <p className='text-red-500'>First You've to select the number of your choice</p>}
        </section>
    )
}

export default NumberSelector
