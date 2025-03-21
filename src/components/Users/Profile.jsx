
import Sidebar from '../SideBar'
import {  useContext, useEffect, useState } from "react"
// import Loader from "../Loader";
// import {  Link, useNavigate } from "react-router-dom";
// import image from '/src/assets/react.svg' 
import profile from '/src/assets/images/profiless.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import Loader from '../Loader'
import ProductClick from '../Clients/ProductClick'
const Profile = () => {

  
 const {user, loading, getuser} = useContext(UserContext)
console.log(user);


 const details = user?.userDetails.user;
//  console.log(balance);
 
 

 


 useEffect(()=>{
  getuser()
 }, [])

 
  return (
   
    <div className='flex justify-center md:justify-normal min-h-screen md:gap-72'>
      {loading ? <Loader /> : <>
      <Sidebar /> 

      {user?.role === "client" ? <ProductClick /> : <> 
      <div className=''>
      <div className='w-[328px] md:w-[98%] h-[137px] px-6 border-1 border-[#F3F5FF]  rounded-2xl mt-20 md:mt-10 my-6'>
      <div className="text-right pt-3">
        <Link to='/update-profile' className="text-[#EA1588] text-[12px]">Edit</Link>
      </div>

        <div className=' flex gap-6 items-center '>
        <img src={profile} className='rounded-full w-[67px] h-[67px]'/>
         <div>
          <p className='md:text-4xl'>{details?.username}</p>
          <div>
          <p className='text-gray-600'>{details?.jobTitle}</p>
          <p className=''>{details?.location}</p>
          </div>
         
         </div>
        </div>
      </div>

      <div className='w-[328px] md:w-[98%] pb-4 px-6 border-1 border-[#F3F5FF] rounded-2xl my-6'>
      <div className="pt-3 flex justify-between">
        <h2 className='font-semibold md:text-3xl'>Description</h2>
       
      </div>
      <p className='pt-3'>{details?.profileDescription}</p>
      </div>

      <div className='w-[328px] md:w-[98%] px-6 border-1 border-[#F3F5FF] rounded-2xl my-6'>
      <div className="pt-3 flex justify-between">
        <h2 className='font-semibold text-3xl'>Skillset</h2>
       
      </div>
      <p className='pt-3 grid grid-cols-3 md:grid-cols-4 gap-4 mb-4'>{details?.skillsets.map((skills, index) =>{
        return <span key={index} className='bg-[#F3F5FF] text-[#EA1588] px-2 py-2  rounded-lg'>{skills}</span>
      })}</p>
      </div>
      </div>
      </>}
      </>}
    </div>
  )
}

export default Profile