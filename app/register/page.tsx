'use client'
import React, { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { LoginData } from '../constants/types/type'
import Link from 'next/link'
import { poppin } from '../constants'

import log from '@/public/log.jpg'
const page = () => {
    const [showPassword, setshowPassword] = useState<boolean>(false)
    const [data, setData] = useState<LoginData>({
        email: '',
        password: '',
        phone:'',
    })
    const shPassword = () => {
        setshowPassword(!showPassword)
        console.log(showPassword)
    }
    const handleRegisterChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((d) => ({ ...d, [name]: value }));
    }
    
    const handleSubmit = () =>{
        console.log(data)
    axios.post('/api/register',data).then((res)=>{
       console.log("yess")
    }).catch((err)=>{
        console.log(err);
    }).finally(()=>{
        console.log("fff")
    })
    }

    return (
        <>
         <div className="absolute   h-full w-full top-0 left-0 ">
                <div className="absolute  ml-[45rem]  h-full w-[7%] top-0  z-[9999] flex-colm">
                  <div className="w-full h-[50%] bg-[#fff] z-[9999] rounded-full"></div>
                  <div className="w-full h-[50%] bg-[#000] rounded-full"></div>
                </div>
            </div>
        <div className='LoginContainer'>
            <div className="Wrapper">
                <div className="LoginBox">
                <div className="ShowSide slit bg-white">
                        <div className="MainHeader ">
                            <h1 className={`text-[26px] h-full  text-black  w-full flex-center  font-cursive top-0  ${poppin.className} absolute left-0`}>
                                <span className='textColor'>Study</span>Sphere
                            </h1>
                        </div>
                        <div className="Sub Header   text-black px-24 leading-[50px]">
                            <span className={` ${poppin.className} text-lg w-full h-full leading-10 `}>
                                Stay updated on tech releases, personalized news, popular programming languages via visualization, and nearby hackathons for collaborative innovation.</span>
                        </div>
                        <div className="Image">
              {/* <Image
                src={log}
                alt="Login Image"
              /> */}
            </div>
                    </div>
                    <div className="Login relative bg-black">
                        <div className="Loginwrapper mr-6 rounded-xl ">
                            <div className="TitleLogin">
                                <div className="Main Header ">
                                    <h4 className={`${poppin.className} text-white text-xl`}>Register Form</h4>
                                </div>
                                <div className="Sub Header">
                                    <span className={`${poppin.className} text-white`}>Enter your credentials to access your account</span>
                                </div>
                            </div>
                            <div className="LoginCredentials Register">
                                <form action="" method='post' autoComplete='on' onSubmit={handleSubmit}>
                                    <div className="LoginEmail Tab">
                                        <label className={`my-3 text-white`}>email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder='Enter your email'
                                            value={data.email.toString()}
                                            onChange={handleRegisterChange}
                                            autoComplete='email'
                                            maxLength={30}
                                            // className='mb-10'
                                        />
                                    </div>
                                    <div className="LoginPassword Tab ">
                                        <label className={`mb-3 mt-3 ${poppin.className} text-white`}>Password</label>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder='Enter your password'
                                            autoComplete="current-password"
                                            value={data.password.toString()}
                                            onChange={handleRegisterChange}
                                            maxLength={10}
                                            autoComplete="current-password"
                                        />
                                    </div>
                                    <div className="LoginPassword Tab ">
                                        <label className={`mb-3 mt-3 ${poppin.className} text-white`}>Phone Number</label>
                                        <input
                                            name="phone"
                                            id="phone"
                                            placeholder='Enter your phonenumber'
                                            autoComplete="tel"
                                            value={data.phone}
                                            onChange={handleRegisterChange}
                                            maxLength={10}
                                        />
                                    </div>
                                    <div className="shPassword mt-5 mb-2">
                                        <div className="AdjshPassword">
                                            <div className="Tick">
                                                <input
                                                    type="checkbox" onClick={shPassword}
                                                    style={{ backgroundColor: showPassword ? "#11081f" : "#fff" }}
                                                />
                                            </div>
                                            <label className={` -ml-10 ${poppin.className} text-white`}>show password</label>
                                        </div>
                                    </div>
                                    <div className="Alaccount m-2">
                                        <p className={`${poppin.className} text-white`}>Do you have an account? <span> <Link href="/Login" className='textColor'> Login</Link></span></p>
                                    </div>
                                    <div className="w-full flex-center ml">
                                    <button className='button' type='submit'>
                                            <span className="circle1"></span>
                                            <span className="circle2"></span>
                                            <span className="circle3"></span>
                                            <span className="circle4"></span>
                                            <span className="circle5"></span>
                                            <span className="text">Submit</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default page
