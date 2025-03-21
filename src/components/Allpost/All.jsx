import React from 'react'
import "../../components/Allpost/All.css"
import Black from "../../assets/Images/black-a.png";
import Fill from "../../assets/Images/filter.png";

const All = () => {
  return (
    <div className='all-post'>
        <div className='all-title'>
            <h1 className='all-h1'><img src={Black} alt="" />  all post</h1>
            <div>
                <img src={Fill} alt="" />
            </div>
        </div>
        {/* text */}
        <div className='all-border1'>
            <div className='all-border'>
                <div className='all-div'>
                    <h1 className='all-p'>need a professional web designer for my store</h1>
                    <p className='all-pp'>Our ideal developer will be able to work independently on projects, 
                        meet tight deadlines and deliver 
                        high-quality work that exceeds client expectations.
                    </p>
                    <div className='all-bg'>
                        <button className='all-button'>view detail</button>
                    </div>
                </div>
            </div>
            {/* 2 */}
            <div className='all-border'>
                <div className='all-div'>
                    <h1 className='all-p'>professional web designer for my store</h1>
                    <p className='all-pp'>Our ideal developer will be able to work independently on projects, 
                        meet tight deadlines and deliver 
                        high-quality work that exceeds client expectations.
                    </p>
                    <div className='all-bg'>
                        <button className='all-button'>view detail</button>
                    </div>
                </div>
            </div>
            {/* 3 */}
            <div className='all-border'>
                <div className='all-div'>
                    <h1 className='all-p'>experience web designer for my store</h1>
                    <p className='all-pp'>Our ideal developer will be able to work independently on projects, 
                        meet tight deadlines and deliver 
                        high-quality work that exceeds client expectations.
                    </p>
                    <div className='all-bg'>
                        <button className='all-button'>view detail</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default All