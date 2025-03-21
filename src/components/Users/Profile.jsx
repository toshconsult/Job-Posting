
import Sidebar from '../SideBar'
import {  useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
// import Loader from "../Loader";
// import {  Link, useNavigate } from "react-router-dom";
// import image from '/src/assets/react.svg' 
import profile from '/src/assets/images/profiless.png'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
const Profile = () => {

  
  // const [loading, setLoading] = useState(false)
  // const [info, setInfo] = useState(null)
  const navigate = useNavigate()
 const {user, url, userToken} = useContext(UserContext)
 
//  const getProfile = async ()=>{
  

//    const response = await fetch(`${url}api/v1/user/profile`, {
//     method: 'GET',
//     headers: {
//       'Authorization': `Bearer ${token}`
//     }
//    })
//    if (response.ok){
//     const data = await response.json()
//     setInfo(data)
//     // console.log(data);
    
//    } else {
//     const data = await response.json()
//     console.log(data.error);
    
//    }
//  }

//  useEffect(()=>{
//   getProfile()
//  }, [])

  return (
    <div className='flex justify-center md:justify-normal min-h-screen md:gap-72'>
      <Sidebar /> 
      <div className=''>
      <div className='w-[328px] md:w-[98%] h-[137px] px-6 border-1 border-[#F3F5FF]  rounded-2xl mt-20 md:mt-10 my-6'>
      <div className="text-right pt-3">
        <button className="text-[#EA1588] text-[12px]">Edit</button>
      </div>

        <div className=' flex gap-6 items-center '>
        <img src={profile} className='rounded-full w-[67px] h-[67px]'/>
         <div>
          <p className='md:text-4xl'>{user?.username.toUpperCase()}</p>
          <small className='md:text-2xl'>Experience web developer</small>
         </div>
        </div>
      </div>

      <div className='w-[328px] md:w-[98%] h-[166px] px-6 border-1 border-[#F3F5FF] rounded-2xl my-6'>
      <div className="pt-3 flex justify-between">
        <h2 className='font-semibold md:text-3xl'>Description</h2>
        <button className="text-[#EA1588] text-[12px]">Edit</button>
      </div>
      <p className='pt-3'>Product designer & front-end developer creating seamless user experiences. 
        Passionate about solving problems and turning ideas into reality. Constantly learning and growing.</p>
      </div>

      <div className='w-[328px] md:w-[98%] h-[240px] px-6 border-1 border-[#F3F5FF] rounded-2xl my-6'>
      <div className="pt-3 flex justify-between">
        <h2 className='font-semibold text-3xl'>Skillset</h2>
        <button className="text-[#EA1588] text-[12px]">Edit</button>
      </div>
      <p className='pt-3'>Product designer & front-end developer creating seamless user experiences. 
        Passionate about solving problems and turning ideas into reality. Constantly learning and growing.</p>
      </div>
      </div>
    </div>
  )
}

export default Profile