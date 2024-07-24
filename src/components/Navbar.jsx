import { useEffect, useState } from 'react';
import Logo from '../images/logo.png';
import Arrow from '../images/svg/arrow_button.svg';
import HoverArrow from '../images/svg/hover_arrow.svg';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Navbar() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const images = [Logo, Arrow, HoverArrow];
    let counter = 0;

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        counter += 1;
        if (counter === images.length) {
          setLoading(false);
        }
        img.onerror = () => {
          console.log('Failed to load image');
        };
      };
    });
  }, []);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className='flex justify-between container mx-auto md:items-start pr-[20px] items-center'>
      {loading ? (
        <Skeleton
          circle={true}
          height={50}
          width={50}
          className='mt-2 skeleton-custom'
        />
      ) : (
        <img
          src={Logo}
          alt='logo'
          className='w-[57px] h-[57px] ms:w-[85px] ms:h-[85px] md:w-[13%] md:h-[85px] lg:h-[105px] xl:w-[146px] xl:h-[130px] cursor-pointer'
          onClick={handleLogoClick}
        />
      )}
      <Button
        buttonContent={'Get in Touch'}
        onClick={handleButtonClick}
        HoverArrow={HoverArrow}
        loading={loading}
        Arrow={Arrow}
        xl_width={'409px'}
        xl_height={'86px'}
        lg_height={'70px'}
        lg_width={'345px'}
        md_width={'255px'}
        md_height={'50px'}
        width={'114px'}
        height={'36px'}
        smallFont={'12px'}
      />
    </div>
  );
}

export default Navbar;
