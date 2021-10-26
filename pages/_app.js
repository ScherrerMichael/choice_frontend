import '../styles/styles.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
   return(
      <>
   <Head>
          <title> Choice Deli in Ballard</title>
   </Head>
   <Component {...pageProps} />
   </>
   )
}