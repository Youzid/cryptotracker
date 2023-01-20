import Image from 'next/image'
import React from 'react'
interface  Props {
 coin :Coin
}

const CoinCard = ({coin}:Props) => {
  return (
    <div className='flex justify-center  bg-slate-500  '>
        <div className=' flex justify-center  items-center  w'>
            <Image src={coin?.iconUrl} height={50}  width={50} alt=""/>
        </div>
    </div>
  )
}

export default CoinCard