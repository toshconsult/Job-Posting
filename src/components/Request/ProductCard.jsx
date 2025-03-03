import React from 'react'
import "../../components/Request/Request.css";

const Card = (props) => {
    let {title, text, price, detail} = props.data;
  return (
    <div className='swiper'>
     <div className='all'>
           <div className='swiper-both'>
                <h3 className='swiper-h3'>{title}</h3>
                <p className='swiper-p'>{text} </p>
            </div>
           <div className='swiper-price'>
                <p className='swiper-pr'>{price}</p>
                <h1 className='swiper-show'>{detail}</h1>
           </div>
     </div>
</div>
  )
}

export default Card