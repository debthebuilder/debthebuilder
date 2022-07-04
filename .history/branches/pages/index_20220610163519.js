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
          <div className='text-3xl font-semibold cursor-pointer  flex flex-row items-center'>
            <div className='flex flex-col group'>
              <a href='/about'>Deb </a>
              <span className='border-b-0 hover:border-b-2 w-full'></span>
            </div>
            <div className='flex flex-col ml-2 group'>
              <a href='/portfolio'>the builder</a>
              <span className='border-b-0 hover:border-b-2 w-full'></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
