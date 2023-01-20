import React from 'react'



const fetchCurrencies = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':`${process.env.NEXT_PUBLIC_REACT_APP_RAPIDAPI_KEY}`,
            'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_REACT_APP_CRYPTO_RAPIDAPI_HOST}`
        }
    };
    
   const res = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=10&offset=0', options)
        const data = await res.json()

  return (
        data.data
  )
}

export const fetchHistory = async()=> {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_REACT_APP_RAPIDAPI_KEY}`,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
   const res = await fetch('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h', options)
   const data = await res.json()
    return (
        data.data
        )
}

export default fetchCurrencies