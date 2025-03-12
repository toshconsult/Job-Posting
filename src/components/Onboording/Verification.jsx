import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Verification = () => {
  return (
    <main>
        <div className='flex flex-col items-center h-[100vh] p-[40px] gap-2'>
            <div className='flex items-center absolute p-[20px] left-0 top-1 gap-[10px] text-black pb-[50px]'>
                <IoIosArrowBack />
                <p>Back</p>
            </div>
            <div className='fflex flex-col items-center lg:p-7 py-[20px]'>
                <div className='flex flex-col lg:w-[75%] w-[90vw] p-[20px] lg:p-[30px] rounded-2xl  justify-center gap-5'>
                    <div className='flex flex-col pb-5'>
                        <p className='text-[30px] font-bold text-black'>Verification <span className='text-pink-500 font-bold '>Type</span></p>
                    </div>
                    <div className='flex items-center gap-[30px] p-[30px] px-[30px] w-[80vw] h-[7vh] rounded-full justify-between bg-neutral-100 '>
                        <p>Government ID Card</p>
                        <IoIosArrowForward />
                    </div>
                    <div className='flex items-center gap-[30px] p-[30px] px-[30px] w-[80vw] h-[7vh] rounded-full justify-between bg-neutral-100 '>
                        <p>International Passport</p>
                        <IoIosArrowForward />
                    </div>
                    <div className='flex items-center gap-[30px] p-[30px] px-[30px] w-[80vw] h-[7vh] rounded-full justify-between bg-neutral-100 '>
                        <p>Driver Lincence</p>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Verification