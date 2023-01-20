import { configureStore } from '@reduxjs/toolkit'
import  basketReducer from "./basketSlice"
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'
import { cryptoApi } from './cryptoApi'
import AsyncStorage from '@react-native-async-storage/async-storage'

// const persistConfig = {
//   key:"root",
//   blacklist: ['basket'],
//   storage:storage
// }

// const basketPersistConfig = {
//   key: 'basket',
//   storage: storage,
//   blacklist: ['wallet']
//   };


// const reducer = combineReducers({
//   basket: persistReducer(basketPersistConfig,basketReducer),
//   [cryptoApi.reducerPath]: cryptoApi.reducer,
 
// })

// const persistedReducer = persistReducer(persistConfig,reducer)



// export const store = configureStore({

//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//     // Redux persist
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }).concat(
//     cryptoApi.middleware,
//   ),
  
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch






export const store = configureStore({

  reducer: {
    basket:basketReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    cryptoApi.middleware,
  ),
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch