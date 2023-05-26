import React from 'react'
import Home from "../../assets/home.jpg"
import { useNavigate } from 'react-router-dom'
const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-screen flex justify-center items-center relative'>
            <img src={Home} alt="" className='h-[70%] ' />
            <div className='absolute bg-transparent w-[150px] h-[122px] top-[279px] left-[33px]' onClick={() => { navigate("/washroom") }}></div>
            <div className='absolute bg-transparent w-[150px] h-[122px] top-[410px] left-[33px]' onClick={() => { navigate("/hall") }}></div>
            <div className='absolute bg-transparent w-[150px] h-[122px] top-[279px] right-[40px]' onClick={() => { navigate("/bedroom") }}></div>
            <div className='absolute bg-transparent w-[150px] h-[122px] top-[410px] right-[40px]' onClick={() => { navigate("/store") }}></div>
            <div className='absolute triangle' onClick={() => { navigate("/attic") }}></div>
        </div>
    )
}

export default LandingPage