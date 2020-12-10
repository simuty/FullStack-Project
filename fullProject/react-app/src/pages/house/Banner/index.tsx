import React, { useState } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';

export interface IBannerProps {}

export default function Banner(props: IBannerProps) {
  const defalutConfig = {
    loop: true,
    autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  };
  const [config, setConfig] = useState(defalutConfig);

  return (
    <AwesomeSwiper config={config} className="banner">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="http://dummyimage.com/360x200/00405d/FFF&text=%F0%9F%98%84%F0%9F%98%9C"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="http://dummyimage.com/360x200/00405d/FFF&text=%F0%9F%98%84%F0%9F%98%9C"
            alt=""
          />
        </div>
        <div className="swiper-slide">
          <img
            src="http://dummyimage.com/360x200/00405d/FFF&text=%F0%9F%98%84%F0%9F%98%9C"
            alt=""
          />
        </div>
      </div>
      {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
}
