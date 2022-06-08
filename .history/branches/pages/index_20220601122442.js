import CircleNavigation from '../components/Landing'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
    
  return (
    <div className={""}>
      <Head>
        <title>Deb The Builder</title>
        <meta name="description" content="Deb the Builder Professional Website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <CircleNavigation />
      </main>
    </div>
  )
}
