import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { store } from '../Redux/Store'
import { Provider } from 'react-redux'


import { AnimatePresence , motion } from 'framer-motion'
import Head from 'next/head'
function MyApp({ Component, pageProps,router }: AppProps) {
  return (
      <> 
        <Head>
      <link rel="shortcut icon" href="/logo.png" />
        <title> CryptoTracker</title>
    </Head>
       <Provider store={store}>
       <AnimatePresence  exitBeforeEnter   mode='wait'    >
       <motion.div key ={router.route} className="z-20"  >
      <Header/>
      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
      </Provider>
      </>

  )
  
}

export default MyApp
