import Cover from "../cover.jpg";
import Flowers from "../flowers.jpg"
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

      <main className={` ${styles.container} mb-10 mx-10 py-10 rounded`}>
      <div className="relative w-full h-full shadow-2xl shadow-gray-100">
        <div className="w-full h-screen flex items-center justify-center ">
          <div className="w-full h-screen flex flex-row overflow-x-hidden">
            <div className="w-1/2 h-full  z-50">
              <Image src={Cover} alt={"Deb The Builder"}  className={"h-full w-full"} />
            </div>
            <div className="w-1/2 h-full overflow-y-hidden slide-right z-50 ">
            <Image src={Flowers} alt={"Deb The Builder"}  className={"h-96  w-full"} />
            </div>
          </div>
          
          </div>
          <h1 className={`${styles.title} w-full absolute top-64 my-10 z-0 -right-56`}>
              Deb The <br/> <a href="https://localhost:3000/cREE">Builder</a>
            </h1>
      </div>
        
       
      </main>
    </div>
  )
}
