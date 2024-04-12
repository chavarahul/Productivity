'use client'
import React, { useEffect ,useRef,useState} from 'react'
import { poppin } from '../constants'
import { CSSPlugin,gsap } from 'gsap'
import dynamic from 'next/dynamic'
import Button1 from './Button1'
gsap.registerPlugin(CSSPlugin)
const Navbar = () => {
    const[nav,setNav]=useState<boolean>(false)
    const newNav = useRef(null)
useEffect(()=>{
    gsap.to(newNav.current,{
       y:0,
       opacity:1,
       ease:"power4.out",
       delay:9,
       duration:1
    })
})
    return (
        <div className="w-full fixed top-0 left-0   min-h-[12vh] max-h-[16vh] z-[999] justify-between  flex items-end " ref={newNav} style={{transform:'translateY(-150%)',opacity:0}}>
            <div className=" w-[15%] text-center"> <h1 className={`text-white ml-32 TextLine text-2xl  h-full z-10 flex-center text-center  ${poppin.className}`} >
                <span className={`${poppin.className}  capitalize shadow textColor`}>Study</span>
                <span className={`${poppin.className} capitalize shadow`}>Sphere</span>
            </h1></div>
            <div className="w-[60%]  h-full flex items-end justify-end absolute top-[0.8rem] right-0">
             <Button1 name="Login" text="Login"/>
            </div>
        </div>
    )
}

export  default dynamic(()=>Promise.resolve(Navbar),{ssr:false})