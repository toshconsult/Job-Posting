import  { useState, useEffect } from 'react'
const img4 = 'https://img.freepik.com/free-photo/young-professional-african-american-videographer-holding-professional-camera-with-tripod-pro-equipment-afro-cameraman-wearing-black-duraq-making-videos_627829-4378.jpg?t=st=1745359407~exp=1745363007~hmac=519c6673c2f215285dcb3a61fbda90d75835d16ab373fed4632db0ebd0ad736f&w=996'
const img5 = 'https://img.freepik.com/free-photo/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory_609648-724.jpg?t=st=1745358670~exp=1745362270~hmac=7c0faee18ed69ec6405f023cbfc73b40e2379956faeda94e5b156d8478feaa0a&w=900'


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
          <div className='flex flex-col gap-5 justify-center items-center text-center w-[50%] h-full px-4'>
            <img 
              src={images[currentImageIndex]} 
              alt="About Us" 
              className='lg:w-[70vw] lg:h-[70vh] object-cover rounded-lg shadow-lg transition-all duration-1000 ease-in-out' 
            />
          </div>
          <div className='flex flex-col gap-5 justify-center items-center text-center w-[50%] h-full px-20'>
            <h1 className='text-[35px] lg:text-[35px] lg:w-[35vw] font-bold text-black drop-shadow-lg'>
              About Us
            </h1>
            <p className='text-[18px] lg:text-[20px] lg:w-[40vw] font-normal text-gray-700'>
              We are a platform that connects service providers with customers, making it easier for both parties to find what they need.
            </p>
            <p className='text-[18px] lg:text-[20px] lg:w-[40vw] font-normal text-gray-700'>
              Our mission is to provide a seamless experience for both service providers and customers, ensuring that everyone gets the best value for their time and money.
            </p>
            <button className='bg-[#333] cursor-pointer px-[20px] text-white py-[10px] rounded'>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
