import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full flex gap-6 p-6 rounded-2xl w-2/3 mb-20 mr-10'>
      <RightCard image="https://i.pinimg.com/1200x/39/84/7d/39847ddaaf498d3963eeea43e9a22c97.jpg" ordering={1}/>
      <RightCard image="https://i.pinimg.com/736x/c4/6a/d4/c46ad4c5093be1c3f431e4c10a1f3f07.jpg"ordering={2}/>
      <RightCard image="https://i.pinimg.com/736x/e6/c4/4e/e6c44e74b75a40848748592e0e7dcdb0.jpg" ordering={3}/>
    </div>

  )
}

export default RightContent
