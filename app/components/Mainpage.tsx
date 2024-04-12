'use client'
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger
import { poppin } from '../constants/index';
import NorthIcon from '@mui/icons-material/North';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import program from '@/public/program.png'
import Skeleton from 'react-loading-skeleton';
// import { textEnter, textLeave } from './Cursor';
gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

const MainPage = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const scrollRef = useRef(null);
  const iconRef = useRef(null);
  const roadRef = useRef(null); // Reference for the road lines

  useLayoutEffect(() => {
    if (h1Ref.current) {
      gsap.to(h1Ref.current, {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: 'power4.out',
        delay: 7
      });
    }

    if (scrollRef.current) {
      gsap.to(scrollRef.current, {
        y: 0,
        opacity: 1,
        duration: 2.1,
        ease: 'power4.out',
        delay: 9.5
      });
    }

    if (pRef.current) {
      gsap.fromTo(pRef.current,{
          delay:0,
          duration:0
      }, {
        y: 0,
        opacity: 1,
        duration: 3.6,
        ease: 'power4.out',
        delay: 8
      });
    }

    if (iconRef.current) {
      gsap.to(iconRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
        delay: 10
      });
    }
  }, []);

  return (
    <section className="flex h-screen w-full  flex-colm container relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-road-lines" ref={roadRef} />
      </div>
      <div className="w-full min-h-[30vh] max-h-[30vh]  overflow-hidden flex-center">
      </div>
      <div className="relative w-full min-h-[50vh] flex text-white snap">
        <div className="  m-auto min-h-50vh snap  w-[90%] absolute ml-24 left-0">
          <div className="relative w-[90%]  h-[100%] leading-10 flex-center flex-col section ">
            <div className="w-full h-[30%] relative">
            </div>
            <p className={`text-white text-2xl top-28 w-[60%]  absolute left-0  h-full text-left  leading-[60px]  space ${poppin.className}`} ref={pRef} style={{ transform: 'translateY(150%)', opacity: 0 }}>
              Empowered Learning
              <span className="text-[#40E0D0]">{" "}Unleashing 10X Productivity </span>, of Students with Passion and Purpose.
            </p>
          </div>
          <div className="relative w-[90%]  h-[100%] leading-10 flex-center flex-col section ">
            <div className="w-full h-[30%] relative"></div>
            <div className="  absolute w-[13%] h-[25%] left-[1200px] top-6 z-[9999]">
              <div className="w-full h-full glass px-2">
                <h3 className={`text-[#2a2f3f] ${poppin.className} font-bold`}>Tech</h3>
                <div className="w-[120px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg " ></div>
                <div className="w-[90px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
                <div className="w-[50px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
              </div>
            </div>
            <p className={`text-white text-2xl top-28 w-[60%]  absolute left-0  h-full text-left  leading-[60px]  space ${poppin.className}`}>
              <p>Stay ahead with the latest tech releases and<span className='textColor'> personalized news updates</span>, keeping you informed and empowered in todays fast-paced world of technology.</p>
            </p>
          </div>
          <div className="relative w-[90%]  h-[100%] leading-10 flex-center flex-col section ">
            <div className="w-full h-[30%] relative"></div>
            <div className="  absolute w-[13%] h-[25%] left-[850px] top-32 z-[9999] ">
              <div className="w-full h-full glass px-2">
                <h3 className={`text-[#2a2f3f] ${poppin.className} font-bold`}>Recommendes</h3>
                <div className="w-[120px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
                <div className="w-[90px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
                <div className="w-[50px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
              </div>
            </div>
            <p className={`text-white text-2xl top-28 w-[60%]  absolute left-0  h-full text-left  leading-[60px]  space ${poppin.className}`}>
            Analyzes user needs and preferences to identify relevant problem statements.
            </p>
          </div>
          <div className="relative w-[90%]  h-[100%] leading-10 flex-center flex-col section ">
            <div className="w-full h-[30%] relative"></div>
            <div className="  absolute w-[13%] h-[25%] left-[1200px] top-44 z-[9999] ">
              <div className="w-full h-full glass px-2">
                <h3 className={`text-[#2a2f3f] ${poppin.className} font-bold`}>API{'\u0027'}s</h3>
                <div className="w-[120px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
                <div className="w-[90px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
                <div className="w-[50px] h-[3px] bg-[#2a2f3f] mb-[0.7rem] rounded-lg" ></div>
              </div>
            </div>
            <p className={`text-white text-2xl top-28 w-[60%]  absolute left-0  h-full text-left  leading-[60px]  space ${poppin.className}`} >
            Automatically identifies and prioritizes frequently used APIs among users.
             </p>
          </div> 
        </div>
        <div className="h-full  w-[30%] absolute right-0 top-0   mr-24 flex-center">
          <Image src={program} alt='programmer' className=' animatebounce' />
          {/* <div className=" absolute top-0 w-[30%] h-[30%]"></div> */}
        </div>
      </div>


      <div className="relative w-full min-h-[5vh] flex-center z-[9999] bg-[#000]">
        <div className="w-[7%] flex-center h-[10em]">
          <div className="w-full h-[20%] flex-all overflow-hidden  ">
            <NorthIcon className="text-white hell transform skew-y-45 overflow-hidden  animateup" ref={iconRef} style={{ transform: 'translateY(200%)', opacity: 0 }} />
            <p className={`${poppin.className} text-white text-lg`} ref={scrollRef} style={{ transform: 'translateY(100%)', opacity: 0 }}>scroll</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default dynamic(() => Promise.resolve(MainPage), { ssr: false })