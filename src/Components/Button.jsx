import React from 'react'

const Button = ({onClick, text}) => {
  return (
      <button onClick={onClick} type="button" class="w-fit text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">{text}</button>
  )
}

export default Button
