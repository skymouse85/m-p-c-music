import SmHeader from "@/components/SmHeader"
import styles from "@/styles/Home.module.css"
import Footer from "@/components/Footer"

export default function Music() {
    return (
        <>
         <div className={styles.sm_header}>
                <SmHeader />  
            </div>
        <div>
            <p>this is the music page of m-p-c</p>
        </div>
        <Footer/>
        </>
    )
}