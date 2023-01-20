import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import Landing from "./Landing";
import Nft from "./Nft";
import { urlFor } from "../sanity";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchNfts } from "../utils/fetchNfts";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMouse } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Scrollbar as Scrollbarr } from "smooth-scrollbar-react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Parallax,
  Mousewheel,
  FreeMode,
} from "swiper";
import { Scroll, useRegister } from "jongleur";
import Popup from "reactjs-popup";
import Bid from "./Bid";
import { useSelector } from "react-redux";
import { selectBid } from "../Redux/basketSlice";
import { clips } from "./clips";
import { motion } from "framer-motion";
interface Props {
  nfts: Nft[];
}

import { CgScrollV } from 'react-icons/cg';

const Homes = ({ nfts }: Props) => {
  const [isShown, setIsShown] = useState(0);

  const fetchNfts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getNfts`);
    const data = await res.json();
    const nfts: Nft[] = data.nfts;

    return nfts;
  };
  fetchNfts();

  const categories = [
    { type: "greek", _id: "ec084e85-e6e8-4394-988d-e0df9d8a2cdc" },
    { type: "popular", _id: "344c6af7-c678-4b2e-992e-9351462fdfaf" },
    { type: "skeleton", _id: "a0fe2fcc-a6c9-41e8-9321-8dc4574c1936" },
  ];
  const showPopular = () => {
    return nfts
      .filter((nft) => nft.category._ref === categories[1]._id)
      .map((nft) => <Nft nft={nft} key={nft._id} />); // filter products by category
  };
  const showGreek = () => {
    return nfts
      .filter((nft) => nft.category._ref === categories[0]._id)
      .map((nft) => (
        <SwiperSlide>
          <Nft nft={nft} key={nft._id} />
        </SwiperSlide>
      )); // filter products by category
  };
  const showSkeleton = () => {
    return nfts
      .filter((nft) => nft.category._ref === categories[2]._id)
      .map((nft) => (
        <SwiperSlide>
          <Nft nft={nft} key={nft._id} />
        </SwiperSlide>
      )); // filter products by category
  };
  const register = useRegister(clips);

  showSkeleton()
  console.log(  showSkeleton() )

  return (
    <>
    
     <div className=" z-49  ease-in  w-[100%]   ">
      <section className="overflow-hidden   " >

        <Bid />
       

          <Landing />
  
      
      </section>
      <div>
      <span className="w-3 h-3 duration-700 absolute rounded-full bg-gold top-[calc(50%)] right-[5%] z-50" ref={register("point1")}></span>
      <span className="w-3 h-3 duration-700  absolute rounded-full bg-gold top-[calc(50%+20px)] right-[5%] z-50" ref={register("point2")}></span>
      <span className="w-3 h-3 duration-700  absolute rounded-full bg-gold top-[calc(50%+40px)]  right-[5%] z-50" ref={register("point3")}></span>
      <span className="w-3 h-3  duration-700  absolute rounded-full bg-gold top-[calc(50%+60px)]  right-[5%] z-50" ref={register("point4")}></span>

      </div>
      

      <section className=' flex justify-start h-screen   w-full  fixed items-center   ov overflow-x-none    pl-10 xl:pl-32  duration-1000 pointer-events-none 'ref={register("sectionTwo")}  >
    <div className=" ease-in-out  "  >
    <div className=''>
      <div className=' w-[300px]  sm:w-[500px] xl:w-[600px] space-y-4 '>
        <div className='text-4xl sm:text-5xl font-semibold tracking-wide lg:text-6xl xl:text-6xl  textGradiant uppercase'>
        <h1 className='font-bold tracking-[15px] lg:tracking-[20px]   uppercase'>Discover</h1> 
        <h1 className=' text-2xl xl:text-4xl'>our master pieces</h1>

       

        </div>
        <p className=' text-sm lg:text-lg max-w-md'>Each piece is authenticated and certified as a one-of-a-kind, making it a truly unique addition to any collection.</p>
        
        </div>
    </div>
    
    </div>
    </section>

    
      <motion.section  className="   h-screen  relative duration-1000 " ref={register("sectionThree")}>
        <div className=" flex justify-center  items-center  ">
          <div className="flex flex-col overflow-x-hidden  relative   w-[200vh] ">
            <div className="flex  justify-center lg:justify-end  items-center    pb-10 lg:pl-52 relative right-0    ">
              <div
                className="borderGradient flex space-x-2 text-xl  lg:text-2xl duration-500 pointer-events-auto   lg:pr-20  "
                style={{
                  backgroundSize: `${isShown === 1 ? "70%" : "32%"} 1px `,
                }}
                onMouseEnter={() => setIsShown(1)}
                onMouseLeave={() => setIsShown(0)}
              >
                <div className="textGradiant font-bold uppercase ">
                  POPULAR NFT
                </div>
                <div className="text-amber-300">|</div>
              </div>
            </div>
            <div className="space-x-10 space-y-2 flex flex-wrap items-center justify-center   lg:space-x-16 2xl:space-x-52">
              {showPopular()}
            </div>
          </div>

          <div className="flex flex-col       "></div>
        </div>



        
      </motion.section>
      <section className=" h-screen "  >
      <div className=" justify-center  items-center  z-[500] duration-[1s]  "  ref={register("sectionFour")} >
          <div className="flex relative justify-center lg:justify-end  items-center pb-10  lg:pr-20  ">
            <div
              className="borderGradient flex space-x-2 text-xl  lg:text-2xl duration-500 pointer-events-none   "
              style={{
                backgroundSize: `${isShown === 2 ? "90%" : "28%"} 1px `,
              }}
              onMouseEnter={() => setIsShown(2)}
              onMouseLeave={() => setIsShown(0)}
            >
              <div className="textGradiant font-bold uppercase ">
                GREEK NFT
              </div>
              <div className="text-amber-300">|</div>
              <div>VIEW MORE {}</div>
              <div className="relative">
              <FaMouse className=" opacity-100 animate-slideleft " />
              </div>
            </div>
          </div>
          <Swiper
        breakpoints={{
          100: {
            // width: 576,
            slidesPerView: 2,
          },
          576: {
            // width: 576,
            slidesPerView: 3,
          },
          768: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
            // install Swiper modules
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              Parallax,
              Mousewheel,
              FreeMode,
            ]}
           
            style={{display:"flex", justifyContent:"center"}}
            effect={"flip"}
            loop={true}
            pagination={{ clickable: true }}
            speed={600}
          
            mousewheel={true}
            className="swiper-navigation cursor-default  "
          >
            {showGreek()}
          </Swiper>
        </div>
      </section>
  
    
      <section className="flex justify-center h-[100vh] items-center py-40 space-y-16"></section>
      </div>
    </>
  );
};

export default Homes