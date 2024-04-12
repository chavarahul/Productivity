'use client'
import React from 'react'
import { navElements, poppin } from '../constants'
import { NavItems } from '../constants/types/type'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
const SideBar = () => {
    
    return (
        <>
         <div className="absolute   h-full w-full top-0 left-0 ">
                <div className="absolute ml-[17.8rem] h-full w-[3%] top-0  z-[9999] flex-colm">
                  <div className="w-full h-[50%] bg-white z-[9999] rounded-full"></div>
                  <div className="w-full h-[50%] bg-black rounded-full"></div>
                </div>
            </div>
        <section className=' w-[20%] h-full relative bg-[#fff] flex-center z-10'>
            <div className="w-full h-[80%] relative">
                <div className="w-full h-[20%] relative">
                    <h1 className={`${poppin.className} w-[100%] text-2xl h-full font-medium  flex-center`}><span className={`textColor h-full flex-center`}>Study</span> Sphere</h1>
                </div>
                <nav className="w-full h-[60%] relative py-4">
                    {
                        navElements.map((t:NavItems,index:number)=>(
                            <Link href={t.link} className={`text-black w-full h-[17%] capitalize flex-colm text-lg blink ${poppin.className}`} key={index}>{t.name}</Link>
                        ))
                    }
                </nav>
                <div className="w-full h-[10%] ">
                    <button className='bg-none w-full h-full text-lg blink' onClick={()=>{signOut()}}>Sign Out</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default SideBar
