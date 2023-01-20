import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinCard from "../components/CryptoCurrencies/CoinCard";
import Landing from "../components/CryptoCurrencies/LandingCurrencies";
import fetchCurrencies, { fetchHistory } from "../utils/fetchCurrencies";
import { addCurrencies, selectCurrencies } from "../Redux/basketSlice";
import Link from "next/link";
import LandingCurrencies from "../components/CryptoCurrencies/LandingCurrencies";
import Image from "next/image";
import { Bar } from "react-chartjs-2";
import MiniChart from "../components/CryptoCurrencies/MiniChart";
import { useGetHistoryCoinQuery } from "../Redux/cryptoApi";
import Loading from "../components/Loading";
import millify from "millify";
import { transform } from "framer-motion";
import { motion } from "framer-motion";

import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import Particless from "../components/Particless";

interface Props {
  currencies: Currencies;
}

const cryptocurrencies = ({ currencies }: Props) => {
  const coins = currencies.coins;
  const period = "24h";
  //   const coinId = "razxDUgYGNAdQ"

  return (
    <div className="sm:px-10    lg:px-20     overflow-x-hidden relative ">
      <LandingCurrencies />

      <section className=" pt-40 ">
        <div className="z-50"></div>

        <div className="relative   flex items-center justify-center overflow-hidden w-full  ">
          <motion.table
        
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.75 }}
            className="  overflow-hidden w-[800px] xl:w-[1100px]   text-sm text-left text-gray-500 dark:text-gray-400  "
          >
            <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-[#1C1C1C] via-[#333333] to-[#1C1C1C]  dark:text-gray-400  relative ">
              <tr>
                <th scope="col" className="hidden sm:flex px-6 py-3 text-center">
                  #
                </th>
                <th scope="col" className="px-6 py-3 text-center ">
                  Coin
                </th>
                <th scope="col" className="px-6 py-3 text-center hidden sm:flex">
                  Market Cap
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  24Price
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Chart
                </th>
              </tr>
              <tr className="absolute top-0 left-0 w-full h-full   "></tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => {
                const coinId = coin.uuid;
                const { data, isFetching, error } = useGetHistoryCoinQuery({
                  coinId: coinId,
                  period: period,
                });

                if (error) {
                  console.log(error);
                }

                const historyCoin = data?.data;

                return (
                  <motion.tr
                    key={index}
                    className="  border-b border-grey bg-dark text-xs   text-center  opacity-40 "
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0 }}
                    transition={{ duration: 0.75 }}
                    
                  >
                    <th
                      scope="row"
                     
                      className= "  max-sm:hidden  px-0 xl:px-6  py-4 font-medium  dark:text-gray-400 text-center"
                    >
                      {index + 1}
                    </th>
                    <th
                      scope="row "
                      
                     
                      className="  cell w-[50px] px-0 xl:px-6 py-4 font-medium   dark:text-gray-400 "
                    >
                      <Link
                        href={"./details/" + coin.uuid}
                        className="flex space-x-1   items-center   "
                      >
                        <div className="relative  animate-slideup w-[35px] h-[35px] xl:w-[100px] xl:h-[100px]  hover:scale-110  duration-700 ">
                          <div
                            className=" w-[0px]      h-[0px] bg-slate-700 absolute  top-[50%] left-[50%] rounded-full -z-1 opacity-40 xl:opacity-100 "
                            style={{
                              boxShadow: `0px 0px 64px ${
                                coin.name === "Ethereum" ? "60px" : "35px"
                              } ${coin.color} `,
                            }}
                          ></div>
                          <Image
                            src={`/coins/${coin.name}.png`}
                            layout="fill"
                            objectFit="cover"
                            alt=""
                            className=" duration-1000  "
                          />
                        </div>
                        <div className=" flex flex-col justify-start items-start z-1">
                          <h1 className=" textGradiant">{coin.symbol}</h1>
                          <h1 className="hidden sm:flex ">{coin.name}</h1>
                        </div>
                      </Link>
                    </th>
                    <th scope="row" className="px-0 xl:px-6  py-4  max-sm:hidden">
                      {millify(+coin.marketCap)}
                    </th>
                    <th scope="row" className=" cell px-0 xl:px-6  py-4 ">
                      {millify(+coin.price, {
                        precision: 3,
                        decimalSeparator: ",",
                      })}
                    </th >

                    <th scope="row"
                      className={`px-0 xl:px-6  py-4  ${
                        coin.change > "0" ? " textGradiant" : "text-red-500 "
                      }`}
                    >
                      {coin.change > "0" ? `+${coin.change}` : coin.change}%
                    </th>
                    <th scope="row" className={`px-0 xl:px-6   `}>
                      <div className="relative  ">
                        <div className="w-full h-full z-2  absolute background22-gradiant pointer-events-none "></div>
                        <div className="w-full h-full z-2   absolute background2-gradiant pointer-events-none "></div>
                        <MiniChart
                          historyCoin={historyCoin}
                          color={coin.color}
                        ></MiniChart>
                      </div>
                    </th>
                  </motion.tr>
                );
              })}
            </tbody>
          </motion.table>
        </div>
      </section>
    </div>
  );
};

export default cryptocurrencies;

export const getServerSideProps = async () => {
  const currencies = await fetchCurrencies();

  return {
    props: {
      currencies,
    },
  };
};
