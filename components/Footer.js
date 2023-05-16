import Image from "next/image"
import styles from '@/styles/Home.module.css'  
import { neueMachina, raleway, robotoMono, hankenGrotesk, montserrat } from "@/styles/fonts";

export default function Footer() {

    return (

        <>
        {/* social link icons */}
            <div className={styles.main}>
                <div className={styles.footer}>
                    <a 
                        href="https://thedirtysnacksensemble.bandcamp.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.footerIcon}
                    >
                        <Image
                            src="/icons/Bandcamp-button-bc-circle-black.svg" 
                            alt="bandcamp-logo"
                            width={22}
                            height={22}
                            
                        />
                    </a>
                    <a 
                    href="https://open.spotify.com/artist/6xdTr1mJIaRT754Hbyvl19?si=6fEdAqrjSRWUFVHr77J6HQ"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.footerIcon}
                    >
                        <Image
                        src="/icons/spotify.svg"
                        alt="spotify"
                            width={22}
                            height={22}
                        />
                    </a>
                    <a 
                    href="https://www.instagram.com/mouscula/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.footerIcon}
                    >
                        <Image
                        src="/icons/instagram.svg"
                        alt="instagram"
                            width={22}
                            height={22}
                        />
                    </a>
                    <a 
                    href="https://www.youtube.com/channel/UCuDnMBfi1ekE27boAVWvYpA/videos"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.footerIcon}
                    >
                        <Image
                        src="/icons/youtube.svg"
                        alt="youtube"
                            width={22}
                            height={22}
                        />
                    </a>
                    <a 
                    href="https://twitter.com/markmclifford"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.footerIcon}
                    >
                        <Image
                        src="/icons/twitter.svg"
                        alt="twitter"
                            width={22}
                            height={22}
                        />
                    </a>
                    <a 
                    href="https://www.facebook.com/mark.clifford.714/"
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.footerIcon}
                    >
                        <Image
                        src="/icons/facebook.svg"
                        alt="facebook"
                            width={22}
                            height={22}
                        />
                    </a>
                </div>

                {/* <!-- credits and © --> */}
                <div className={styles.credit}>
                    <p>All rights reserved. Mark Pascucci-Clifford ©2023</p>
                    <p>Photography: Lenny Gonzalez</p>
                </div>
            </div>
        </>
    )
}