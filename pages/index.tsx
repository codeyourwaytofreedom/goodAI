import { Inter } from '@next/font/google'
import Home_page from '../components/home'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Home_page/>
    </>
  )
}
