import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './Store'
import { useEffect, useState } from 'react'
import { fetchCategories } from '../utils/fetchCategories'
import { CreateApi,fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { GetServerSideProps } from 'next'

export interface BasketState {
  items: Nft[]
  nfts:Nft[]
  bid:Nft[]
  wallet:number
  currencies:Currencies[]
}
const initialState: BasketState = {
  items: [], 
  nfts:[],
  bid:[],
  wallet:1.327,
  currencies:[]
}
interface Props {
  categories: Category[];
  nfts: Nft[];
 
}







export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    addBid: (state: BasketState, action: PayloadAction<Nft>) => {
      state.bid = [...state.bid,action.payload]
    },
    decrementWallet: (state: BasketState, action: PayloadAction<number>) => {
      state.wallet -= action.payload,
      state.wallet = parseFloat((state.wallet).toFixed(3))
    },
    clearBid: (state: BasketState, ) => {
      state.bid = []
    },
    addCurrencies: (state: BasketState, action: PayloadAction<Currencies>) => {
      state.currencies = [action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBid , clearBid , decrementWallet ,addCurrencies} = basketSlice.actions;

// Selectors -> retrieving items in state to use in different components
// export const selectBasketItems = (state: RootState) => state.basket.items;
export const selectBid = (state: RootState) => state.basket.bid;
export const selectWallet = (state: RootState) => state.basket.wallet;
export const selectCurrencies = (state: RootState) => state.basket.currencies[0];


export default basketSlice.reducer;


