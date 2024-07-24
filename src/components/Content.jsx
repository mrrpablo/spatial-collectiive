import React, { useState, useEffect } from 'react';
import CircleButton from '../images/svg/circle_button.svg';
import Image1 from '../images/image1.png';
import Button from './Button';
import ProjectSlide from './Slides/ProjectSlide';
import ClientReviewSlide from './Slides/ClientReviewSlide';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import Arrow from '../images/svg/arrow_button.svg';
import HoverArrow from '../images/svg/hover_arrow.svg';
import 'react-loading-skeleton/dist/skeleton.css';

function Content() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = [Image1, Arrow, HoverArrow];
    let loadCounter = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadCounter += 1;
        if (loadCounter === images.length) {
          setLoading(false);
        }
      };
      img.onerror = () => {
        console.log('failed to load the image');
      };
    });
  }, []);

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className='container mx-auto mt-5 px-[20px]'>
      {/* small screen */}
      <div className='block md:hidden text-white'>
        {loading ? (
          <Skeleton count={3} width={80} height={30} />
        ) : (
          <h4 className='working_text font-[groterk]'>
            Spatial collective is a GIS{' '}
            <span className='text-[#F2EA00]'>
              outfit <br /> providing solutions to your
            </span>{' '}
            <br />
            GIS problems
          </h4>
        )}
      </div>
      {/*Large screen  */}
      {/* section 1 */}
      <div className='md:flex justify-between gap-4 hidden '>
        <div className='text-white grow w-[70%]'>
          <div className='text-[24px]'>
            {loading ? (
              <Skeleton count={3} width={280} height={20} />
            ) : (
              <h4 className='change_text font-[groterk] '>
                Spatial collective is a GIS{' '}
                <span className='text-[#F2EA00]'>
                  outfit <br /> providing solutions to your
                </span>{' '}
                <br />
                GIS problems
              </h4>
            )}
          </div>
          <div className='mt-[40px] font-[gloserk]'>
            <h3 className='font-bold text-[20px] xl:text-[40px]'>
              {loading ? (
                <Skeleton width={175} height={20} />
              ) : (
                'Our Services include:'
              )}
            </h3>
            <ul>
              {loading ? (
                <Skeleton count={5} width={100} height={20} />
              ) : (
                <>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    GIS
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    Image Processing
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    Digitizing
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    Map Building
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    Spatial Analysis
                  </li>
                </>
              )}
            </ul>
          </div>

          <div className='mt-[40px] font-[groserk]'>
            <h3 className='font-bold text-[20px] xl:text-[30px]'>
              {loading ? <Skeleton width={175} height={20} /> : 'SoftWare'}
            </h3>
            <ul>
              {loading ? (
                <Skeleton count={5} width={100} height={20} />
              ) : (
                <>
                  <li className='flex gap-1 items-center xl:text-[28px] '>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    ArcGIS
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    Agisoft
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    Google Earth Engine
                  </li>
                  <li className='flex gap-1 items-center xl:text-[28px]'>
                    <span>
                      <img
                        src={CircleButton}
                        alt='circleButton'
                        className='w-[70%]'
                      />
                    </span>
                    QGIS
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className='flex flex-col '>
          {loading ? (
            <Skeleton width={300} height={200} />
          ) : (
            <img src={Image1} alt='Image1' />
          )}
          <div className=' md:mt-[26%] lg:mt-[15%]  xl:mt-[45%]'>
            {loading ? (
              <Skeleton width={200} height={20} />
            ) : (
              <Button
                HoverArrow={HoverArrow}
                Arrow={Arrow}
                loading={loading}
                onClick={handleButtonClick}
                buttonContent={'Send a Request'}
                xl_width={'613px'}
                xl_height={'117px'}
                md_width={'387px'}
                md_height={'50px'}
                lg_width={'455px'}
                lg_height={'70px'}
                width={'290px'}
                height={'68px'}
              />
            )}
          </div>
        </div>
      </div>
      {/* section 2 */}
      <ProjectSlide loading={loading} />
      {/* small screen (our services) */}
      <div className='md:hidden text-[#ffffff]'>
        <div className='flex flex-col'>
          <div className=' md:mt-[26%] lg:mt-[15%]  xl:mt-[10%] flex justify-center'>
            {loading ? (
              <Skeleton width={200} height={20} />
            ) : (
              <Button
                HoverArrow={HoverArrow}
                Arrow={Arrow}
                loading={loading}
                onClick={handleButtonClick}
                buttonContent={'Send a Request'}
                xl_width={'613px'}
                xl_height={'117px'}
                md_width={'387px'}
                md_height={'50px'}
                lg_width={'455px'}
                lg_height={'70px'}
                width={'290px'}
                height={'68px'}
                smallFont={'24px'}
              />
            )}
          </div>
        </div>
        <div className='mt-[40px] font-[gloserk] '>
          <h3 className='font-bold text-[20px] xl:text-[40px]'>
            {loading ? (
              <Skeleton width={175} height={20} />
            ) : (
              'Our Services include:'
            )}
          </h3>
          <ul>
            {loading ? (
              <Skeleton count={5} width={100} height={20} />
            ) : (
              <>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  GIS
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  Image Processing
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  Digitizing
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  Map Building
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  Spatial Analysis
                </li>
              </>
            )}
          </ul>
        </div>
        <div className='mt-[40px] font-[groserk]'>
          <h3 className='font-bold text-[20px] xl:text-[30px]'>
            {loading ? <Skeleton width={175} height={20} /> : 'SoftWare'}
          </h3>
          <ul>
            {loading ? (
              <Skeleton count={5} width={100} height={20} />
            ) : (
              <>
                <li className='flex gap-1 items-center xl:text-[28px] '>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  ArcGIS
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  Agisoft
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  Google Earth Engine
                </li>
                <li className='flex gap-1 items-center xl:text-[28px]'>
                  <span>
                    <img
                      src={CircleButton}
                      alt='circleButton'
                      className='w-[70%]'
                    />
                  </span>
                  QGIS
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* section 3 */}
      <ClientReviewSlide loading={loading} />
      {/* small screen */}
      <div className='flex flex-col md:hidden'>
        <div className=' md:mt-[26%] lg:mt-[15%]  xl:mt-[10%] flex justify-center'>
          {loading ? (
            <Skeleton width={200} height={20} />
          ) : (
            <Button
              HoverArrow={HoverArrow}
              Arrow={Arrow}
              loading={loading}
              onClick={handleButtonClick}
              buttonContent={'Send a Request'}
              xl_width={'613px'}
              xl_height={'117px'}
              md_width={'387px'}
              md_height={'50px'}
              lg_width={'455px'}
              lg_height={'70px'}
              width={'290px'}
              height={'68px'}
              smallFont={'24px'}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
