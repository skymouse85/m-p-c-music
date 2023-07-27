import Footer from '@/components/Footer'
import SmHeader from '@/components/SmHeader'
import homeStyles from '../styles/Home.module.css'


export default function Discog() {

    return (
        <>
            <div className={homeStyles.sm_header}>
                <SmHeader />  
            </div>
            <p>selcted discography</p>
            
        </>
    )
}