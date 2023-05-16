import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from '@/styles/Home.module.css'
import { neueMachina, raleway, robotoMono, hankenGrotesk, montserrat } from "@/styles/fonts";

import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'


// const inter = Inter({ subsets: ['latin'] });



export default function Home() {
  return (
    <>
      <Head>
        <title>Mark Pascucci-Clifford Music</title>
        <meta name="description" content="Mark Pascucci-Clifford Music.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon"type="image/ico" href="/blackVibes.ico" />
      </Head>
          <div >
           <Header/>
          </div>
      <main className={`${styles.main} ${hankenGrotesk.className}`}>
         

        <div className={styles.center}>
          <Image
            // className={styles.imageBorder}
            src="/images/color-closeField.jpg"
            alt=""
            width={900}
            height={600.6}
          />
        </div>

        {/* <div >
            <Link className={styles.nav} href="/bio">bio</Link>
        </div>
        <div >
            <Link className={styles.nav} href="/music">music</Link>
        </div>
        <div>
            <Link className={styles.nav} href="/performances">shows</Link>
        </div> */}
          

        <div  className={styles.indexBio}>
          <div className={styles.pContainer}>
            <p>
              <strong>Mark Pascucci-Clifford</strong> is a vibraphonist, composer, educator, producer, and programmer based in Oakland, CA. He is active in many musical scenes including new music, jazz, indie rock, and avant garde
            </p>
           </div>
        </div>
          <div>
            <Link
              href='/bio'
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 >
              <span>-&gt;</span> Read full bio
              </h2>
            </Link>
          </div>

        <div className={styles.spacer}></div>

        <div>
          <h1 style={robotoMono.style}>Music</h1>
        </div>

        <Footer/>
      </main>
    </>
  )
}
