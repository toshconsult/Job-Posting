import React from 'react'
import Fill from "../../assets/Images/filter.png"
import Black from "../../assets/Images/black-a.png"
import "../../components/Alloffer/Offer.css"

const Offer = () => {
  return (
    <div className='all-offer'>
        <div className='offer-title'>
            <h1 className='offer-h1'><img src={Black} alt="" />  all post</h1>
            <div>
                <img src={Fill} alt="" />
            </div>
        </div>
        {/* part2 */}
        <div className='offer-class'>
            <div className='border-offer'>
                <div className='offer'>
                   <div className='offer-up'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='offer-h'>
                            <h1 className='offer-title1'>adebayo misturat</h1>
                            <p className='offer-web'>web designer | graphics designer</p>
                        </div>
                   </div>
                   <p className='offer-our'>Our ideal developer will be able to work independently on projects,
                     meet tight deadlines and deliver high-quality work that exceeds client expectations.
                    </p>
                    <div className='offer-co'>
                        <div className='contact'>
                            <button className='offer-btn'>contact me</button>
                        </div>
                        <div className='order'>
                            <button className='offer-now'>order now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* part2 */}
            <div className='border-offer'>
                <div className='offer'>
                   <div className='offer-up'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='offer-h'>
                            <h1 className='offer-title1'>martins felix</h1>
                            <p className='offer-web'>web designer | graphics designer</p>
                        </div>
                   </div>
                   <p className='offer-our'>Our ideal developer will be able to work independently on projects,
                     meet tight deadlines and deliver high-quality work that exceeds client expectations.
                    </p>
                    <div className='offer-co'>
                        <div className='contact'>
                            <button className='offer-btn'>contact me</button>
                        </div>
                        <div className='order'>
                            <button className='offer-now'>order now</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* part3 */}
            <div className='border-offer'>
                <div className='offer'>
                   <div className='offer-up'>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div className='offer-h'>
                            <h1 className='offer-title1'>mike horbe</h1>
                            <p className='offer-web'>web designer | graphics designer</p>
                        </div>
                   </div>
                   <p className='offer-our'>Our ideal developer will be able to work independently on projects,
                     meet tight deadlines and deliver high-quality work that exceeds client expectations.
                    </p>
                    <div className='offer-co'>
                        <div className='contact'>
                            <button className='offer-btn'>contact me</button>
                        </div>
                        <div className='order'>
                            <button className='offer-now'>order now</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Offer