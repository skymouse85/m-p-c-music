import { Raleway, Hanken_Grotesk, Montserrat, Roboto_Mono } from "next/font/google";
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

const neueMachina = localFont({
    src: [
        {
            path: './Neue Machina/NeueMachina-Light.woff2',
            weight: '300'
            

        },
        {
            path: './Neue Machina/NeueMachina-Regular.woff2',
            weight: '400'
            
        },
        {
            path: './Neue Machina/NeueMachina-Ultrabold.woff2',
            weight: '800'
        }
    ]
})

export { raleway, hankenGrotesk, montserrat, robotoMono, neueMachina};