import { Swiper as SwiperOriginal, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Controller } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { VisualData, MenuData } from './CarouselData';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({ id, path, title }) => (
  <div key={id} className="slideImg">
    <img src={path} alt={title} />
  </div>
);

const CarouselContainer = ({ type }) => {
  const [swiper, setSwiper] = useState(null);
  const data = type === 'visual' ? VisualData : MenuData;

  useEffect(() => {
    let vh = 0;
    if (typeof window !== 'undefined') {
      vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, []);

  return (
    // swiper 공통
    <>
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation, Controller]}
        onSwiper={setSwiper}
        controller={{ control: swiper }}
        className={type === 'visual' ? 'VisualSwiper' : 'MenuSwiper'}
        centeredSlides
        loop
      >
        {data.map((item) => (
          <SwiperSlide>
            <Carousel
              id={item.id}
              key={item.id}
              path={item.path}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

const Swiper = styled(SwiperOriginal)`
  &.VisualSwiper {
    .swiper-wrapper {
      width: 100%;
      height: calc(var(--vh, 1vh) * 100);
      min-height: calc(var(--vh, 1vh) * 100);
      .slideImg {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      top: var(--swiper-navigation-top-offset, 94%);
      margin-top: -28px;
    }
    .swiper-button-prev {
      left: 50%;
      transform: translateX(50%);
      margin-left: -110px;
    }
    .swiper-button-next {
      left: 50%;
      transform: translateX(50%);
      margin-left: 60px;
    }
    .swiper-button-prev:after {
      content: '';
      font-family: none;
      font-size: unset;
      background: url(../images/ico_arrow_left.svg) no-repeat 50% 50%;
      width: 24px;
      height: 24px;
    }
    .swiper-button-next: after {
      content: '';
      font-family: none;
      font-size: unset;
      background: url(../images/ico_arrow_right.svg) no-repeat 50% 50%;
      width: 24px;
      height: 24px;
    }
    .swiper-pagination-fraction {
      font-size: 16px;
      font-weight: 600;
      color: #999;
      display: flex;
      position: absolute;
      z-index: 1;
      left: 50%;
      width: 240px;
      height: 56px;
      margin-left: -120px;
      border-radius: 56px;
      bottom: 32px;
      background: rgba(0, 0, 0, 0.6);
      align-items: center;
      justify-content: center;
      transform: translate(0, 0);
      .swiper-pagination-current {
        color: #fff;
      }
    }
  }
`;

export default CarouselContainer;
