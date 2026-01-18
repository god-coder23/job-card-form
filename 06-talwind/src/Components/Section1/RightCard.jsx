import { ArrowRight } from 'lucide-react'
import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-170 overflow-hidden relative rounded-4xl w-80 bg-red-500'>
        <img className='h-full rounded-4xl w-full object-cover' src={props.image} alt="" />
    <div className="absolute top-10 left-10 bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
    <h1>{props.ordering}</h1>
    </div>
    <div className='absolute top-120 left-10 text-white'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, soluta tempore doloremque ex rerum placeat.</p>
    </div>
    <div className='top-150 left-10 absolute text-white p-2 bg-teal-500 w-30 h-13 text-[20px] rounded-4xl flex text-center font-sans font-bold'>
        <button className='hover:cursor-pointer'>Click info </button>
    </div>
    <div>
      <ArrowRight className='absolute top-151 left-60 text-gray-900 text-lg bg-teal-500 h-10 w-10 rounded-full hover:cursor-pointer'/>
    </div>
    </div>
  )
}

export default RightCard
