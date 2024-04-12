import { NextFont } from 'next/dist/compiled/@next/font'
import { Pacifico, Poppins ,Roboto ,Rubik_Vinyl, Rubik_Iso, Rubik_Burned} from 'next/font/google'
import { Tech } from './types/type'
import { NavItems } from './types/type'
export const pacifico : NextFont = Pacifico({ subsets: ['latin'], weight: '400' })
export const poppin : NextFont = Poppins({ subsets: ['latin'], weight: ['400', '500','200', '300','700', '600'] })
export const roboto : NextFont  = Roboto({subsets:['latin'],weight:['100','300','400','700','900']})
export const rubik : NextFont = Rubik_Iso({subsets:['latin'],weight:['400']})
export const rburned : NextFont  = Rubik_Burned({subsets:['latin'],weight:['400']})
export const vinyl : NextFont = Rubik_Vinyl({subsets:['latin'],weight:['400']})

export const tech :Tech[]= [
    {name:"App Development"},
    {name:"Web Development"},
    {name:"Machine Learning"},
    {name:"BlockChain"},
    {name:"Artifical Intelligence"},
]
export const navElements:NavItems[] = [
    {name:"Tech News",link:'/Dashboard'},
    {name:"Technology",link:'/Technology'},
    {name:"Languages",link:"/languages"},
    {name:"APIs",link:"/Bestapi"},
    {name:"Websites",link:"/Bestai"}
]