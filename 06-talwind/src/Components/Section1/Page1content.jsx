import React from 'react'
import LeftText from './LeftText'
import RightContent from './RightContent'

const Page1content = () => {
  return (
    <div className='py-10 flex gap-8 items-center h-full'>
      <LeftText />
      <RightContent />
    </div>
  )
}

export default Page1content
