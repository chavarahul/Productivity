'use client'
import React, { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LoginData } from '../constants/types/type'
import { poppin } from '../constants/index'
// import Button from '../Components/Button'
import { SignInResponse, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { notify, notifyError } from '../Components/Notification'
import log from '@/public/log.jpg'
const Login = () => {
    const router = useRouter()
    const [showPassword, setshowPassword] = useState<Boolean>(false)
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const shPassword = (): void => {
        setshowPassword(!showPassword)
        console.log(showPassword)
    }
    const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('handleLoginChange called:', e.target.name, e.target.value);
        const name = e.target.name;
        const value = e.target.value;
        setLoginData((d) => ({ ...d, [name]: value }));
    }
    const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (loginData.password === '' || loginData.email === '')
            return;
        const response: SignInResponse | undefined = await signIn('credentials', {
            ...loginData,
            redirect: false,
        })
        console.log(response)

        if (response?.status === 200) {
            //   notify('Login Successful')
            router.push('/Home');
        } else {
            //   notifyError('Login Failed')
        }
    };

    return (
        <>
            <div className="absolute   h-full w-full top-0 left-0 ">
                <div className="absolute  ml-[45rem]  h-full w-[7%] top-0  z-[9999] flex-colm">
                    <div className="w-full h-[50%] bg-[#fff] z-[9999] rounded-full"></div>
                    <div className="w-full h-[50%] bg-[#000] rounded-full"></div>
                </div>
            </div>
            <div className='LoginContainer -z-1'>
                <div className="Wrapper">
                    <div className="LoginBox ">
                        <div className="ShowSide slit bg-[#fff]">
                            <div className="MainHeader ">
                                <h1 className={`text-[26px] h-full  text-black font-semibold  w-full flex-center  font-cursive top-0  ${poppin.className} absolute left-0`}>
                                    <span className='textColor'>Study</span>Sphere
                                </h1>
                            </div>
                            <div className="Sub Header   text-black px-24 leading-[50px]">
                                <span className={` ${poppin.className} text-lg w-full h-full leading-10 `}>
                                    Stay updated on tech releases, personalized news, popular programming languages via visualization, and nearby hackathons for collaborative innovation.</span>
                            </div>

                            <div className="Image">
                                <Image
                                    src={log}
                                    alt="Login Image"
                                    width={190}
                                    height={50}
                                />
                            </div>
                        </div>
                        <div className="Login overflow-hidden bg-black">
                            <div className="Loginwrapper mr-6 rounded-xl overflow-hidden">
                                <div className="TitleLogin mt-5">
                                    <div className="Main Header ">
                                        <h4 className={`text-white text-3xl ${poppin.className}`}>Get Started Now</h4>
                                    </div>
                                    <div className="Sub Header mt-5">
                                        <span className={`text-lg ${poppin.className} mt-3 text-white`}>Enter your credentials to access your account</span>
                                    </div>
                                </div>
                                <div className="LoginCredentials ">
                                    <form method='post' onSubmit={handleLogin}>
                                        <div className="LoginEmail Tab">
                                            <label className={`${poppin.className} text-white mb-3`} htmlFor='email'>email</label>
                                            <input
                                                type="text"
                                                name="email"
                                                id="email"
                                                placeholder='Enter your email'
                                                onChange={handleLoginChange}
                                                value={loginData.email.toString()}
                                                maxLength={30}
                                            />
                                        </div>
                                        <div className="LoginPassword Tab mt-5">
                                            <label className={`${poppin.className} text-white mb-3`} htmlFor='password'>Password</label>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                placeholder='Enter your password'
                                                onChange={handleLoginChange}
                                                value={loginData.password.toString()}
                                                autoComplete='current-password'
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
                                                <label className='text-white -ml-10'>show password</label>
                                            </div>
                                        </div>
                                        <div className="Alaccount m-2">
                                            <p className='text-white'>Dont have an account?  <span> <Link href="/register" className='textColor'> Register</Link></span></p>
                                        </div>
                                        <div className="ml-72 mt-7">
                                            {/* <Button BtnName="Submit" type="submit" /> */}
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

export default Login
