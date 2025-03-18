import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const Underview = () => {
  return (
    <div>
        <div>
            <div className='flex flex-col items-center pt-[40px] gap-2'>
                <div className='flex items-center absolute pt-[75px] pl-[10px] left-0 top-1 gap-[10px] text-black pb-[50px]'>
                    <IoIosArrowBack />
                    <p className='font-bold'>Back</p>
                </div>
                <div className='flex flex-col items-center justify-center p-[40px]'>
                    <div className='flex items-center pb-[30px] '>
                        <FaRegArrowAltCircleDown className='w-[80px] h-[80px] text-pink-500' />
                    </div>
                    <div className='flex flex-col items-center gap-[20px] p-[5px]'>
                        <p className='text-[35px] font-bold'>Under <span className='text-pink-500'>Review</span></p>
                        <p className='lg:w-[28vw] w-[85vw] text-center text-[16px]'>Your Document Is Under Review And You’ll Be Notified Once Your Document Is Approved.</p>
                    </div>
                    <div className='pt-[80px]'>
                        <p className='text-[18px] underline text-pink-500 font-bold cursor-pointer'>Back To Home</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Underview