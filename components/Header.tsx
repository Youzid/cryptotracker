import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ShoppingBagIcon,  } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { selectWallet } from "../Redux/basketSlice";
import { useRouter } from "next/router";

const Header = () => {
  const Wallet = useSelector(selectWallet);
  const router = useRouter();
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(router.pathname);
  }, [router.pathname]);

  return (
    <div className=" flex w-full items-center justify-evenly space-x-40  p-4  bg-transparent pl-10 pr-10 fixed top-0 left-0 z-50">
      <div className="text-white  relative  opacity-0"></div>
      <div className="flex space-x-4 items-center justify-center relative ">
        <button className=" sm:pr-20 relative flex items-center  p-2   justify-center space-x-2  opacity-80 hover:opacity-100 duration-500 cursor-default">
          <span
            className={`absolute  border1  w-[40%] duration-300 z-10 top-0 sm:left-2 left-1 `}
          ></span>
          <span
            className={`absolute  border2 h-[100%] duration-300 z-10 -left-1 sm:left-0 top-0`}
          ></span>
          <Image
            className=""
            alt=""
            height={15}
            width={15}
            src="https://www.pngall.com/wp-content/uploads/10/Ethereum-Logo-PNG-HD-Image.png"
          />
          <div className="w-10">
            <>{Wallet}</>
          </div>

          <div className="">ETH</div>
        </button>

        <Link href="/" className=" flex justify-center items-center">
        
          <div className="relative">
            <h1 className=" relative block headerLink  text-sm textGradiant bg-clip-text  font-bold opacity-80 hover:opacity-100 duration-500 ">
              NFT
              <span
                className={`absolute  border3  h-[100%] w-[200%] left-0 ${
                  path === "/" ? "opacity-1" : "opacity-0"
                } duration-300 z-10`}
              ></span>
            </h1>
          </div>
        </Link>
        <Link href="/cryptocurrencies" className="relative  pl-2">
<div className="flex justify-center items-center">
       
          <h1 className="block relative  headerLink uppercase text-sm textGradiant bg-clip-text  font-bold opacity-80 hover:opacity-100 duration-500 ">
            CryptoCurenccies
            <span
            className={`absolute  border3  h-[100%] w-[200%] left-0 ${
              path === "/cryptocurrencies" ? "opacity-1" : "opacity-0"
            } duration-300 z-10`}
          ></span>
          </h1>
          </div>
        </Link>
      </div>
      <Link href="/crypto">
        <h1 className="headerIcon"></h1>
      </Link>
    </div>
  );
};

export default Header;
