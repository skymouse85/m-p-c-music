import styles from "@/styles/Bio.module.css"
import homeStyles from '../styles/Home.module.css'
import BioImage from "@/components/BioImage";
import SmHeader from "@/components/SmHeader"
import Footer from "@/components/Footer"
// import Image from "next/image";
// import { neueMachina, raleway, robotoMono, hankenGrotesk, montserrat } from "@/styles/fonts";


export default function Bio() {
    return (
        <>
            <div className={homeStyles.sm_header}>
                <SmHeader />  
            </div>

            <div>
                <BioImage/>
            </div>
             

       
            <Footer/>
        </>
    )
}