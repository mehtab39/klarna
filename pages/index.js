import Head from 'next/head'
import Header from '../components/Header'
import Leftbar from '../components/Leftbar'
import Product from '../components/Products'
import SearchBar from '../components/Searchbar'
 import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best deal coupons and promo code | Klarna</title>
        <meta name="description" content="
        This is a statis page of Klarna e-commerce website build using NextJs and materialUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
         <Header/>
         </div> 
          <div className={styles.mainbody}>
          <Leftbar/>
          <div>
           <SearchBar/>
           <Product/>
           </div>
         </div>
      </main>
    </div>
  )
}
