import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { selectCurrencies } from "../../Redux/basketSlice";
import {
  useGetDetailsCoinQuery,
  useGetHistoryCoinQuery,
} from "../../Redux/cryptoApi";
import fetchCurrencies from "../../utils/fetchCurrencies";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
  SlidersOutlined,
  RiseOutlined,
} from "@ant-design/icons";

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import Image from "next/image";
import millify from "millify";
import BigChart from "../../components/CryptoCurrencies/BigChart";
import { motion } from "framer-motion";
import { delay } from "@reduxjs/toolkit/dist/utils";
const Details = () => {
  const [period, setPeriod] = useState("24h");
  const router = useRouter();
  const coinId = router.query.id;



  const { data: historyData } = useGetHistoryCoinQuery({ coinId, period });

  const historyCoin = historyData?.data;

  const { data, isFetching, error } = useGetDetailsCoinQuery({
    coinId: coinId,
  });
  if (isFetching) return <Loading />;

  const DetailsCoin = data?.data?.coin;

  // chart Fetching

  const times = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y", "all"];



// animations

const mainVariants = {
  hidden:{opacity:0,},
  visible: {
  
    opacity: 1,
    transition: {
      staggerChildren:0.1,
      duration: 0.4,
      delay:1,
      when: "beforeChildren",
      type: "easeInOut",
    },
  },
};
const secondVariants = {
  hidden : {
    opacity: 0,
    y:20
  },

  visible: {
    y:0,
    opacity: 1,
    transition: {
      duration: 0.5,
   
      type: "easeInOut",
    },
  },
};




const staggerVariants = {
hidden : {
opacity:0
  
},
  visible: {
  opacity:1,
  
    transition: {
      staggerChildren:0.05,
      duration:0.4,
      delay:1,
      when: "beforeChildren",
      

    },
  },
};
const yearsVariants = {
hidden:{
  opacity:0,
  y:20
},
  visible: {
    opacity:1,
    y:0,
    transition: {
    duration:0.6,
    type:"easeInOut",
   

    },
  },
};



  return (
    <section className="w-full h-full lg:h-screen py-20 px-10  flex flex-col  lg:flex-row items-center  justify-center  sm:space-x-10">
      <motion.div variants={mainVariants} initial="hidden" animate="visible" className="w-full lg:w-2/5 flex flex-col justify-center items-center  ">
        <div className="relative flex justify-center items-center">
          <Image
            className=""
            height={150}
            width={150}
            src={`/coins/${DetailsCoin.name}.png`}
            alt="coinImage"
          />
          <div
            className=" w-[0px]    h-[0px] bg-slate-700 absolute  top-[50%] left-[50%] rounded-full -z-10 "
            style={{
              boxShadow: `0px 0px 64px ${
                DetailsCoin.name === "Ethereum" ? "80px" : "50px"
              } ${DetailsCoin.color} `,
            }}
          ></div>
        </div>

        <div className={`text-[${DetailsCoin?.color}] pt-8`}>
          {DetailsCoin?.symbol}
        </div>
        <div className="text-5xl uppercase  font-bold text-center">
          {DetailsCoin?.name}
        </div>
        <div className=" w-[100%] lg:w-full  text-justify text-lg pt-4 ">
          {ReactHtmlParser(DetailsCoin?.description.split(".")[0] + ".")}
        </div>

        <div className="w-full space-y-4 2xl:space-y-8 pt-10 flex flex-col justify- items-center ">
          <motion.div variants={secondVariants} className="flex  items-center text-xl  justify-between w-[300px] md:w-2/3 lg:w-full lg:justify-between ">
            <div className="flex  items-center ">
              <DollarCircleOutlined className="scale-150 text-gold pr-2" />
              <h1 className="uppercase pl-2">Price</h1>
            </div>
            <h1 className="uppercase  textGradiant font-bold ">
              {"$ " +
                millify(DetailsCoin?.price, {
                  precision: 4,
                  decimalSeparator: ",",
                })}
            </h1>
          </motion.div>

          <motion.div variants={secondVariants} className="flex  items-center text-xl  justify-between w-[300px] md:w-2/3 lg:w-full lg:justify-between ">
            <div className="flex  items-center ">
              <NumberOutlined className="scale-150 text-gold pr-2" />
              <h1 className="uppercase pl-2">Rank</h1>
            </div>
            <h1 className="uppercase  textGradiant font-bold ">
              {DetailsCoin?.rank}
            </h1>
          </motion.div>

          <motion.div variants={secondVariants} className="flex  items-center text-xl  justify-between w-[300px] md:w-2/3 lg:w-full lg:justify-between">
            <div className="flex  items-center ">
              <SlidersOutlined className="scale-150 text-gold pr-2" />
              <h1 className="uppercase pl-2">Consensus Mechanism</h1>
            </div>
            <h1 className="uppercase  textGradiant font-bold text-right ">
              {millify(DetailsCoin?.tags.slice(-1), {
                precision: 4,
                decimalSeparator: ",",
              })}
            </h1>
          </motion.div>
          <motion.div variants={secondVariants} className="flex  items-center text-xl  justify-between w-[300px] md:w-2/3 lg:w-full lg:justify-between">
            <div className="flex  items-center ">
              <RiseOutlined className="scale-150 text-gold pr-2" />
              <h1 className="uppercase pl-2">Highest Peak</h1>
            </div>
            <h1 className="uppercase  textGradiant font-bold  ">
              {"$ " +
                millify(DetailsCoin?.allTimeHigh?.price, {
                  precision: 4,
                  decimalSeparator: ",",
                })}
            </h1>
          </motion.div>
        </div>
      </motion.div>



      <motion.div animate={{height:[0,650] , transition:{duration:1 , delay:0 ,type:"easeInOut"}}} className="w-[2px] h-[105%] bg-white lg:flex hidden  relative">
      <div className=" w-[0px]     h-full bg-slate-700 absolute  top-[0%] left-[50%] rounded-full -z-1 opacity-40 xl:opacity-100 " style={{boxShadow:`0px 0px 35px ${ DetailsCoin.name === "Ethereum" ? "20px":"10px"} ${DetailsCoin.color} ` }}></div>
      </motion.div>

      <motion.div variants={staggerVariants} initial="hidden" animate="visible"   className="  pt-10 flex flex-col justify-center items-center xl:w-full w-[100%] sm:w-[500px]   md:w-[500px]   lg:w-[600px]  lg:h-[80%]  relative   ">
        <BigChart
          historyCoin={historyCoin}
          color={DetailsCoin?.color}
          period={period}
        />
        <div   className="  space-x-2  space-y-1 lg:space-x-4 lg:space-y-10">
          {times.map((time, index) => (
       
            <motion.button
            variants={yearsVariants}
            
              key={index}
              className={`border-gold border w-6 sm:w-10  max-sm:text-xs  hover:bg-[#ffaf1bc2]  text uppercase  ${
                time === period && "bg-[#faa83ca9]"
              } `}
              onClick={(e) => setPeriod(time)}
            >
              {time}
            </motion.button>
       
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Details;
