import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { store } from '../Redux/Store'
import { Provider } from 'react-redux'
import { Scrollbar } from 'smooth-scrollbar-react'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <> 
       <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
      </Provider>
      </>

  )
  
}

export default MyApp
