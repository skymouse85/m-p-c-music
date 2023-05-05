import '@/styles/globals.css'
import { Raleway, Roboto_Mono, Inter, Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['300', '400', '600'],
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {

  return(
    
    <Component {...pageProps} />
  
    )

}
