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
        <SwiperSlide>
          <section className="container mx-auto text-white">
            <div className="bg-slate-800/60 h-[40rem] rounded-3xl">
              <div className="pt-[5rem] px-[4rem] flex justify-between">
                <div>
                  <h2 className="font-raleWayFont italic font-semibold text-8xl  ">
                    lets talk
                  </h2>
                  <div className="relative font-RaleWayFont mt-[3rem] ">
                    <h3 className=" text-xl capitalize tracking-wider mb-[2rem] before:content-[''] before:absolute before:w-[5rem] before:h-[2px] before:bg-white before:left-0 before:top-[2rem]  ">
                      use full links
                    </h3>
                    <ul className="text-lg tracking-wider">
                      <li className="my-2">
                        <a href={"/works"}>works</a>
                      </li>
                      <li>
                        <a href={"/blogs"}>blogs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="font-RaleWayFont mt-[7rem] ">
                  <div></div>
                  <h2 className="capitalize text-2xl font-semibold opacity-75">
                    get in touch with
                  </h2>
                  <div className="flex items-center gap-x-6 capitalize mt-1 ">
                    <h3 className="ml-[3rem] text-xl font-RaleWayFont font-semibold tracking-wider ">
                      Masrafi Mondol
                    </h3>
                    <button className="py-1 px-4 border border-1-white rounded-md capitalize tracking-wider ">
                      developer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Home;
