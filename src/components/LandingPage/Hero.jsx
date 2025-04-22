import { useEffect, useState } from 'react';
import img3 from '../../assets/Images/image1.jpeg';
import img4 from '../../assets/Images/pic.avif';



const images = [img3, img4];
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleEnrollClick = () => {
    // navigate('/enroll'); // <-- route to enroll page
  };

  return (
    <div className='relative w-full h-screen overflow-hidden'>
     
      <div
        className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>

      {/* Overlay */}
      

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-5 justify-center items-center text-center w-full h-full px-4'>
        <h1 className='text-[25px] lg:text-[35px] lg:w-[35vw] font-bold text-white drop-shadow-lg'>
            Find quality service vendors and Get Your Work Done
            ...Effortlessly
        </h1>
        <div className='flex gap-[20px] lg:gap-[40px] pt-[10px] lg:pt-[20px]'>
          <button className='bg-black text-white px-[35px] py-[10px] rounded hover:bg-inherit border-orange border-solid border-[3px] hover:text-white' onClick={handleEnrollClick}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
