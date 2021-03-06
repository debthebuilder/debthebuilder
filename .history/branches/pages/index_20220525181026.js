import Cover from "../cover.jpg";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  return (
    <div className={"bg-blue-700"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`shadow-2xl ${styles.container} my-10`}>
        <div className="w-full h-screen flex items-center justify-center bg-red-300">
          <h1 className={styles.title}>
            Deb The <a href="https://localhost:3000/cREE">Builder</a>
          </h1>
        </div>
        <div className="w-full h-screen flex flex-row overflow-x-hidden">
          <div className="w-1/2 h-full slide-left">
            <Image src={Cover} alt={"Deb The Builder"} />
          </div>
          <div className="w-1/2 h-full slide-right bg-gray-100">
            <h1>Hi, I am Debs</h1>
          </div>
        </div>
       
      </main>
    </div>
  )
}
