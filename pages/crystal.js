import Link from "next/link";
import Image from "next/image";
import styles from '@/styles/Home.module.css'   
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    variable: '--font-montserrat'
});


export default function Crystals() {
    
    return (
        <>
            <div className={styles.crystal}>
                <h1 className={montserrat.variable}>page h1 header</h1>
            
                <Image
                    src="/images/colorStreeWalk.jpg"
                    alt="colorVibes"
                    width={600}
                    height={400}
                />
            </div>
            <div className={styles.crystal}>
                <p className={montserrat.variable}>hello check check check</p>
            </div>
        </>
    )
         
    
}