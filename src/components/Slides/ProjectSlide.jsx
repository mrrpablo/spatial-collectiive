import React from 'react';
import Slide1 from '../../images/slide1.png';
import Slide2 from '../../images/slide2.png';
import Slide3 from '../../images/slide3.png';
import { useState, useEffect } from 'react';

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Skeleton from 'react-loading-skeleton';

function ProjectSlide() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [Slide1, Slide2, Slide3];
    let loadedCount = 0;

    images.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setLoading(false);
        }
      };
    });
  }, []);

  return (
    <div>
      {/* small screen */}
      <div className='text-white my-12 block md:hidden font-[groserk]'>
        {loading ? (
          <Skeleton width={300} height={20} />
        ) : (
          <h3 className='font-bold text-[24px] my-5'>Project Portfolio</h3>
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={true}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='h-[350px] md:h-[338px] lg:h-[400px] xl:h-[500px]'>
              {loading ? (
                <Skeleton width height={300} />
              ) : (
                <img
                  src={Slide1}
                  alt='slide1'
                  className='w-full h-[250px] md:h-[71%] lg:h-[82%] xl:h-[86%]'
                />
              )}
              <p className='mt-4'>
                {loading ? <Skeleton width height={20} /> : 'Topography Map'}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[350px] md:h-[338px] lg:h-[400px] xl:h-[500px]'>
              {loading ? (
                <Skeleton width={200} height={300} />
              ) : (
                <img src={Slide2} alt='slide2' className='w-full h-[250px]' />
              )}

              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p className='mt-4'>Topography Map</p>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[350px] md:h-[338px] lg:h-[400px] xl:h-[500px]'>
              {loading ? (
                <Skeleton width={200} height={300} />
              ) : (
                <img src={Slide3} alt='slide3' className='w-full h-[250px]' />
              )}
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p className='mt-4'>Topography Map</p>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* medium screen and above  */}
      <div className='text-white my-12 hidden md:block font-[groserk]'>
        {loading ? (
          <Skeleton width={500} height={20} />
        ) : (
          <h3 className='font-bold text-[40px] my-5'>Project Portfolio</h3>
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={2}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          autoplay={true}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <div className='h-[200px] md:h-[338px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]'>
              {loading ? (
                <Skeleton width={200} height={300} />
              ) : (
                <img
                  src={Slide1}
                  alt='slide1'
                  className='w-full h-[58%] md:h-[71%] lg:h-[73%] xl:h-[86%]'
                />
              )}
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p className='mt-4 text-[32px]'>Topography Map</p>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[200px] md:h-[338px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]'>
              {loading ? (
                <Skeleton width={200} height={300} />
              ) : (
                <img src={Slide2} alt='slide2' className='w-full ' />
              )}
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p className='mt-4 text-[32px]'>Topography Map</p>
              )}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='h-[200px] md:h-[338px] lg:h-[450px] xl:h-[500px] 2xl:h-[600px]'>
              {loading ? (
                <Skeleton width={200} height={300} />
              ) : (
                <img src={Slide3} alt='slide3' className='w-full ' />
              )}
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p className='mt-4 text-[32px]'>Topography Map</p>
              )}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSlide;
