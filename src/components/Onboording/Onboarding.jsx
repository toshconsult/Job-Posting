import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import img from '../../assets/img1.jpeg' 

const Onboarding = () => {
  return ( 
    <main className='flex flex-row items-center h-[92vh] w-full '>
        <div className='flex flex-col items-center justify-center w-full relative h-[100%]'>
            <div className='flex items-center absolute left-0 top-1 gap-[10px] text-black pb-[50px]'>
                <IoIosArrowBack />
                <p>Back</p>
            </div>
            <div className='flex flex-col'>
                <div className='flex flex-col py-[20px] items-center'>
                    <p className='text-[20px] text-black font-bold'>Verify Your Identity</p>
                    <p className=''>You're One Step Away to Become A Verified Tasker.</p>
                </div>
                <div className='w-full flex justify-center text-center'>
                    <p className='bg-blue-800 text-white font-medium rounded-[8px] w-[20vw] h-[5vh]'>Let's Go</p>
                </div>
            </div> 
        </div>
        <div className='flex w-full img'>

        </div>
    </main>
  )
}

export default Onboarding