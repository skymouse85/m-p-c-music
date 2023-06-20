import SmHeader from "@/components/SmHeader"
import styles from "@/styles/Home.module.css"
import Footer from "@/components/Footer"
import { Link } from "next/link";
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
                    <div>
                    <h2>The Dirty Snacks Ensemble</h2>
                    <p>This is a project of mine</p>
                    </div>
                    <div>
                        <iframe 
                        width="350" 
                        height="470" 
                        border="0"
                        src="https://bandcamp.com/EmbeddedPlayer/album=3192677538/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                        seamless
                        >
                            <a href="https://thedirtysnacksensemble.bandcamp.com/album/you-would-do-well">You Would Do
                        Well by The Dirty Snacks Ensemble</a></iframe>
                    </div>
                </div>
             
           </main>
            <Footer/>
        </>
    )
}