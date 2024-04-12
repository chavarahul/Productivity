'use client'
import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { poppin } from '../constants';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios';
import ApexCharts from 'apexcharts'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Voice from '../components/news/voice';
const Page = () => {
    const [tech, setTech] = useState('')
    const [data, setData] = useState<string[]>([])
    const [ show,setShow]= useState<boolean>(true)
    const handlePage = async (e: any) => {
        setShow(false)
        e.preventDefault()
        const res = await axios.post('/api/best', { lang: tech })
        console.log(res)
        console.log(res?.data)
        let resp = res.data.text.replace(/\*/g, '');
        const formattedData = resp
            .split(/\d+\.\s+/)
            .filter(Boolean)
            .map((item: string) => item.trim().replace(/\./g, '.\n'));
        setShow(true)
        setData(formattedData)

    }
    return (
        <>
        <Voice>
            <div className="w-screen h-screen relative">
                <SideBar />
                <div className="border-4 absolute top-0 flex items-center justify-end left-0 w-full h-full">
                    <div className="relative h-full w-[80%]  flex-center ">
                        <div className="relative  w-[80%] h-full">
                            <div className="w-full h-[10%]  flex items-center mt-20 ">
                                <div className=" w-full h-[30%]">
                                    <h1 className={`${poppin.className} text-white space text-center text-xl font-semibold mt-5`}>
                                        Get Most used <span className='textColor'> API{`\u0027`}S Website</span> for specific domains..
                                    </h1>
                                </div>
                            </div>
                            <div className=" h-[75%] overflow-y-scroll scroller ">
                                <div className="h-[30%] flex-center">
                                    <form className="searchBox" onSubmit={handlePage} method='post'>
                                        <input
                                            className="searchInput"
                                            type="text"
                                            name="tech"
                                            placeholder="Search something"
                                            value={tech}
                                            onChange={(e) => { setTech(e.target.value) }}
                                        />
                                        <button className="searchButton" type='submit'>
                                            <ArrowForwardIcon />
                                        </button>
                                    </form>
                                </div>
                                <ul className="w-full h-[80%]  leading-10">
                                    {
                                        show ? (
                                            data.map((item, index) => (
                                                <li className={`${poppin.className} text-white `} key={index}>{item}</li>
                                            ))
                                        ) : (
                                            <div className="loader">
                                                <div className="wrapper">
                                                    <div className="circle" />
                                                    <div className="line-1" />
                                                    <div className="line-2" />
                                                    <div className="line-3 top-24" />
                                                    <div className="line-4 top-32" />
                                                    <div className="line-3 top-40" />
                                                    <div className="line-4 top-48" />
                                                    <div className="line-3 top-56" />
                                                    <div className="line-4  top-64" />
                                                    <div className="line-2  top-72" />
                                                </div>
                                            </div>
                                        )
                                    }
                                </ul>
                            </div>
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Voice>
        </>
    );
};

export default Page;
