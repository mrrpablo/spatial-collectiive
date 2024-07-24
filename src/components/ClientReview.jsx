import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import clientreview from '../images/client_review.png';
import { useState, useEffect } from 'react';

function ClientReview({ content, author }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = clientreview;
    image.onload = () => {
      setLoading(false);
    };
  }, []);

  return (
    <div className='relative flex flex-col justify-between rounded-md bg-[#F2EA00] text-[#000000] p-6 xl:w-full xl:h-[414px] shadow-lg font-[groterk]  h-[300px]'>
      {loading ? (
        <Skeleton
          circle={true}
          height={80}
          width={80}
          className='absolute top-[-40px] xl:top-[-51px] left-[calc(50%-40px)] xl:left-[calc(50%-40px)]'
        />
      ) : (
        <img
          src={clientreview}
          alt='client_review'
          className='absolute top-[-40px] xl:top-[-51px] left-[calc(50%-35px)] xl:left-[calc(50%-9%)] w-[70px] xl:w-[18%]'
        />
      )}
      <div className='flex flex-col items-center'>
        {loading ? (
          <Skeleton
            width={250}
            height={20}
            count={3}
            className='mt-12 rounded'
            baseColor='#fffae0'
            highlightColor='#fffacd'
          />
        ) : (
          <p className='text-[15px] xl:text-[24px] py-5 mt-9 text-center md:text-start'>
            {content}
          </p>
        )}
      </div>
      <div className='flex justify-end mt-2 h-[70px] md:h-[100px] xl:h-[140px] items-end'>
        {loading ? (
          <Skeleton
            width={100}
            height={30}
            className='ml-auto rounded'
            baseColor='#fffae0'
            highlightColor='#fffacd'
          />
        ) : (
          <span className='font-bold text-[24px] xl:text-[30px]'>{author}</span>
        )}
      </div>
    </div>
  );
}

export default ClientReview;
