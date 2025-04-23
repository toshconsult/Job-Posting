import  { useState, useEffect } from 'react'
import img4 from '/src/assets/Images/image1.jpeg'
import img5 from '/src/assets/Images/pic.avif'

const images = [img4, img5];

const AboutUs = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='victorian'>
      <div className='bg-gray-100 shadow-lg py-10'>
        <div className='lg:flex lg:flex-row gap-5 justify-center items-center text-center lg:w-full h-full px-4'>
          <div className='flex flex-col gap-5 justify-center items-center text-center w-full h-full px-4'>
            <img 
              src={images[currentImageIndex]} 
              alt="About Us" 
              className='lg:w-[70vw] lg:h-[70vh] object-cover rounded-lg shadow-lg transition-all duration-1000 ease-in-out' 
            />
          </div>
          <div className='flex flex-col gap-5 justify-center items-center text-center w-full h-full px-4'>
            <h1 className='text-[35px] lg:text-[35px] lg:w-[35vw] font-bold text-black drop-shadow-lg'>
              About Us
            </h1>
            <p className='text-[18px] lg:text-[20px] lg:w-[50vw] font-semibold text-gray-700 drop-shadow-lg'>
              We are a platform that connects service providers with customers, making it easier for both parties to find what they need.
            </p>
            <p className='text-[18px] lg:text-[20px] lg:w-[50vw] font-semibold text-gray-700 drop-shadow-lg'>
              Our mission is to provide a seamless experience for both service providers and customers, ensuring that everyone gets the best value for their time and money.
            </p>
            <button className='bg-blue-600 cursor-pointer px-[20px] text-white py-[10px] rounded'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
