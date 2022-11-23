import React from 'react'
import webinar from "../../../assets/img/Webinar-amico 1.png"
import arrow from "../../../assets/img/down-arrow.png"
import { LocalImage } from '../../image-snippents'
import Image from 'next/image'
type Props = {}

const BannerSection = (props: Props) => {
  return (

    // atudent homepage banner section

    <section className="section-container h-[80vh] flex items-center justify-around">
      <div className=" h-4/6 w-2/5 relative">
        <LocalImage src={webinar} alt="Hero Section Image" layout="fill" />
      </div>
      <div className='relative lg:w-[800px] h-[189px] ml-24'>
        <h1 className=" text-[40px]  leading-[70px] font-semibold text-textSecondary">
          Search Between More Than
          <span className="text-primaryLight">500 <br />
           Highly Qualified {" "}</span> Tutors to Satisfy <br />
           Your Query 
        </h1>
        <h1 className="text-3xl font-bold text-textSecondary mt-2 mb-6">
          {" "}
          
        </h1>

        {/* group off button */}

        <div className='w-[100%] h-[76px] relative'>
                <button className='btnAccent rounded-l-full border-white border-r-2'>class </button>
                <button className='btnAccent border-white border-r-2'>subject</button>
                <button className='btnAccent border-white border-r-2'>topic</button>
                <button className='btnAccent w-36 pr-4 '>location</button>
                <button className='btnPrimary h-10 w-32 rounded-bl-full rounded-r-full absolute right-10'>search</button>
        </div>
      </div>
      
    </section>
    
  )
}

export default BannerSection;