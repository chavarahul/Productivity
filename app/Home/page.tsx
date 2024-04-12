'use client'
import { signOut, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { poppin } from '../constants';
import { tech } from '../constants';
import { Tech } from '../constants/types/type';
import Button1 from '../components/Button1';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import techs from '@/public/techs.jpg'
import Image from 'next/image';

const Page = () => {
  const { data } = useSession();
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]); // State to store selected technologies
  const [selectedStates, setSelectedStates] = useState<{[key: string]: boolean}>({}); // State to store selected states for each button

  const handleButtonClick = (name: string) => {
    if (selectedTechs.includes(name)) {
      // If the technology is already selected, remove it from the array
      setSelectedTechs(prevTechs => prevTechs.filter(tech => tech !== name));
    } else { 
      // Otherwise, add it to the array
      setSelectedTechs(prevTechs => [...prevTechs, name]);
    }
    // Toggle the selected state for the clicked button
    setSelectedStates(prevStates => ({
      ...prevStates,
      [name]: !prevStates[name]
    }));
  };
  
  return (
    <>
    <div className="absolute w-full h-full  top-0 left-0 overflow-hidden">
          <div className="absolute w-[60%] h-[80%] bg-white rot -left-[30rem]">
            {/* <Image  src={techs} alt="xcccccc" height={30} width={300} className='ml-96  mb-40 z-[9999] absolute' /> */}
          </div>
          <div className="bg-white w-[10%] h-[20%] absolute left-0 bottom-0 -z-1"></div>
    </div>
    <div className='relative w-full h-screen pl-96 '>
      <div className="w-full h-[35%] flex items-end justify-center mb-5">
        <h1 className={`text-white ${poppin.className} font-medium text-2xl space ml-20`}>Choose a <span className='textColor'>technology</span> for news Updates</h1>
      </div>
      <div className=" w-full h-[40%] flex-center">
        <div className="w-[50%] h-full  flex flex-col">
          <div className="flex-all my-10  w-[120%]">
            {tech.slice(0, tech.length - 2).map((t: Tech, index: number) => (
              <button 
                className={`buttonss animatebounce flex-center ${selectedTechs.includes(t.name) ? 'bg-teal-200' : ''}`} 
                style={{ backgroundColor: selectedStates[t.name] ? '#40E0D0' : 'transparent',color: selectedStates[t.name] ? '#000' : '#fff' }}
                key={index} 
                onClick={() => handleButtonClick(t.name)}
              >
                <span>{t.name}</span>
                {/* {selectedStates[t.name] ? <DoneIcon className='text-white'/> : <CloseIcon className='text-white'/>} */}
              </button>
            ))}
          </div>
          <div className="flex-all">
            {tech.slice(-2).map((t: Tech, index: number) => (
              <button 
                className={`buttonss animatebounce ml-9 flex-center ${selectedTechs.includes(t.name) ? 'bg-teal-200' : ''}`} 
                style={{ backgroundColor: selectedStates[t.name] ? '#40E0D0' : 'transparent',color: selectedStates[t.name] ? '#000' : '#fff' }}
                key={index} 
                onClick={() => handleButtonClick(t.name)}
              >
                <span>{t.name}</span>
                {/* {selectedStates[t.name] ? <DoneIcon className='text-green-900'/> : <CloseIcon className='text-red-900'/>} */}
              </button>
            ))}
          </div>
          <div className="w-full h-[10%] flex-center mt-16 pl-40">
            <Button1 name="Dashboard" text="Submit"/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Page;
