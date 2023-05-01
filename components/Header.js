import { Raleway } from "next/font/google";
import styles from '@/styles/Home.module.css'   
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
    return (
        <>
        <div className={styles.header}>
            <Link href="/">
                <Image 
                className='bv-logo'
                src="/blackVibes.svg" 
                alt='logo'
                width={80}
                height={80}
                />
            </Link>
            <h1 >Mark Pascucci-Clifford</h1>
        </div>
        <div className={styles.header}>
            <p>Vibraphonist • Composer • Programmer</p>
        </div>
        </>
    )
}