import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import img3 from '../../assets/Images/image1.jpeg';
// import img4 from '../../assets/Images/pic.avif';

const img3 = 'https://img.freepik.com/free-photo/young-professional-african-american-videographer-holding-professional-camera-with-tripod-pro-equipment-afro-cameraman-wearing-black-duraq-making-videos_627829-4378.jpg?t=st=1745359407~exp=1745363007~hmac=519c6673c2f215285dcb3a61fbda90d75835d16ab373fed4632db0ebd0ad736f&w=996'
const img4 = 'https://img.freepik.com/free-photo/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory_609648-724.jpg?t=st=1745358670~exp=1745362270~hmac=7c0faee18ed69ec6405f023cbfc73b40e2379956faeda94e5b156d8478feaa0a&w=900'

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
    <div className='relative w-full h-[50vh] md:h-screen overflow-hidden'>
     
      <div
        className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col gap-5 justify-center
       items-center text-center w-full  h-full px-4'>
        <h1 className='text-[25px]  lg:text-[35px] lg:w-[36vw] font-bold text-white drop-shadow-lg'>
            Find quality service providers and Get Your Work Done
            ...Effortlessly
        </h1>
        <div className='flex gap-[20px] lg:gap-[40px] pt-[10px] lg:pt-[20px]'>
            
        <Link to='/account-type'>  <button className='bg-black text-white px-[35px] py-[10px] rounded hover:bg-inherit border-orange border-solid border-[3px] hover:text-white' onClick={handleEnrollClick}>
            Get Started
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
