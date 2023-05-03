import { Raleway } from "next/font/google";
import styles from '@/styles/Home.module.css'   
import Link from 'next/link'
import Image from 'next/image'


// TODO add low impact site list on the left side

export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <Link href="/">
                <Image  
                className={styles.bv_logo}
                src="/blackVibes.svg" 
                alt='logo'
                width={80}
                height={80}
                />
            </Link>
            <h1 >Mark Pascucci-Clifford</h1>
            <ul className={styles.header_list}>
                <li>about</li>
                <li>music</li>
                <li>shows</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
           
        </div>
        <div className={styles.header}>
            <p>Vibraphonist • Composer • Programmer</p>
        </div>
        </>
    )
}