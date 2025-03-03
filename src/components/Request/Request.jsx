import React from 'react'
import "../../components/Request/Request.css";
import Fil from "../../assets/Images/filter.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode} from "swiper/modules"
import "swiper/css";
import "swiper/css/free-mode";
import ProductCard from "../../components/Request/ProductCard"

const Request = () => {
  return (
    <div>
        <div className='slider'>
            <div className='request-home'>
                <div className='request-page'>
                    <h1 className='request-h1'>Services <span className='request-span'>Request</span></h1>
                    <p className='request-p'>Submit your proposal for dynamic graphics.</p>
                </div>
                <div className='filer'>
                    <button><i class="fa fa-refresh"></i></button>
                    <div>
                        <img src={Fil} alt="" />
                    </div>
                </div>
            </div>
            {/* Slicker */}
            <div className='request-container'>
                <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },

                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },

                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    
                }}
                >
                    <SwiperSlide>
                        <ProductCard data={{title: "looking for an experience designer", text: "Hello everyone! I’m looking for an experience graphics....", price: "price: undefined", detail: "show details"}} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{title: "well-organized designer", text: "Hello everyone! I’m looking for an experience graphics....", price: "price:  10k+ per hours", detail: "show details"}} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{title: "web designer", text: "Hello everyone! I’m looking for an experience graphics....", price: "price: undefined", detail: "show details"}} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{title: "professional banner designer", text: "Hello everyone! I’m looking for an experience graphics....", price: "price: undefined", detail: "show details"}} />
                    </SwiperSlide>

                    

                   

                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Request