import React from 'react'
import "../Select/Select.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Gra from "../../assets/Images/graphics.png";
import Pro from "../../assets/Images/programming.png";
import Ui from "../../assets/Images/favpng.png";
import Plum from "../../assets/Images/plumber.png";
import Furn from "../../assets/Images/Furniture.png";
import Clean from "../../assets/Images/cleaning.png";
import Tor from "../../assets/Images/education.png";
import Mannage from "../../assets/Images/images.png";
import Prod from "../../assets/Images/editing.png";

const Select = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 8,
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
        }
      };
  return (
    <div className='select-container'>
        <div>
            <h1 className='select-h1 px-16'>Trending <span className='select-span'>Categories</span></h1>
            <span className='select-text'></span>
        </div>
        <div>
        <div className='card-1'>
            <Carousel responsive={responsive}>
                {/* <div className='card'>
                    <div>
                        <img className='card-img' src={Gra} alt="" />
                    </div>
                    <h1 className='card-h1'>Graphics Design</h1>
                </div> */}
                {/* <div className='card'>
                    <div>
                        <img className='card-img' src={Pro} alt="" />
                    </div>
                    <h1 className='card-h1'>Programming</h1>
                </div> */}
                {/* <div className='card'>
                    <div>
                        <img className='card-img' src={Ui} alt="" />
                    </div>
                    <h1 className='card-h1'>UI/UX Design</h1>
                </div> */}
                <div className='card'>
                    <div>
                        <img className='card-img' src={Plum} alt="" />
                    </div>
                    <h1 className='card-h1'>Plumbing</h1>
                </div>
                <div className='card'>
                    <div>
                        <img className='card-img' src={Furn} alt="" />
                    </div>
                    <h1 className='card-h1'>Furniture</h1>
                </div>
                <div className='card'>
                    <div>
                        <img className='card-img' src={Clean} alt="" />
                    </div>
                    <h1 className='card-h1'>Cleaning</h1>
                </div>
                <div className='card'>
                    <div>
                        <img className='card-img' src={Tor} alt="" />
                    </div>
                    <h1 className='card-h1'>Torturing</h1>
                </div>
                <div className='card'>
                    <div>
                        <img className='card-img' src={Mannage} alt="" />
                    </div>
                    <h1 className='card-h1'>Mannagement</h1>
                </div>
                <div className='card'>
                    <div>
                        <img className='card-img' src={Prod} alt="" />
                    </div>
                    <h1 className='card-h1'>Production</h1>
                </div>
            </Carousel>
        </div>
        </div>
    </div>
  )
}

export default Select