import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import CountUp from 'react-countup';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "./Footer";

const img33 = 'https://img.freepik.com/free-photo/young-professional-african-american-videographer-holding-professional-camera-with-tripod-pro-equipment-afro-cameraman-wearing-black-duraq-making-videos_627829-4378.jpg?t=st=1745359407~exp=1745363007~hmac=519c6673c2f215285dcb3a61fbda90d75835d16ab373fed4632db0ebd0ad736f&w=996'
const img44 = 'https://img.freepik.com/free-photo/engineer-cooperation-male-female-technician-maintenance-control-relay-robot-arm-system-welding-with-tablet-laptop-control-quality-operate-process-work-heavy-industry-40-manufacturing-factory_609648-724.jpg?t=st=1745358670~exp=1745362270~hmac=7c0faee18ed69ec6405f023cbfc73b40e2379956faeda94e5b156d8478feaa0a&w=900'


const img1 = 'https://img.freepik.com/free-vector/mindfulness-concept-illustration_114360-875.jpg?t=st=1746033680~exp=1746037280~hmac=762b11e561b5374ed19b75a7b8885ff7e65029b439c7f82afccfdd82dad7eaa2&w=740'
const img3 = 'https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?t=st=1746033986~exp=1746037586~hmac=bdba82841d1d69247a45bc67e7802da8add042278ae52f98d120574c938792b6&w=740'
const img2 = 'https://img.freepik.com/free-vector/transactional-marketing-abstract-illustration_335657-5035.jpg?t=st=1746033910~exp=1746037510~hmac=befa43fc65a7e904bd521576a4bee11ffdc8fc48dadfbd57e282aa2c3385c328&w=740'
const img4 = 'https://img.freepik.com/free-vector/woman-choosing-dates-calendar-appointment-booking_23-2148552956.jpg?t=st=1746034065~exp=1746037665~hmac=dd569a8a1870cdd9420760c70e28f807739a0089314d6305465597476d4a85d0&w=740'
const features = [
    {
      image: img1,
      title: 'Flexible',
      description:
        'Our platform adapts to your schedule and requirements, allowing you to find the right service provider when and where you need them.',
    },
    {
      image: img2,
      title: 'Affordable',
      description:
        'We ensure that you get access to a wide range of services that fit your budget without compromising on quality.',
    },
    {
      image: img3,
      title: 'Safe and Secure',
      description:
        'We prioritize your safety with verified service providers and secure transactions, ensuring peace of mind.',
    },
    {
      image: img4,
      title: 'All-in-one',
      description:
        'From skilled to semi-skilled services, our platform offers a comprehensive solution for all your needs in one place.',
    },
  ];

  const counters = [
    { title: 'Available Services', value: 1500, suffix: '+' },
    { title: 'Reliable Vendors', value: 500, suffix: '+' },
    { title: 'Happy Customers', value: 10000, suffix: '+' },
    { title: 'Jobs Posted', value: 2500, suffix: '+' },
  ];


const AboutPage = () => {
    const backgroundImages = [img33, img44];
    const [currentIndex, setCurrentIndex] = useState(0);
    // const navigate = useNavigate();
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
    useGSAP(() => {
        // Animation for text content
        gsap.fromTo(
          '.mission-text',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power3.out' }
        );
    
        // Animation for image
        gsap.fromTo(
          '.mission-image',
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
        );
      }, []);
   
      useGSAP(() => {
        // Animation for heading and description
        gsap.fromTo(
          '.header-text',
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' }
        );
    
        // Animation for feature cards
        gsap.fromTo(
          '.feature-card',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.5 }
        );
    
        // Animation for counter section
        gsap.fromTo(
          '.counter-item',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '.counter-section',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }, []);
    
  
    return (
      <div>
        <NavBar />
        <div className='relative w-full h-screen overflow-hidden'>
          {/* Background Image */}
          <div
            className='absolute inset-0 bg-cover bg-center transition-all duration-1000'
            style={{
              backgroundImage: `url(${backgroundImages[currentIndex]})`,
            }}
          />
  
          {/* Content */}
          <div className='relative z-10 flex flex-col gap-5 justify-center items-center text-center w-full h-full px-4'>
            <h1 className='text-[45px] lg:text-[45px] w-[35vw] font-bold text-white drop-shadow-lg'>
              We are Redefining Service Connections
            </h1>
            <h1 className='text-[20px] lg:text-[20px] font-bold text-white drop-shadow-lg'>
              ________Experience a new era of service connections
            </h1>
          </div>
        </div>
      

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="mission-image w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
          <img
            src={img4}
            alt="About Us Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:max-w-[600px]">
          <div className="mission-text">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0481EC] mb-3 sm:mb-4">
              Our Mission
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To empower individuals and businesses by providing a seamless platform that connects
              consumers with skilled vendors, enabling the efficient completion of tasks, projects,
              and services while fostering trust, professionalism, and mutual growth.
            </p>
          </div>
          <div className="mission-text">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0481EC] mb-3 sm:mb-4">
              Our Vision
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              To be the leading global platform for connecting consumers and vendors, revolutionizing
              how services are accessed and delivered by creating a safe, reliable, and collaborative
              environment for all.
            </p>
          </div>
        </div>
      </div>
</div>


 
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      <div className="flex flex-col-reverse lg:flex-row-reverse justify-center items-center gap-8 lg:gap-12">
        {/* Image Section */}
        <div className="mission-image w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]">
          <img
            src={img2}
            alt="About Us Illustration"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:max-w-[600px]">
          <div className="mission-text">
            <h1 className=" text-base sm:text-lg lg:text-4xl  text-gray-700 mb-3 sm:mb-4">
            _____Our Commitment
            </h1>
            <p className=" text-2xl sm:text-3xl font-bold text-[#0A3542]  leading-relaxed">
                We want to put a stop to the challenges associated with finding reliable and top-notch services
            </p>
          </div>
          
        </div>
      </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h1 className="header-text text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A3542] mb-3 sm:mb-4">
          What Sets Us Apart
        </h1>
        <p className="header-text text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          At GYWDE, we are pioneers in providing skilled and semi-skilled services tailored for all
          industries and our mission is to bridge the gap between service consumer and service
          provider.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-12 lg:mb-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card flex flex-col items-center justify-center text-center bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg hover:scale-105"
          >
            <div className="">
              <img
                src={feature.image}
                alt={`${feature.title} Illustration`}
              
                className="w-26 h-26 object-contain rounded-full"
             
              />
            </div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0A3542] mb-2">
              {feature.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Counter Section */}
      <div className="counter-section grid p-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="counter-item flex flex-col items-center text-center p-4 sm:p-6  rounded-lg shadow-md"
          >
            
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0481EC]">
              <CountUp end={counter.value} duration={2.5} separator="," />
              {counter.suffix}
            </p>
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#0A3542] mb-2">
              {counter.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
        <Footer />
      </div>
    );
  };
  
  export default AboutPage;