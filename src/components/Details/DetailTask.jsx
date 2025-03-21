import React from 'react'
import "../../components/Details/DetailTask.css"
import Task from "../../assets/Images/Task.jpg";
import Ron from "../../assets/Images/ron.jpg";
import Mik from "../../assets/Images/mikael.jpg";

const DetailTask = () => {
  return (
    <div className='detailTask-contanier'>
      <div className='detail-fa'>
       <i class="arrow fa fa-arrow-left" aria-hidden="true"></i>
       <h1>Task Details</h1>
      </div>
      {/* TEXT */}
      <div className='text-page'>
        <p className='pro-h1'>Project Overview</p>
        <h1 className='head-1'>looking for an experience web designer</h1>
      </div>
      {/* name and check profile */}
      <div className='bas'>
        <div className='veri'>
          <h1 className='moh'>mohammed bashir</h1>
          <p className='ver'>verified tasker</p>
        </div>
        <button className='check'>check profile</button>
      </div>
      {/* image preview */}
      <div className='images-preview'>
        <div className='img-center'>
          <img className='preview' src={Mik} alt="" />
        </div>
      </div>
      {/* description */}
      <div className='description'>
        <h1 className='head-2'>description</h1>
        <p className='pg'>Our ideal developer will be able to work independently on projects,
          meet tight deadlines and deliver high-quality work that exceeds client
          expectations. If you have a passion for developing innovative and
          user-friendly websites using WordPress, we would love to hear from you.
        </p>
      </div>
      {/* pricing */}
      <div className='status'>
        <div className='pricing'>
          <h1 className='case-title'>Pricing:</h1>
          <p className='case-title-1'>#50,000</p>
        </div>
        <div className='pricing'>
          <h1 className='case-title'>status:</h1>
          <p className='case-title-11'>completed</p>
        </div>
      </div>
      {/* project Type */}
      <div className='status'>
        <div className='pricing'>
          <h1 className='case-title'>project type:</h1>
         <div className='statu'>
          <p className='case-title-1'>remote</p>
          <p className='case-title-1'>onsite</p>
         </div>
        </div>
      </div>
      {/* font */}
      <div className='message'>
       <i class="fa fa-commenting-o" aria-hidden="true"></i>
      </div>
    </div>
  )
}

export default DetailTask