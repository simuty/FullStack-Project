import React, { useState } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';

export interface IBannerProps {
  banner: Array<{
    id: string;
    img: string;
  }>;
}

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

  const { banner = [] } = props;
  return (
    <AwesomeSwiper config={config} className="banner">
      <div className="swiper-wrapper">
        {banner.map(item => (
          <div className="swiper-slide" key={item.id}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>
      {/* <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div> */}
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  );
}
