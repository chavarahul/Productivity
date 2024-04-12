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
    const [tech, setTech] = useState<string>('')
    const [data, setData] = useState<string[]>([])
    const handlePage = async (e: any) => {
        e.preventDefault()
        const res = await axios.post('/api/lang', { lang: tech })
        console.log(res)
        console.log(res?.data)
        let resp = res.data.text.replace(/\*/g, '');
        const formattedData = resp
            .split(/\d+\.\s+/)
            .filter(Boolean)
            .map((item: string) => item.trim().replace(/\./g, '.\n'));
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
                                <div className="w-full h-[20%]  flex items-center ">
                                    <div className=" w-full h-[30%]">
                                        <h1 className={`${poppin.className} text-white text-center text-xl font-semibold mt-5`}>
                                            Get to know the languages used by <span className='textColor'> top companies</span>
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
                                        {data.map((item, index) => (
                                            <li className={`${poppin.className} text-white `} key={index}>{item}</li>
                                        ))}
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
