import SmHeader from "@/components/SmHeader"
import styles from "@/styles/Home.module.css"
import Footer from "@/components/Footer"
import { neueMachina, raleway, robotoMono, hankenGrotesk, montserrat, interTight } from "@/styles/fonts";

export default function Music() {
    return (
        <>
            <div className={styles.sm_header}>
                    <SmHeader />  
            </div>
           <main className={styles.nonIndex}>
                <h1>Music</h1>
                <div className={styles.musicContent}>
                    <h2>The Dirty Snacks Ensemble</h2>
                </div>
           </main>
            <Footer/>
        </>
    )
}