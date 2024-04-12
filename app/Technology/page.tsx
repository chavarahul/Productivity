'use client'
import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import { poppin } from '../constants';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import axios from 'axios';
import Link from 'next/link';
import Voice from '../components/news/voice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Page = () => {
  const [news, setNews] = useState<string[]>([]);
  const [tech, setTech] = useState<string>('')
  const [load, setLoad] = useState<boolean>(true)
  const [comp, setComp] = useState<string[]>([])
  const[show,setShow]=useState<boolean>(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/tech');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        if (!data || !data.text) {
          throw new Error('Invalid data format');
        }
        let resp = data.text.replace(/\*/g, '');
        const formattedData = resp
          .split(/\d+\.\s+/)
          .filter(Boolean)
          .map((item: string) => item.trim().replace(/\./g, '.\n'));
        const uniqueNews = removeDuplicates(formattedData);
        setNews(uniqueNews);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleMore = async () => {


  }
  const removeDuplicates = (data: string[]) => {
    return Array.from(new Set(data));
  };
  const handleSubmit = async (e: any) => {
    setLoad(false)
    e.preventDefault()
    const res = await axios.post('/api/comp', { tech });
    let resp = res.data.text.replace(/\*/g, '');
    const formattedData = resp
      .split(/\d+\.\s+/)
      .filter(Boolean)
      .map((item: string) => item.trim().replace(/\./g, '.\n'));
    console.log(res)
    setLoad(true)
    setComp(formattedData)
    setShow(true)
  }
  return (
    <>
    <Voice>
      <div className="w-screen h-screen relative">
        <SideBar />
        <div className="border-4 absolute top-0 flex items-center justify-end left-0 w-full h-full">
          <div className="relative h-full w-[80%]  flex-center ">
            <div className="relative  w-[80%] h-full">
              <div className="w-full h-[20%]  flex items-center">
                <div className=" w-full h-[30%]">
                  <h1 className={`${poppin.className} text-white text-center text-xl font-semibold`}>
                   The top trending technologies<span className='textColor'> in software field</span>
                  </h1>
                </div>
              </div>
              <div className=" h-[70%] overflow-y-scroll  pt-5 scroller ">
                {/* <div className="w-full h-full flex-colm flex-col"> */}
                {
                  news.length > 0 ? (
                    news.map((t: any, index: number) => {
                      const [title, description] = t.split(':');
                      // const [count,setCount] = useSt?ate<number>(0)
                      return (
                        <ul className="w-full  h-[15%] " key={index}>
                          <li className='relative w-full h-full leading-8 text-center'>
                            <span className={`${poppin.className} textColor`}>{title}</span> <span className={`${poppin.className} text-white`}> - </span> <span className={`${poppin.className} text-white`}>{description}</span>
                          </li>
                        </ul>
                      );
                    })) : (
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
                <div className="relative w-full min-h-[5vh] flex-center z-[9999] bg-[#000]">
                  <div className="w-[8%] flex-center h-[10em]">
                    <div className="w-full h-[20%] flex-all overflow-hidden  ">
                      <ArrowDownwardIcon className="text-white hell transform skew-y-45 overflow-hidden  animatedown" />
                      <p className={`${poppin.className} text-white text-lg`}>scroll</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-[70vh] w-full ">
                  <div className="w-full h-[20%]  flex items-center">
                    <div className=" w-full h-[30%]">
                      <h1 className={`${poppin.className} text-white text-center text-xl font-semibold`}>
                        Get To Know  information regarding <span className='textColor'>technologies</span>
                      </h1>
                    </div>
                  </div>
                  <div className="h-[30%] flex-center">
                    <form className="searchBox" onSubmit={handleSubmit} method='post'>
                      <input
                        className="searchInput"
                        type="text"
                        name="tech"
                        placeholder="Search something"
                        value={tech}
                        onChange={(e) => { setTech(e.target.value) }}
                      />
                      <button className="searchButton" type='submit'>
                        <ArrowForwardIcon/>
                      </button>
                    </form>
                  </div>
                  {
                    load ? (
                      <div className="w-full h-[30%] leading-[3rem] flex-center mt-32 px-5">
                        <p className={`text-white text-center ${poppin.className} `}>
                          {comp}
                        </p>
                      </div>
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
                </div>
                {
                  show &&
                  <div className="absolute bottom-8 left-52 h-[4%] bg-white min-w-[50%] rounded-xl flex-center px-2">
                    <p className={`${poppin.className} font-medium`}>Want to know the languages used for <span className=''>{tech}</span>! <Link href="/languages" className=' text underline'>Click Here</Link></p>
                  </div>
                }
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
