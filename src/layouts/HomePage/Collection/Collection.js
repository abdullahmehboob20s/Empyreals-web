import React from "react";
import styles from "./Collection.module.css";

import collection1 from "assets/images/collection1.png";
import collection2 from "assets/images/collection2.png";
import collection3 from "assets/images/collection3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectCoverflow } from "swiper";
import useMediaQuery from "hooks/useMediaQuery ";
import Title from "components/Title/Title";
SwiperCore.use([Navigation, EffectCoverflow]);

function Collection() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-50px">
          <Title title="Collection" className="text-center" />
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        className="collection-slider"
        style={{ padding: isBellow500px ? "0 10%" : "" }}
        breakpoints={{
          800: {
            spaceBetween: 60,
            slidesPerView: 3,
          },
          600: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
          500: {
            spaceBetween: 40,
            slidesPerView: 2,
          },
          200: {
            spaceBetween: 50,
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img src={collection1} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={collection2} className="w-full" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={collection3} className="w-full" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Collection;
