import { useRegister } from "jongleur";
import Image from "next/image";
import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import Loading from "../Loading";
import { motion } from "framer-motion";
import { animated, useSpring } from "@react-spring/web";
import Particless from "../Particless";

const LandingCurrencies = () => {
  const [loadingSpline, setLoadingSpline] = useState(true);

  const springs = useSpring({
    from: { x: 300, opacity: -1 },
    to: { x: 0, opacity: 1 },
    delay: 2,
    config: {
      mass: 5,
      friction: 80,
      tension: 50,
    },
  });


  const variantMain = {
    visible: {
      opacity: [0, 1],
      height: [0, 150],
      transition: {
        duration: 1,
        delay: 2,
        type: "easeInOut",
      },
    },
  };
  const variantdisc = {
    visible: {
      opacity: [0, 1],

      transition: {
        duration: 1,
        delay: 5,
        type: "easeInOut",
      },
    },
  };

  console.log(loadingSpline);

  return (
    <section className=" flex  xl:pr-80 lg:justify-evenly h-[100vh] items-center py-40  ov overflow-x-none   justify-center   ">
      <div
        className={`w-full h-full bg-[#1c1c1c] overflow-hidden fixed top-0 left-0 pointer-events-none z-50 duration-1000 delay-[2s] flex justify-center items-center ${
          loadingSpline ? " opacity-100" : " opacity-0"
        }`}
      >
        {" "}
        <Loading />{" "}
        
    </div>
    <span className="glow2 ">......</span>
    <motion.div  initial={{ opacity: 0 , }}
                      whileInView={{ opacity: 1 ,  }}
                      viewport={{ once: false , amount:1}}
                      transition={{duration:0.75}}>
      <Particless/>
    
      


      <div className="   z-40">
        <div className="">
          <div className="w-fit space-x-4 xl:w-[600px]   lg:space-y-4  z-40 ">
            <motion.div
              variants={variantMain}
              animate="visible"
              className=" text-5xl  pl-4 font-semibold tracking-normal  lg:text-6xl xl:text-7xl textGradiant uppercase"
            >
              <h1 className="">Cryoptos</h1>

              <h1 className="font-bold tracking-[10px]  sm:tracking-[28px]    uppercase">Tracker</h1>
            </motion.div>
            <motion.div
              variants={variantdisc}
              animate="visible"
              className=" text-sm lg:text-lg max-w-md  w-fit  "
            >
              Our platform provides up-to-date pricing, charts, and market data for all major cryptocurrencies
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:flex"></div>
      </div>
      <animated.div
        style={loadingSpline ? {} : springs}
        className="   w-[500px] h-[700px] z-[-10]    absolute top-[0%] lg:right-[10%]    "
      >
        <Spline scene="./world.spline" onLoad={() => setLoadingSpline(false)} />
      </animated.div>
      </motion.div>
      <div className="w"></div>
    </section>
  );
};

export default LandingCurrencies;
