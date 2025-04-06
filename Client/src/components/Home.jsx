import React from "react";
import { CiSearch } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
  const slides = [
    "https://images.unsplash.com/photo-1508317469940-e3de49ba902e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1557149769-d376acfba1f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1679634979773-d1ad8d191ff1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1611348586789-33dbd65e1e28?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573706376056-55f27105ff17?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1467746474745-41dd2c7524ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div>
      <div className="flex relative w-[90vw] flex justify-center mx-auto">
        <input
          type="search "
          placeholder="search skill "
          className="text-gray-600 px-3 text-lg  border w-full  mx-auto  rounded-full my-4 py-3"
        />
        <CiSearch className="absolute right-8 top-7 text-2xl" />
      </div>
      <div className="w-[95vw] mx-auto h-[86vh]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1.5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {slides.map((url, i) => (
            <SwiperSlide key={i}>
              <img
                src={`${url}`}
                alt={`Slide ${i}`}
                className="rounded-t-xl rounded-b-xl w-full h-full object-cover shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
