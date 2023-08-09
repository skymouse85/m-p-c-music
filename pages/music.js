import SmHeader from "@/components/SmHeader"
import YouTubeVideo from "@/components/Youtube"
import styles from "@/styles/Home.module.css"
import musicStyles from "@/styles/Music.module.css"
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
                {/* DSE */}
                <div className={musicStyles.musicContent}>
                    <div>
                        <h2><a href="https://thedirtysnacksensemble.bandcamp.com/" target="_blank">The Dirty Snacks Ensemble</a></h2>
                    <p>The Dirty Snacks Ensemble is an instrumental music ensemble formed by Oakland based
                        vibraphonist/composer Mark Clifford in early 2011. In composing for the DSE, Clifford pays homage to
                        his many musical influences which run the gamut from Kool Keith to Bela Bartok, and is interested in
                        finding the balance between long form compositional structures, free improvisation, and short
                        ditties while still maintaining musical freedom for his immensely talented ensemble. The Dirty
                        Snacks Ensemble released their first full length record, <a
                            href="https://thedirtysnacksensemble.bandcamp.com/album/tidy-universe" target="_blank"> <i>Tidy
                                Universe</i></a> (Recollect Records) in June of
                        2016, and released a follow up album of rarities and basement recordings, Another Man’s Treasure
                        (self-released via soundcloud) in March 2017. The Dirty Snacks Ensemble released their second full
                        length record, <a href="https://thedirtysnacksensemble.bandcamp.com/album/you-would-do-well"
                            target="_blank"> <i>You
                                Would Do Well</i> </a>, on <a href="https://slowandsteadyrecords.bandcamp.com/"
                            target="_blank">Slow & Steady Records</a> on September 16th, 2022.</p>
                    </div>
                    <div>
                        <iframe 
                        width="350" 
                        height="470" 
                        border="0"
                        src="https://bandcamp.com/EmbeddedPlayer/album=3192677538/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/"
                        seamless
                        >
                            <a href="https://thedirtysnacksensemble.bandcamp.com/album/you-would-do-well">You Would Do
                        Well by The Dirty Snacks Ensemble</a></iframe>
                    </div>
                </div>


                {/* Two Aerials */}
                <div className={musicStyles.musicContent}>
                    <div>
                        <h2><a href="https://twoaerials.bandcamp.com/album/moonphase-ep" target="_blank">Two Aerials</a></h2>
                        <p>Two Aerials is an experimental indie band co-led by Mark and Crystal Pascucci-Clifford. Thier debut EP selftitled EP was released on May 26, 2017</p>  
                    </div>
                    <div>
                        <iframe 
                            width="350" 
                            height="470" 
                            border="0" 
                            src="https://bandcamp.com/EmbeddedPlayer/album=2312107700/size=large/bgcol=333333/linkcol=0f91ff/tracklist=false/transparent=true/" 
                            seamless
                            >
                            <a href="https://twoaerials.bandcamp.com/album/moonphase-ep">Moonphase EP by Two Aerials</a>
                        </iframe>
                    </div>
                </div>


                {/* Lost Shapes */}
                <div className={musicStyles.musicContent}>
                    <div>
                        <h2>Lost Shapes</h2>
                        <p>Based in the heart of the Bay Area, "The Lost Shapes" stands as a dynamic ensemble of gifted composers and improvisors who have carved a niche within the contemporary jazz landscape. Established three years ago, this collective has emerged as a trailblazer in avant-garde jazz, skillfully blending structured compositions with the raw energy of improvisation. The ensemble boasts an impressive lineup: Mark Pascucci-Clifford on vibraphone, Max Miller-Loran on trumpet, Safa Shokrai on bass, Beth Schenck on alto saxophone, and Jason Levis on drums. Together, they coalesce to deliver an auditory experience that resonates deeply, placing The Lost Shapes at the vanguard of modern jazz innovation. Their debut recording is set to release in early 2024.</p>  
                    </div>
                    <div>
                        <YouTubeVideo videoId="qQgwJch1ivs"/>
                    </div>
                </div>



                {/* Levitator Trio */}
                <div className={musicStyles.musicContent}>
                    <div>
                        <h2>Levitator Trio</h2>
                        <p>this is another project of mine</p>  
                    </div>
                </div>


                {/* Inner Movements */}
                <div className={musicStyles.musicContent}>
                    <div>
                        <h2>Inner Movements</h2>
                        <p>this is another project of mine</p>  
                    </div>
                </div>
             
           </main>
            <Footer/>
        </>
    )
}