import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import cape from "../assets/images/cape.png";
import accra from "../assets/images/accra.png";
import riad from "../assets/images/riad.png";
import Pyramid from "../assets/images/Pyramid.png";
import zanzibar from "../assets/images/zanzibar.png";
import waterfall from "../assets/images/waterfall.png";

const DestinationCard = () => {
  return (
    <div className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-full max-w-sm mx-auto">
            <img src={cape} alt="Cape Coast" className="w-full h-60 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">Cape Coast, Ghana</h3>
              <p className="text-sm text-gray-600">Historic sites & serene escapes</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-full max-w-sm mx-auto">
            <img src={accra} alt="Accra" className="w-full h-60 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">Accra, Ghana</h3>
              <p className="text-sm text-gray-600">Beachfront spots & nightlife</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-full max-w-sm mx-auto">
            <img src={riad} alt="Marrakech" className="w-full h-60 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">Marrakech, Morocco</h3>
              <p className="text-sm text-gray-600">Colorful souks, ancient medina, luxury riads</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-full max-w-sm mx-auto">
            <img src={zanzibar} alt="Zanzibar" className="w-full h-60 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">Zanzibar, Tanzania</h3>
              <p className="text-sm text-gray-600">White sand beaches, azure waters, spice tours</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-full max-w-sm mx-auto">
            <img src={waterfall} alt="Victoria Falls" className="w-full h-60 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">Victoria Falls, Zimbabwe/Zambia</h3>
              <p className="text-sm text-gray-600">"Smoke that thunders," adventure activities, natural wonder</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden w-full max-w-sm mx-auto">
            <img src={Pyramid} alt="Cairo" className="w-full h-60 object-cover" />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-gray-800">Cairo, Egypt</h3>
              <p className="text-sm text-gray-600">Iconic pyramids, Nile River, ancient wonders</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DestinationCard;
