import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'; // Import custom CSS
// Import Swiper modules
import SwiperCore, {
  Navigation,
  Pagination,
  A11y
} from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination, A11y]);

const Slider = ({ sliderOptions, children }) => {
  return (
    <Swiper {...sliderOptions}>
      {children}
    </Swiper>
  );
};

export default Slider;
