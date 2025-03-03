import React from 'react'
import "../components/Footer.css"

const Footer = () => {
  return (
    <div className='footer-bg'>
      <div className='footer-end'>
        {/* logo */}
        <div className='footer-home'>
          <div className="text">
            <p className="ai">THEBEST</p>
            <span className="spa">PRICE</span>
          </div>
            <div className='footer-all'>
              <div className='l-1'>
                <ul className='l'>
                  <li className='a home-active'>Account Info.</li>
                  <li className='a'>About Us</li>
                </ul>
              </div>
              {/* 2 */}
              <div className='l-1'>
                <ul className='l'>
                  <li className='a'>Settings</li>
                  <li className='a'>Support</li>
                </ul>
              </div>
              {/* 3 */}
              <div className='l-1'>
                <ul className='l'>
                  <li className='a'>Give Feedback</li>
                  <li className='a'>FAQ</li>
                </ul>
              </div>
              {/* 4 */}
              <div className='l-1'>
                <ul className='l'>
                  <li className='a'>Check Update</li>
                </ul>
              </div>
            </div>
        </div>
        <hr className='hr' />
        <div className='i'>
          <i class="fa fa-facebook-official home-active"></i>
          <i class="fa fa-whatsapp"></i>
          <i class="fa fa-instagram"></i>
          <i class="fa fa-twitter-square"></i>
          <i class="fa fa-chrome"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer