import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Button({
  onClick,
  HoverArrow,
  Arrow,
  loading,
  buttonContent,
  xl_width,
  xl_height,
  md_width,
  md_height,
  lg_width,
  lg_height,
  width,
  height,
  smallFont,
}) {
  const [hoverState, setHoverState] = useState(false);

  const getButtonSize = () => {
    if (window.innerWidth >= 1440) {
      return { width: xl_width, height: xl_height };
    } else if (window.innerWidth >= 1024) {
      return { width: lg_width, height: lg_height };
    } else if (window.innerWidth >= 500) {
      return { width: md_width, height: md_height };
    } else {
      return { width: width, height: height };
    }
  };

  const [buttonSize, setButtonSize] = useState(getButtonSize());

  useEffect(() => {
    const handleButtonSize = () => {
      setButtonSize(getButtonSize());
    };
    window.addEventListener('resize', handleButtonSize);
    return () => {
      window.removeEventListener('resize', handleButtonSize);
    };
  }, []);

  return (
    <div className='md:pt-6'>
      {loading ? (
        <Skeleton width={100} height={20} />
      ) : (
        <button
          style={buttonSize}
          className={`bg-[#F2EA00] text-[#0E2F26] px-2 md:px-10 py-2 rounded-md  hover:text-[#F2EA00] hover:border font-bold cursor-pointer font-[gloserk] ${
            hoverState
              ? 'hover:bg-transparent hover:text-[#F2EA00] hover:easy-in-out hover:duration-300'
              : ''
          }`}
          onMouseEnter={() => setHoverState(true)}
          onMouseLeave={() => setHoverState(false)}
          onClick={onClick}
        >
          <div className={`flex items-center justify-evenly  `}>
            {/* small screens */}
            <span
              className='mr-2 md:mr-2 flex items-center md:hidden'
              style={{
                fontSize: smallFont,
              }}
            >
              {loading ? <Skeleton /> : buttonContent}
            </span>
            {/* large screens */}
            <span className='mr-2 md:mr-2 hidden  md:text-[18px] lg:text-[26px] xl:text-[36px]  md:flex items-center'>
              {loading ? <Skeleton /> : buttonContent}
            </span>
            {!hoverState ? (
              <img
                src={Arrow}
                alt='arrow'
                className='w-[20px] h-[20px] md:w-[36px] md:h-[32px]'
              />
            ) : (
              <img
                src={HoverArrow}
                alt='hover_arrow'
                className='w-[20px] h-[20px] md:w-[36px] md:h-[32px]'
              />
            )}
          </div>
        </button>
      )}
    </div>
  );
}
export default Button;
