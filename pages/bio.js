import styles from "@/styles/Home.module.css"
import SmHeader from "@/components/SmHeader"

export default function Bio() {
    return (
        <>
            <div className={styles.sm_header}>
                <SmHeader />  
            </div>
            <main className={styles.main}>
                <p><strong>Mark Pascucci-Clifford</strong> was born</p>
            </main>
        </>
    )
}