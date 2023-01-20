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

interface Props {
  nfts: Nft[];
}

const Home = ({ nfts }: Props) => {
  const [isShown, setIsShown] = useState(0);

  const fetchNfts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getNfts`);
    const data = await res.json();
    const nfts: Nft[] = data.nfts;
    console.log(nfts);
    return nfts;
  };
  fetchNfts();

  const categories = [
    { type: "greek", _id: "ec084e85-e6e8-4394-988d-e0df9d8a2cdc" },
    { type: "popular", _id: "344c6af7-c678-4b2e-992e-9351462fdfaf" },
    { type: "skeloton", _id: "a0fe2fcc-a6c9-41e8-9321-8dc4574c1936" },
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


  
  return (
    <>
    
      <section className="  z-49 w-[100vh] scroll-smooth" >

        <Bid />
       

          <Landing />
  
      
      </section>
      <section className="  h-[100vh] ">
        <div className=" flex justify-center items-center py-40 space-y-16">
          <div className="flex flex-col overflow-x-hidden  relative   w-[200vh]  pr-20">
            <div className="flex  justify-end  items-center    pb-10 pl-52 relative right-0    ">
              <div
                className="borderGradient flex space-x-2 text-xl  lg:text-2xl duration-500    "
                style={{
                  backgroundSize: `${isShown === 1 ? "100%" : "52%"} 1px `,
                }}
                onMouseEnter={() => setIsShown(1)}
                onMouseLeave={() => setIsShown(0)}
              >
                <div className="textGradiant font-bold uppercase">
                  POPULAR NFT
                </div>
                <div className="text-amber-300">|</div>
              </div>
            </div>
            <div className="space-x-10 space-y-2 flex flex-wrap items-center justify-center sm:flex-wrap lg:space-x-16 2xl:space-x-52">
              {showPopular()}
            </div>
          </div>

          <div className="flex flex-col       "></div>
        </div>

        
      </section>
      <section className=" h-screen">
      <div className="   justify-center h-[100vh] items-center py-40 space-y-16 ">
          <div className="flex relative justify-end  items-center  pr-20  ">
            <div
              className="borderGradient flex space-x-2 text-xl  lg:text-2xl duration-500 "
              style={{
                backgroundSize: `${isShown === 2 ? "100%" : "28%"} 1px `,
              }}
              onMouseEnter={() => setIsShown(2)}
              onMouseLeave={() => setIsShown(0)}
            >
              <div className="textGradiant font-bold uppercase">
                Skeleton NFT
              </div>
              <div className="text-amber-300">|</div>
              <div>VIEW MORE {}</div>
              <FaMouse className=" opacity-80 animate-pulse" />
            </div>
          </div>
          <Swiper
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
            slidesPerView={4}
            spaceBetween={100}
            style={{}}
            effect={"flip"}
            navigation
            speed={1000}
            mousewheel={true}
            className="swiper-navigation"
          >
            {showGreek()}
          </Swiper>
        </div>
      </section>
      <section className="flex justify-center h-[100vh] items-center py-40 space-y-16"></section>
    </>
  );
};

export default Home;
