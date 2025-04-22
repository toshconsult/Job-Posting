import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import img12 from '/src/assets/Images/babering1.jpg';
import img13 from '/src/assets/Images/cleaning1.png';
import img14 from '/src/assets/Images/electrical1.png';
import img15 from '/src/assets/Images/painter1.png';

import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Categories = () => {
  const products = [
    {
      name: 'Barbering Service',
      image: img12,
      description: 'Professional haircutting and grooming with attention to detail.',
    },
    {
      name: 'Cleaning Service',
      image: img13,
      description: 'Top-notch residential and commercial cleaning services.',
    },
    {
      name: 'Electrical Work',
      image: img14,
      description: 'Licensed electricians for repairs, wiring, and installations.',
    },
    {
      name: 'Painting Service',
      image: img15,
      description: 'Interior and exterior painting with smooth finishes.',
    },
    // {
    //   name: 'Gardening',
    //   image: 'https://via.placeholder.com/150/DAF7A6',
    //   description: 'Landscape maintenance and custom garden design.',
    // },
    // {
    //   name: 'Plumbing',
    //   image: 'https://via.placeholder.com/150/C70039',
    //   description: 'Reliable plumbing repairs and installations.',
    // },
  ];

  return (
    <div className='bg-gray-400 shadow-lg py-10'>
      {/* Header Section */}
      <div className='flex flex-col gap-5 justify-center items-center text-center px-4 mb-10'>
        <h1 className='text-[35px] font-bold text-black drop-shadow-lg'>
          Categories
        </h1>
        <p className='text-[18px] lg:text-[20px] w-[80vw] font-semibold text-gray-700 drop-shadow-lg'>
          We offer a wide range of services to meet your needs.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className='px-4'>
        <Swiper
          className="my-swiper"
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          effect="fade"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col gap-4 items-center text-center w-[94%] bg-gray-200 p-4 rounded-xl shadow-xl'>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-[80px] h-[80px] object-cover rounded-lg shadow-md'
                />
                <h2 className='text-[22px] font-bold text-black'>
                  {product.name}
                </h2>
                <p className='text-gray-700 text-[13px] w-[60vw] font-medium'>
                  {product.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;
