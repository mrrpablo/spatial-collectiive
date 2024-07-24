// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ClientReview from '../ClientReview';
import Skeleton from 'react-loading-skeleton';

function ClientReviewSlide({ loading }) {
  return (
    <div className='font-[groterk]'>
      {/* small screen */}
      <div className='text-white my-12 overflow-hidden block md:hidden'>
        {loading ? (
          <Skeleton width={300} height={20} />
        ) : (
          <h3 className='font-bold text-[24px] my-9'>Client Review</h3>
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          style={{ overflow: 'visible' }}
        >
          <SwiperSlide>
            <div className='h-[338px] xl:h-[400px]'>
              <ClientReview
                content={
                  'Precious successfully completed the task after fully comprehending it! He had excellent customer service and strong competence with the ArcGIS platform.'
                }
                author={'-Kyle'}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Precious is very competent, understood my needs perfectly and delivered a great result. He kept in contact with me throughout, I never had to wonder how things were going.'
              }
              author={'-Kyle'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Precious went above and beyond! He is an expert in his craft. Completed the job to perfection, and made many adjustments afterwards as I requested them.'
              }
              author={'-Kyle'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* medium screen and above */}
      <div className='text-white my-12 overflow-hidden hidden md:block'>
        {loading ? (
          <Skeleton width={500} height={20} />
        ) : (
          <h3 className='font-bold text-[40px] my-9'>Client Review</h3>
        )}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          // navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: false }}
          style={{ overflow: 'visible' }}
        >
          <SwiperSlide>
            <div className='h-[338px] xl:h-[480px]'>
              <ClientReview
                content={
                  'Precious successfully completed the task after fully comprehending it! He had excellent customer service and strong competence with the ArcGIS platform.'
                }
                author={'-Kyle'}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Precious is very competent, understood my needs perfectly and delivered a great result. He kept in contact with me throughout, I never had to wonder how things were going. I will not hesitate to hire him again should the need arise, and neither should you!'
              }
              author={'-Kyle'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Precious went above and beyond! He is an expert in his craft. Completed the job to perfection, and made many adjustments afterwards as I requested them.'
              }
              author={'-Kyle'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ClientReviewSlide;
