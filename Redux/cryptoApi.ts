import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react"

    export const cryptoApi = createApi({
        reducerPath: 'cryptoApi',
        
         baseQuery: retry (fetchBaseQuery({
            baseUrl:`https://${process.env.NEXT_PUBLIC_REACT_APP_CRYPTO_RAPIDAPI_HOST}`,
            prepareHeaders: (headers,params) =>{
                headers.set('X-RapidAPI-Key',`${process.env.NEXT_PUBLIC_REACT_APP_RAPIDAPI_KEY}`)
                return headers
            },
        }),{maxRetries:5}),
        endpoints:(builder) => ({
            getHistoryCoin: builder.query({ query: ({coinId,period}) => `/coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${period}` }),
            getDetailsCoin: builder.query({ query: ({coinId}) => `/coin/${coinId}?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h` }),
        
        })
    })

    export const {
        useGetHistoryCoinQuery,
        useGetDetailsCoinQuery,
          } = cryptoApi