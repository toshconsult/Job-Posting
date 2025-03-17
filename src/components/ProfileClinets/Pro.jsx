import React from 'react'
import Black from "../../assets/Images/black-a.png";
import "../../components/ProfileClinets/pro.css";
import Ro from "../../assets/Images/ron.jpg";
import Mess from "../../assets/Images/message.png";

const Pro = () => {
  return (
    <div className='pro-title'>
        <div className='pro-head'>
            <div>
                <img src={Black} alt="" />
            </div>
            <h1 className='pro-h1'>mohammed profile</h1>
        </div>
        {/*  */}
        <div className='pro-case'> 
            <div className='pro-sec1'>
                <div className='pro-sec'>
                    <div className='pro-img'>
                        <img className='ro' src={Ro} alt="" />
                    </div>
                    <h1 className='pro-para'>Mohammed bashir</h1>
                    <p className='pro-pa'>web designer | graphics designer</p>
                </div>
            </div>
            {/*  */}
            <div className='pro-sec11'>
                <div className='pro-hh'>
                    <h1 className='pro-de'>description</h1>
                    <p className='pro-product'>Product designer & front-end developer creating seamless user experiences.
                         Passionate about solving
                         problems and turning ideas into reality. Constantly learning and growing.
                    </p>
                </div>
            </div>
            {/*  */}
            <div className='pro-sec111'>
                <div className='pro-jj'>
                    <h1 className='pro-ski'>skillset</h1>
                    <div className='pro-can'>
                        <div className='pro-cs'>
                            <h1 className='pro-ca'>canva</h1>
                            <h1 className='pro-we'>website design</h1>
                        </div>
                        {/*  */}
                        <div className='pro-cs'>
                            <h1 className='pro-we'>banner design</h1>
                            <h1 className='pro-we'>logo design</h1>
                        </div>
                        {/*  */}
                        <div className='pro-cs'>
                            <h1 className='pro-we'>packaging design</h1>
                            <h1 className='pro-we'>photoshop</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='pro-pgd'>
            <img className='font' src={Mess} alt="" />
        </div>
    </div>
  )
}

export default Pro