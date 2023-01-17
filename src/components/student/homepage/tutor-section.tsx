import Image from 'next/image'
import React from 'react'
import AvailableTutor from './available-tutor'
import PriceRange from './price-range'
type Props = {}

const AvailableTutors = (props: Props) => {
  return (
    <section className='h-screen section-container mx-auto'>

      {/* title */}

      <div>
        <h1 
        className='text-accent text-[30px] leading-[30px] text-center'>
        Available Tutors
        </h1>
        
      </div>

      {/* availabe tutor */}

      <div className='grid  grid-cols-[300px_minmax(800px,_1fr)_100px] gap-8 '>
        <PriceRange/>
        <AvailableTutor/>
      </div>
    </section>
  )
}

export default AvailableTutors