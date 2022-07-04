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
        <div className='flex h-screen w-full items-center justify-center'>
          <div className='text-3xl font-semibold cursor-pointer group flex flex-row items-center'>
            <div className='flex flex-col'>
              <a href='/about'>Deb </a>
              <span className='group-hover:underline border-b-2 w-full'></span>
            </div>
            <a href="/portfolio">the Builder</a></div>
        </div>
      </main>
    </div>
  )
}
