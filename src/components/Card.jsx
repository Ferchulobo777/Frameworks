import React from 'react'
import Button from './Button'

const Card = ({ framework, changeFramework }) => {
    return (
        <section className='flex bg-black md:w-1/4 md:h-4/5 flex-col justify-center items-center mt-10 rounded-3xl border-4 border-lime-400 shadow-2xl shadow-lime-400/60'>
        <div className='flex bg-black md:w-3/5 md:h-2/3 flex-col items-center justify-center box-border rounded-lg'>
            <img className='md:w-3/5 md:h-auto' src={framework.logo} alt={framework.name} />
        </div>
        <h2 className=' text-lime-400 text-5xl font-bold flex items-center justify-center relative mt-3 shadow-white'>{framework.name}</h2>
        <p className='bg-black md:w-auto md:h-auto text-white shadow-white text-lg font-bold text-justify p-5 rounded-xl' >{framework.description}</p>
        <div>
        <Button handleClick={changeFramework} />
        </div>
    
        </section>
      )
    }

export default Card





  

  