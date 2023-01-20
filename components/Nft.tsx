import { ShoppingCartIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useState } from "react";
// import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addBid, selectBid } from "../Redux/basketSlice";
import { urlFor } from "../sanity";

import Bid from "./Bid";
import Popup from 'reactjs-popup';
interface Props {
    nft: Nft;
}


function Nft({ nft }: Props) {

 
 const [showBid, setShowBid] = useState(false)
 const [isShown, setIsShown] = useState(false)

  const dispatch = useDispatch()
  const bidItem = useSelector(selectBid)




  return (
    <div className=" "  onClick={()=>     dispatch(addBid(nft))} >
        
      <div className="relative   w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] overflow-hidden pointer-events-auto cursor-pointer"  onMouseEnter={()=> setIsShown(true)}
                onMouseLeave={()=> setIsShown(false)}>
        <span className="absolute background-gradiant z-10"></span>
        <span className={`absolute  border1  ${isShown ? "w-[200%]" : " w-[100%]"} duration-300 z-10`}></span>
        <span className={`absolute  border2  ${isShown ? "h-[200%]" : " h-[100%]"} duration-300 z-10`}></span>
        <Image
          src={urlFor(nft.image[0]).url()}
          layout="fill" objectFit="cover" 
          alt="d"
          className={` ${isShown ? "scale-110 ":""} duration-[600ms]`}
        />
        <div className="flex justify-center  items-center absolute bottom-0 left-0  pl-2 pb-2 text-xs sm:text-lg ">
        <p className="sm:pr-3">{nft.title}</p>
          <div  className=" textGradiant   relative pl-1 pr-3  text-center items-center font-bold ">{nft.price}$
          <span className="absolute  z-10"></span>
          </div>
          

        </div>
      </div>

      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
         
        </div>

      
      </div>
    </div>
  );
}

export default Nft;