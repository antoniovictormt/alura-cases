import GlobalStyle from "@/styles/GlobalStyle";
import { Open_Sans } from '@next/font/google'

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </main>
  );}
