import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";

function Home() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={40}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide>
          <div className="relative pt-[4rem]">
            <div className="">
              <div className="absolute top-1/2 rotate-[270deg] scale-y-[1] font-raleWayFont tracking-wider text-lg ">
                <h2 className="text-white">masrafisw@gmail.com</h2>
              </div>
              <div className="h-screen container mx-auto">
                <h2 className="text-8xl text-wrap uppercase font-montserratFont text-white font-semibold  w-[45rem] ">
                  Quench Your Thirst in Style
                </h2>
                <div className="flex justify-center items-center  ">
                  <p className=" w-[8rem] text-center text-gray-400 capitalize  ">
                    Crafted for Comfort, Designed for Durability
                  </p>
                </div>
                <h2 className=" text-8xl text-wrap uppercase font-montserratFont text-white font-semibold flex justify-self-end text-end items-end w-[45rem] ">
                  Water Storage Made Simple
                </h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container mx-auto mt-[5rem] text-white">
          <div>
            <div className="flex justify-between">
              <div className="w-[40rem] flex items-center">
                <div className="">
                  <h2 className="font-raleWayFont text-6xl  ">
                    Elegant and Durable Design
                  </h2>
                  <p className="pt-4 font-montserratFont text-gray-400 w-[33rem] ">
                    Crafted with premium materials, our water pots are designed
                    to combine elegance and durability. Their sleek design makes
                    them a perfect addition to any home or office, while their
                    sturdy construction ensures long-lasting use. Perfect for
                    keeping water cool and fresh, these pots are a blend of
                    functionality and style.
                  </p>
                </div>
              </div>
              <div className="rotate-[30deg]  ">
                <img
                  src="./images/waterpot-2.png"
                  alt="water pot image"
                  className="w-[w-80rem] object-contain"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="container mx-auto mt-[5rem] text-white">
          <div>
            <div className="flex justify-between">
              <div className="rotate-[30deg]  ">
                <img
                  src="./images/waterpot-2.png"
                  alt="water pot image"
                  className="w-[w-80rem] object-contain"
                />
              </div>
              <div className="w-[40rem] flex items-center">
                <div className="">
                  <h2 className="font-raleWayFont text-6xl  ">
                    Keeps Water Fresh and Cool
                  </h2>
                  <p className="pt-4 font-montserratFont text-gray-400 w-[33rem] ">
                    Experience the joy of naturally cool and fresh water with
                    our expertly crafted pots. Designed with traditional
                    techniques and modern technology, they maintain the
                    temperature and purity of your water, offering a refreshing
                    experience every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
