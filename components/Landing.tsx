import { useRegister } from "jongleur";
import Image from "next/image";
import React from "react";
import { clips } from "./clips";
import { motion } from "framer-motion";
import { CgScrollV } from "react-icons/cg";

const Landing = () => {
  const register = useRegister(clips);
  return (
    <motion.section
      className="  flex justify-center h-screen   w-full  fixed items-center  pt-52 ov overflow-x-none  pointer-events-none pl:10   xl:pl-32 duration-1000 "
      ref={register("sectionOne")}
    >
      <div className=" ease-in-out  ">
        <div className="">
          
          
          
        <motion.div animate={{opacity:[0,1]  , transition:{duration:2,delay:2, type:"easeInOut"}}}  className=" sm:w-[500px] xl:w-[600px] space-y-4 ">
          
          
          
          <CgScrollV size={50} color="#FFB606" className="fixed bottom-0 opacity-80 right-[45%]  md:right-40   animate-bounce  "/>


            <div className=" text-5xl  font-semibold  tracking-wide lg:text-6xl xl:text-6xl  textGradiant uppercase">
              <h1 className=" font-bold tracking-[10px] sm:tracking-[28px]    uppercase text-center xl:pr-12 ">
                Museum
              </h1>
              <h1 className="  lg:text-5xl xl:text-6xl text-center xl:text-left">
                of anciant art{" "}
              </h1>
            </div>
            <p className=" text-sm lg:text-xl max-w-md text-center pl-6">
              An ancient   sculptured gold NFT's store,{" "}
              <p> get your own piece of history .</p>{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Landing;
