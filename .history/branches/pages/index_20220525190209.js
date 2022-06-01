import Cover from "../cover.jpg";

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
    
  return (
    <div className={""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={` ${styles.container} my-10 mx-10 rounded`}>
      <div className="relative w-full h-full shadow-2xl shadow-gray-100">
        <div className="w-full h-screen flex items-center justify-center ">
          <div className="w-full h-screen flex flex-row overflow-x-hidden">
            <div className="w-1/2 h-full blur-in-expand z-50">
              <Image src={Cover} alt={"Deb The Builder"}  className={"h-full w-full"} />
            </div>
            <div className="w-1/2 h-full slide-right z-50 bg-gray-100">
              <h1>Hi, I am Debs</h1>
            </div>
          </div>
          
          </div>
          <h1 className={`${styles.title} w-full absolute top-64 my-10 z-0 left-50`}>
              Deb The <a href="https://localhost:3000/cREE">Builder</a>
            </h1>
      </div>
        
       
      </main>
    </div>
  )
}
