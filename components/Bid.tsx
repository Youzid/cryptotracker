import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementWallet, selectBid, selectWallet } from "../Redux/basketSlice";
import { clearBid } from "../Redux/basketSlice";
import Image from "next/image";
import { urlFor } from "../sanity";

const Bid = () => {
  const Wallet = useSelector(selectWallet);

  const bidItems = useSelector(selectBid);
  const [bidShow, setBidShow] = useState(false);
  const [bidValue, setBidValue] = useState(0.16);
  const [ethLost, setEthLost] = useState(false);
  useEffect(() => {
    bidItems.length > 0 ? setBidShow(true) : setBidShow(false);
    console.log(bidShow);
  }, [bidItems]);
  console.log(Wallet);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBidValue(parseFloat(e.target.value));
  };

  // const handleSumbit=(e: React.ChangeEvent<HTMLInputElement>)=> {
  //   e.preventDefault()
  //  console.log("bitch")
  // }
  const dispatch = useDispatch();
  const handleBid = () => {
    bidValue < Wallet && dispatch(decrementWallet(bidValue));
    setEthLost(true);
    setInterval(() => setEthLost(false), 50);
  };

  console.log();

  return (
    // <div className='  bg-red-600 fixed w-[200vh] h-[100vh] z-100'>

    <div
      className={`${
        bidShow
          ? "opacity-100 backdrop-blur-lg"
          : "opacity-0 invisible  duration-300"
      }  duration-500  z-[500] bg-[#1a1a1a7c] fixed w-[100%] h-[100%] top-0 left-0 right-0 bottom-0 pointer-events-auto`}
    >
      <div
        className="absolute left-[0%] bottom-[0%] right-[0%] top-[0%]  m-auto   cursor-pointer -allowed"
        onClick={() => dispatch(clearBid())}
      ></div>
      <div className="absolute   xl:left-[30%] xl:right-[30%] left-[25%] right-[25%] md:left-[30%] md:right-[30%] bottom-[10%] lg:bottom-[20%]  top-[20%] text-center m-auto bg-[#262626] shadow-xl ">
        <span
          className={` absolute border2 left-0  h-[100%] duration-300 z-10`}
        ></span>
        <span
          className={`absolute  border1  left-0   w-[100%] duration-300 z-10`}
        ></span>
        <span className="absolute left-0 background-gradiant z-10"></span>
        {bidShow ? (
          <div className="pt-8 pb-10 space-x-10">
            <div className="">
              <h1 className="text-2xl textGradiant font-bold pb-4 ">
                Add Bids
              </h1>
            </div>
            <div className="max-xl:pr-10 flex flex-col justify-center xl:justify-evenly items-center xl:space-x-10  space-y-10 xl:flex  xl:flex-row xl:space-y-0">
              <div className="flex flex-col justify-centertext-xl space-y-2 duration-1000">
                <div className="xl:w-[250px]  xl:h-[250px]  w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] relative shadow-2xl  shadow-amber-500/50 ">
                  <Image
                    src={urlFor(
                      bidItems[0]?.image[0] ||
                        "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg"
                    ).url()}
                    layout="fill"
                    objectFit="cover"
                    alt="d"
                    className="relative    "
                  />
                </div>
              </div>
              <div className=" justify-center flex  flex-col items-center pr-4 relative">
                <>
                  <div className="max-w-xs text-xs xl:max-w-sm xl:text-left pb-4	 text-center xl:text-xl ">
                   <p className="textGradiant font-bold "> {bidItems[0]?.title} :</p> <p>a  representation of a powerful relic. It stands at a height of 2 feet and is made of golden marble</p>
                  </div>

                  <div className="flex space-x-2 items-center justify-center  pb-2   ">
                    <Image
                      className=""
                      alt=""
                      height={15}
                      width={15}
                      src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
                    />
                    <div className="relative">
                      {Wallet}
                      <div
                        className={` absolute top-0 left-0  text-red-500  opacity-100  ${
                          ethLost == true && Wallet > bidValue
                            ? " opacity-100 -translate-y-5 "
                            : "opacity-0  duration-1000 -translate-y-10 "
                        }`}
                      >
                        {-bidValue.toFixed(3)}
                      </div>
                    </div>
                    {/* <div className={` absolute pl-[10px] text-red-500   ${ethLost ? " opacity-1000 mb-10 ":"opacity-0  duration-1000 mb-20 "}`}>{ - (Wallet-bidValue).toFixed(3)}</div> */}
                  </div>

                  <input
                    onChange={handleChange}
                    min="0.01"
                    step={0.01}
                    value={bidValue}
                    className="text-black w-32"
                    type="number"
                  ></input>
                  <input
                    type={"submit"}
                    className="cursor-pointer  "
                    onClick={() => handleBid()}
                    value={"Bid"}
                  ></input>

                  <p
                    className={`transition ${
                      bidValue > Wallet ? "flex " : "opacity-0 "
                    } text-red-600 max-xl:text-sm `}
                  >
                    Not enough money
                  </p>
                </>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Bid;
