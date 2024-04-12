'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { poppin } from '../constants'
import NewsComponent from '../components/news/DataNews'
import Image from 'next/image'
import annyang from "annyang";
import ArticleDetail from '../components/news/ArticleDetail'
import { useRouter } from 'next/navigation'
import Voice from '../components/news/voice'
const Page = () => {
  const router = useRouter()
  const [news, setNews] = useState<any>([])
  const [current ,setCurrent] =useState<any|null>(null)
  useEffect(() => {
    const apiKey = '34c3a99f-a39e-49bb-842a-d52ed6ebda74';
    const title1 = 'AI';
    const title2 = 'Blockchain';
    const title3 = 'Machine Learning'
    const apiUrl = `http://api.goperigon.com/v1/all?apiKey=${apiKey}&title=${title1},${title2},${title3}&tiles=3&lang=english`;
    const data = async () => {
      const res = await fetch(apiUrl);
      const datas = await res.json();
      console.log(datas)
      setNews(datas)
    }
    data()
  }, [])
  const handlePage = (article: any) => {
    setCurrent(article)
    console.log(current)
  };
  useEffect(() => {
    annyang.addCommands({
        'language': () => {
            router.push('/languages');
        },
        'News': () => {
            router.push('/Dashboard');
        }
    });
    annyang.start();
    
    return () => {
        annyang.removeCommands();
        annyang.abort();
    };
}, []);
  if(current){
    return <ArticleDetail article={current} onBack={() => setCurrent(null)} />;
  }
  return (
    <>
    <Voice>
      <div className="w-screen h-screen relative">
        <SideBar />
        <div className="border-4 absolute top-0 flex items-center justify-end left-0 w-full h-full">
          <div className="relative h-full w-[82%]  flex-center border border-red-600">
            <div className="relative  w-[80%] h-full">
              <div className="w-full h-[20%]  flex items-center">
                <div className=" w-full h-[30%]">
                  <h1 className={`${poppin.className} text-white text-center text-xl font-semibold`}>Stay Updated with the Latest <span className='textColor'>Technology News</span></h1>
                </div>
              </div>
              <div className=" h-[70%] overflow-y-scroll flex flex-wrap scroller">
                {
                  news?.articles && news.articles.length > 0 ? (
                    news.articles.map((article: any) => (
                      <div className="card m-10" key={article.id}>
                        <div className="card-details" >
                          <p className={` ${poppin.className} text-title`}>{article.title}</p>
                          <p className={` ${poppin.className} text-body text-gray-900`}>{article.description}</p>
                        </div>
                        <button className="card-button font-bold " onClick={()=>{handlePage(article)}}>More info</button>
                      </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      </Voice>
    </>
  )
}

export default Page
