import styles from '@/styles/Home.module.css'   
import Link from 'next/link'
import Image from 'next/image'
import Navbar from "./Navbar";
import {dropdown} from './Dropdown'
import { neueMachina, raleway, robotoMono, hankenGrotesk, montserrat } from "@/styles/fonts";




// TODO add low impact site list on the left side

export default function Header() {
    return (
        <header>
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
            <h1>Mark Pascucci-Clifford</h1>
            
            <ul className={styles.header_list}>
                <li>
                    <Link href="/bio">about</Link>
                    
                </li>
                <li>
                    <Link href='/music'>music</Link>
                </li>
                <li>shows</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
    
           
        </div>
        <div className={styles.header} >
            <p style={hankenGrotesk.style}>Vibraphonist • Composer • Programmer</p>
        </div>

        </header>
    )
}