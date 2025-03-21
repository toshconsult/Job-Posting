import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';

const GovernCard = () => {

    const [fullName, setFullName] = useState ('');
    const [email, setEmail] = useState('');
    const [birth, setBirth] = useState('');
    const [nationality, setNationality] = useState(false)

    function changeName (e){
        const value = e.target.value
        setFullName(value);
    }

    function changeEmail(e){
        setEmail(e.target.value);
    }

    function changeBirth(e){
        setBirth(e.target.value);
    }

    function changeNation(e){
        setNationality(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault ();

        if(!fullName || !email || !birth || !nationality){
            toast.warn('All field required!')
            return null;
        }
    }


  return (
    <div>
        <div>
            <ToastContainer/>
            <div className='flex flex-col gap-[20px]'>
                <div className='govt lg:justify-center lg:items-start'>
                    <p className='lg:text-[30px] text-[20px] font-bold'>Government <span className='text-pink-500 font-bold'>ID Card</span></p>
                   <div className='lg:flex lg:gap-[20px] flex'>
                        <div className='d1v bg-pink-500'></div>
                        <div className='d1v bg-black'></div>
                        <div className='d1v bg-black'></div>
                   </div>
                </div>
                <div>
                    <div className='name'>
                        <p className='lg:text-[25px] text-[18px] font-medium'>Personal <span className='text-pink-500 font-bold'>Details</span></p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <form className='flex flex-col gap-[20px]' onSubmit={handleSubmit}>
                            <div className='flex flex-col gap-[5px]'>
                                <p>Full Name:</p>
                                <input className=' inp lg:w-[40vw] w-[80vw] h-[6vh] outline rounded' type="text" name="" id="" placeholder='Full Name' value={fullName} onChange={changeName} />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <p>Your Email:</p>
                                <input type="email" className=' inp lg:w-[40vw] w-[80vw] h-[6vh] outline rounded' name="" id="" placeholder='Your Email' value={email} onChange={changeEmail} />
                            </div>
                            <div className='flex flex-col gap-[5px]'>
                                <p>Date of Birth:</p>
                                <input type="date" id="birthday" className=' inp lg:w-[40vw] w-[80vw] h-[6vh] outline rounded' name="birthday" value={birth} onChange={changeBirth}/>
                            </div>
                                <select name="Nationality" className='rounded'  id="Nationality " value={nationality} onChange={changeNation}>
                                    <option value="Lagos">Lagos</option>
                                    <option value="Imo">Imo</option>
                                    <option value="Kwara">Kwara</option>
                                    <option value="Gombo">Gombo</option>
                                </select>
                            <div className='continue bg-pink-500'>
                                <button className='text-[20px] font-medium text-white' type = 'submit' >Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GovernCard