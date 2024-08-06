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
                  'Spatial collectiive successfully completed the task after fully comprehending it! They had excellent customer service and strong competence with the ArcGIS platform.'
                }
                author={'-Kyle'}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Spatial collectiive are very competent, they understood my needs perfectly and delivered a great result. They kept in contact with me throughout, I never had to wonder how things were going.'
              }
              author={'Nasir'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Spatial collectiive went above and beyond! They are expert in their craft. Completed the job to perfection, and made many adjustments afterwards as I requested them.'
              }
              author={'-Leonard'}
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
                  'Spatial collectiive successfully completed the task after fully comprehending it! They had excellent customer service and strong competence with the ArcGIS platform.'
                }
                author={'-Kyle'}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Spatial collectiive are very competent, understood my needs perfectly and delivered a great result. They kept in contact with me throughout, I never had to wonder how things were going. I will not hesitate to hire them again should the need arise, and neither should you!'
              }
              author={'-Nasir'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ClientReview
              content={
                'Spatial collectiive went above and beyond! They are experts in their craft. Completed the job to perfection, and made many adjustments afterwards as I requested them.'
              }
              author={'-Leonard'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ClientReviewSlide;
