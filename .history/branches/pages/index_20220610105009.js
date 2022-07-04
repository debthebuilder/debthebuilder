import Head from 'next/head'
import { motion } from "framer-motion"
import Landing from '../components/Landing'

export default function Home() {
    
  return (
    <div className={""}>
      <Head>
        <title>Deb The Builder</title>
        <meta name="description" content="Deb the Builder Professional Website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='flex h-full w-full items-center justify-center'>
          <div>Deb the Builder</div>
        </div>
      </main>
    </div>
  )
}
