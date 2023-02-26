import React from 'react'

const Button = ({ handleClick }) => {
  return (
      <>
        <button onClick={handleClick}
        className='md:w-60 md:h-16 bg-blue-800 rounded-xl mb-10 border-4  border-blue-800 text-xl font-extrabold text-white'>
        <span>Siguiente</span>
        <span> →</span>
        </button>
      </>
  )
}

export default Button
