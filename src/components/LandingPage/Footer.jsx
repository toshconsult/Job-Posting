
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-12 victorian'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left'>

        {/* Branding & Description */}
        <div>
          <h1 className='text-3xl font-bold mb-4'>THE BESTPRICE</h1>
          <p className='text-gray-400'>
            Your one-stop solution for all your service needs. We bring quality and convenience together.
          </p>
        </div>

        {/* Categories Section */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Categories</h2>
          <div className='flex flex-col gap-2 text-gray-400'>
            <a href="#" className='hover:text-white transition'>Barbering Service</a>
            <a href="#" className='hover:text-white transition'>Cleaning Service</a>
            <a href="#" className='hover:text-white transition'>Electrical Work</a>
            <a href="#" className='hover:text-white transition'>Painting Service</a>
            <a href="#" className='hover:text-white transition'>Transport and Logistics</a>
            <a href="#" className='hover:text-white transition'>Consulting Services</a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Company</h2>
          <div className='flex flex-col gap-2 text-gray-400'>
            <a href="#" className='hover:text-white transition'>About Us</a>
            <a href="#" className='hover:text-white transition'>Careers</a>
            <a href="#" className='hover:text-white transition'>FAQ</a>
            <a href="#" className='hover:text-white transition'>Privacy Policy</a>
            <a href="#" className='hover:text-white transition'>Terms of Service for Consumers</a>
            <a href="#" className='hover:text-white transition'>Terms of Service for Vendors</a>
          </div>
        </div>

        {/* Download Buttons */}
        <div>
          <h2 className='text-xl font-semibold mb-4'>Get the App</h2>
          <div className='flex flex-col sm:flex-row md:flex-col gap-4 items-center md:items-start'>
            <a href="#" className='w-[160px]'>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className='w-full h-auto'
              />
            </a>
            <a href="#" className='w-[160px]'>
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className='w-full h-auto'
              />
            </a>
          </div>
          {/* Social Media Icons */}
          <div className='mt-6 flex gap-4 justify-center md:justify-start'>
            <a href="#" className='text-gray-400 hover:text-white transition text-lg'><FaFacebookF /></a>
            <a href="#" className='text-gray-400 hover:text-white transition text-lg'><FaTwitter /></a>
            <a href="#" className='text-gray-400 hover:text-white transition text-lg'><FaInstagram /></a>
            <a href="#" className='text-gray-400 hover:text-white transition text-lg'><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6'>
        © {new Date().getFullYear()} THE BESTPRICE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
