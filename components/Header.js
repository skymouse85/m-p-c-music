// import { Raleway } from "next/font/google";
import styles from '@/styles/Home.module.css'   
import Link from 'next/link'
import Image from 'next/image'


export default function Header() {
    return (
        <div className={styles.header}>
            <Link href="/">
                <Image 
                src="/blackVibes.svg" 
                alt='logo'
                width={70}
                height={70}
                />
            </Link>
            <h1 >Mark Pascucci-Clifford</h1>
        </div>
    )
}