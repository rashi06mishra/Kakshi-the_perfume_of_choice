import {logo, perfume1, perfume2, perfume3, perfume4} from '../assets/images'
import React, { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const Hero = () => {
  const slides = [
    {
      img: perfume1
    },
    {
      img: perfume2
    },
    {
      img: perfume3
    },
    {
      img: perfume4
    },
  ];

  const [currentIndex, setcurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide? slides.length -1 : currentIndex-1;
    setcurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };

  // const gotoSlide = (slideIndex) => {
  //   setcurrentIndex(slideIndex);
  // }

  return (
    <section 
      id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
        <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-0 ">
          <img 
            src={logo} 
            alt="KakshiLogo" 
            width={300}
            height={300}
            className='self-center'
          />
          <p className="text-xl font-montserrat text-slate-800 pt-8 font-semibold">Experience the allure of <span className='text-yellow-600'>Radiance Attar</span> and discover a scent that is as distinctive as you are. Immerse yourself in the world of <span className='text-yellow-600'>KAKshie Perfume</span>, where the harmony of nature and luxury converge to create an unforgettable olfactory journey.</p>
        </div>

        <div className='max-w-[750px] h-[500px]w-full m-auto py-16 px-4 relative group  pt-5  flex-1 flex justify-center items-center  xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center  '>
          <div
            style ={{backgroundImage: `url(${slides[currentIndex].img})`}} 
            className='w-[750px] h-[500px] rounded-2xl bg-center bg-cover duration-500 '
          ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
              <BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>

            {/* Dots below the slide */}
          {/* <div className='flex top-4 justify-center self-center place-items-end justify-items-end py-2'>
            {
              slides.map( (slide, slideIndex) => (
                <div 
                key={slideIndex} 
                onClick={ () => gotoSlide(slideIndex)} 
                className='text-2xl cursor-pointer'
                >
                  <RxDotFilled />
                </div>
              ))}
          </div> */}
        </div>
    </section>
  )
}

export default Hero