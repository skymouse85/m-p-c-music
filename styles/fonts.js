import { Raleway, Hanken_Grotesk, Montserrat, Roboto_Mono, Inter_Tight } from "next/font/google";
import localFont from "next/font/local";


const raleway = Raleway({
    subsets: ["latin"],
    weight: ['200', '300', '400'], 
    variable: "--font-raleway"
})
const hankenGrotesk = Hanken_Grotesk({
    subsets: ['latin'],
    weight: ['200', '300', '400', '800'], 
    variable: '--font-hankenGrotesk'
});
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400'], 
    variable: '--font-montserrat'
});
const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700']
});

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400'] 
})



export { raleway, hankenGrotesk, montserrat, robotoMono, interTight};