import React from 'react'
import "../../components/Clients/Click.css"
import Im from  "../../assets/Images/Group 70.png"
import Img from "../../assets/Images/Group 71.png";
import Img7 from "../../assets/Images/Group 70.png";
import Img2 from "../../assets/Images/Group 69.png";
import I from  "../../assets/Images/Group 73.png"
import g from "../../assets/Images/Group 74.png";
import Pet from "../../assets/Images/Group 75.png";
import Del from "../../assets/Images/Group 76.png";
import Gro from "../../assets/Images/Group 77.png";
import Fav from "../../assets/Images/Group 78.png";
import Doc from "../../assets/Images/Group 79.png";
import Mana from "../../assets/Images/Group 80.png";
import Tur from "../../assets/Images/Group 81.png";
import Cook from "../../assets/Images/Group 82.png";
import Plum from "../../assets/Images/Group 83.png";
import Photo from "../../assets/Images/Group 84.png";




const ProductClick = () => {
  return (
    <div className='product-what'>
      {/* <div className='product-image'  >
        <div>
          <div className='perfect'>
            <div className='product-images'>
              <div className='is'>
                <h1 className='product-h1'>THEBEST<span className='pp'>PRICE</span></h1>
                <p className='product-now'>Now is the perfect moment to join hands.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Need */}
      
      <div className='product-ll'>
       <p className='client text-center' >what do you need help with?</p>
        <div className='you-all'>
          
          <div className='do'>

            <div className='do-1'>
              <div>
                <img className='round' src={Im} alt="" />
              </div>
              <h1 className='des'>Design</h1>
            </div>
            {/* 2 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Img} alt="" />
              </div>
              <h1 className='des'>Cleaning</h1>
            </div>
            {/* 3 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Img7} alt="" />
              </div>
              <h1 className='des'>Pet Care</h1>
            </div>
            {/* 4 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Img2} alt="" />
              </div>
              <h1 className='des'>Painting</h1>
            </div>
          </div>

          {/* 2 */}

             
          <div className='do'>

            <div className='do-1'>
              <div>
                <img className='round' src={I} alt="" />
              </div>
              <h1 className='des'>Electrial</h1>
            </div>
            {/* 2 */}
            <div className='do-1'>
              <div>
                <img className='round' src={g} alt="" />
              </div>
              <h1 className='des'>Transport</h1>
            </div>
            {/* 3 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Pet} alt="" />
              </div>
              <h1 className='des'>Shopping</h1>
            </div>
            {/* 4 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Del} alt="" />
              </div>
              <h1 className='des'>Delivery</h1>
            </div>
          </div>

          <div className='do'>

            <div className='do-1'>
              <div>
                <img className='round' src={Gro} alt="" />
              </div>
              <h1 className='des'>Errands</h1>
            </div>
            {/* 2 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Fav} alt="" />
              </div>
              <h1 className='des'>Ironing</h1>
            </div>
            {/* 3 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Doc} alt="" />
              </div>
              <h1 className='des'>Repair</h1>
            </div>
            {/* 4 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Mana} alt="" />
              </div>
              <h1 className='des'>Translation</h1>
            </div>
          </div>

          {/* last */}
          <div className='do'>

            <div className='do-1'>
              <div>
                <img className='round' src={Tur} alt="" />
              </div>
              <h1 className='des'>Tutoring</h1>
            </div>
            {/* 2 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Cook} alt="" />
              </div>
              <h1 className='des'>Cooking</h1>
            </div>
            {/* 3 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Plum} alt="" />
              </div>
              <h1 className='des'>Plumbing</h1>
            </div>
            {/* 4 */}
            <div className='do-1'>
              <div>
                <img className='round' src={Photo} alt="" />
              </div>
              <h1 className='des'>Photography</h1>
           </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default ProductClick