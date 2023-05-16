import styles from "@/styles/Home.module.css"
import SmHeader from "@/components/SmHeader"
import Footer from "@/components/Footer"
import { neueMachina, raleway, robotoMono, hankenGrotesk, montserrat } from "@/styles/fonts";


export default function Bio() {
    return (
        <>
            <div className={styles.sm_header}>
                <SmHeader />  
            </div>
            <main className={styles.nonIndex}>
                <p style={hankenGrotesk.style}><strong>Mark Pascucci-Clifford</strong>  a vibraphonist, percussionist, pianist, educator, composer, and producer based in Oakland, CA.
​ A much sought after performer and improviser, Clifford is equally involved in classical music, new music, jazz, free improvisation, and rock. He is involved in multiple projects in the Bay Area and around the US. In demand as a recording musician, he can be heard playing drums, piano, keyboard, and percussion on over 20 records to date and his performance experience spans worldwide. He has had the honor of playing alongside an array of master musicians including: Jeff Parker, Kjell Nordeson, Ches Smith, Joan La Barbara, Aram Shelton, Colin Stranahan, Scott Amendola, Tatsuya Nakatani, Ron Miles, Lisa Mezzacappa, and he has performed with The Colorado Symphony Orchestra, So Percussion, sfSound, and Oakland Active Orchestra.</p>

<p>As a composer, Clifford keeps busy writing music for a wide range of projects, ensembles, and commissions. Most recently, Clifford was a composer in residence at Lijiang Studio in Lashihai, Yunnan, China for the summer of 2017 where he studied regional musical notation techniques, instrument building, and composed for the musicians in residence. Past commissions include Levity Factions, a work in four sections for mixed quartet premiered at Lijiang Studio Index, NYC; Transverse Process, commissioned by Switchboard Presents; and various works for the New Keys Ensemble, the Temescal Composer’s colloquium, and the Samantha Stone Dance Collective. </p>.

Clifford is the founder and leader of The Dirty Snacks Ensemble, an eclectic post jazz ensemble in which he serves as the composer, vibraphonist and vocalist. They released their first record Tidy Universe on Recollect Records in June, 2016. In late 2017, the DSE was in residence for 3 months, a part of the “Experimental Hootenanny” at the Ivy Room in Albany, CA. The residency included one performance each month. The allotted performance time, spanning the residency, allowed for a full performance of the ensembles repertoire, spanning 10 years of compositions. 

Clifford has collaborated extensively with his partner and wife, Crystal Pascucci. They co-lead two ensembles together: Two Aerials and Inner Movements, and they have traveled extensively performing original compositions that showcase an improvisational language that they have been developing together through years of workshopping and performance. 

<p>Clifford graduated with a B.M. in Classical Percussion Performance and a minor in Piano Performance from the Lamont School of Music where he received many accolades, including the 2012 undergraduate recital of distinction, the 2012 Frank Toth Memorial Award, and the 2011 Outstanding Student in Jazz and Commercial Studies Award. Clifford studied Percussion under Colorado Symphony Orchestra master percussionist John Kinzie, Piano under Alice Rybak, Jazz Theory and Composition under Eric Gunnison, and Composition under William Hill. Clifford has also had the honor of studying at Nagoya University in Japan with Tomomi Sugo and has studied vibraphone with two of his greatest heroes, Steve Nelson and Matt Moran. 
</p>
            </main>
            <Footer/>
        </>
    )
}