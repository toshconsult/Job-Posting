import React from 'react'
import "../../components/PostDetail/post.css";
import Ed from "../../assets/Images/edit.png";
import Arr from "../../assets/Images/Arrow 1.png"

const Post = () => {
  return (
    <div className='post-all'>
      <div className='post-container'>
        <h1 className='post-h1'> <img src={Arr} alt="" /> post detail</h1>
        <div className='blur'>
        </div>
      </div>
     <div className='post-b'>
        <p className='post-title'>need a professional web designer for my store</p>
          <p className='post-text'>Our ideal developer will be able to work independently on projects, 
            meet tight deadlines and deliver high-quality work that exceeds client expectations. 
            If you have a passion for developing innovative and
            user-friendly websites using WordPress, we would love to hear from you.
          </p>
     </div>
     {/* location */}
     <div className='post-loc'>
        <div className='post-pc'>
          <p className='post-pri'>pricing</p>
          <p className='post-c'>#50,000</p>
        </div>
        {/* 2 */}
        <div className='post-pc'>
          <p className='post-pri'>location</p>
          <p className='post-c'>10 km</p>
        </div>
     </div>
     {/* part2 */}
     <div className='post-lock'>
        <div className='post-pc'>
          <p className='post-pri'>date</p>
          <p className='post-c'>6 days</p>
        </div>
        {/* 2 */}
        <div className='post-pc'>
          <p className='post-pri'>project type</p>
          <div className='border'>
            <p className='post-c'>onsite</p>
            <p className='post-c'>remote</p>
          </div>
        </div>
     </div>
     {/* button */}
     <div className='ed'>
       <img className='big' src={Ed} alt="" />
     </div>
    </div>
  )
}

export default Post