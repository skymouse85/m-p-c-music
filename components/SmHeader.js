import Link from "next/link"
import Image from "next/image"
import styles from '@/styles/Home.module.css'  


// TODO set state to display page name in header
export default function SmHeader() {
    return (
        <div className={styles.nav}>
            <Link href="/">
            <Image 
                src="/icons/lightblueVibesAsset 1.svg"
                alt="lightBlueVibes"
                height={60}
                width={60}
            />
            </Link>
        </div>
    )
}