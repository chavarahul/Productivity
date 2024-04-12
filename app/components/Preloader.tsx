'use client'
import { CSSPlugin,Expo,gsap } from "gsap"
import { useEffect, useState ,useRef} from "react"
import MainPage from "./Mainpage"
import dynamic from "next/dynamic"
import { poppin } from "../constants"
import Tech from "./Tech"
// import { GlobeDemo } from "./ui/globe"
gsap.registerPlugin(CSSPlugin)
const Preloader = () => {
    const [count,setCount] = useState<number>(0)
    const[nav,setNav]=useState<boolean>(false)
    const navRef = useRef(null)
    useEffect(()=>{
        const cout = setInterval(()=>{
           setCount((count:any)=> count < 100 ? count+1: (clearInterval(cout),setCount(100),reveal()))
        },400)
    })
    const reveal = () =>{
        const t1=gsap.timeline({
            onComplete:()=>{
                console.log("Completed")
            }
        })
        t1.to('.follow',{
            width:"100%",
            ease:Expo.easeInOut,
            duration:0.3,
            delay:0.7,
        }).to(".hide",{
            opacity:0,
            duration:0.3
        }).to(".hide",{
            display:"none",
            duration:0.3
        }).to(".follow",{
            height:"100%",
            ease:Expo.easeInOut,
            duration:0.38,
            delay:0.6,
        }).to(".content",{
            width:"100%",
            ease:Expo.easeInOut,
            duration:0.28,
            delay:0.5
        })
    }
  return (
    
    <section className="relative h-screen w-screen">
      <div className="h-full w-full  flex-center absolute top-0">
        <div className="bg-[#fff] z-[2] absolute w-[0] h-[2px] left-0 follow">
          {/* <GlobeDemo /> */}
        </div>
        <div
          className="hide absolute left-0 bg-white h-[2px] w-[0] transition-width duration-400 ease-out"
          id="progress-bar"
          style={{ width: count + "%" }}
        ></div>
         <div id="count" className="hide absolute text-6xl text-white font-semibold -translate-y-15 z-[2]">
          {count}%
        </div>
      </div>
      <div className="h-screen  w-[0] absolute top-0 left-0 content z-[2] bg-[#000] transition-all duration-400 ease-out">
        <MainPage/>
        <Tech />
        </div>
    </section>
  
  )
}
export default dynamic(()=>Promise.resolve(Preloader),{ssr:false})
