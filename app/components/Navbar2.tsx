'use client'
import React, { useEffect ,useRef,useState} from 'react'
import { poppin } from '../constants'
import { CSSPlugin,gsap } from 'gsap'
import dynamic from 'next/dynamic'
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
        <div className="w-full fixed top-0 left-0   min-h-[12vh] max-h-[16vh] z-[999] justify-between overflow-hidden flex items-end " ref={newNav} style={{transform:'translateY(-150%)',opacity:0}}>
            <div className=" w-[15%] text-center"> <h1 className={`text-white ml-32 TextLine text-2xl  h-full z-10 flex-center text-center  ${poppin.className}`} >
                <span className={`${poppin.className}  capitalize shadow textColor`}>Study</span>
                <span className={`${poppin.className} capitalize shadow`}>Sphere</span>
            </h1></div>
            <div className="relative w-[60%]  flex-all">
            <span className={`${poppin.className} text-white uppercase text-lg hover:textColor`}>home</span>
                <span className={`${poppin.className} text-white uppercase text-lg hover:textColor`}>Tech</span>
                <span className={`${poppin.className} text-white uppercase text-lg hover:textColor`}>Hackthons</span>
                <span className={`${poppin.className} text-white uppercase text-lg hover:textColor`}>Insights</span>
            </div>
        </div>
    )
}

export  default dynamic(()=>Promise.resolve(Navbar),{ssr:false})