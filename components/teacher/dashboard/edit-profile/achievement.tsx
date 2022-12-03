import React from 'react'

type Props = {}

const Achievement = (props: Props) => {
  return (
    <section className="bg-bgAccent rounded-[30px] p-4 mb-8">
      <div className="flex justify-between">
          <p className="bg-primaryLight text-[#FFFFFF] px-6 py-1 rounded-full inline">
            Achievements
          </p>
        <button className="btnPrimary bg-[#C4C4C4] text-primaryDark px-6 py-1 rounded-full font-normal">
          save
        </button>
      </div>
      <div className="my-6 mx-auto">
        <form action="">
          <textarea className='border-2 bg-bgAccent border-[#E0E0E0] rounded-2xl' name="" id="" cols="90" rows="5"></textarea>
        </form>
      </div>
    </section>
  )
}

export default Achievement