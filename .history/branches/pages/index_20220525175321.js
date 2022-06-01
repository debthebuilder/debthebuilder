import Cover from "../cover.jpg";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="w-full h-screen flex items-center justify-center">
          <h1 className={styles.title}>
            Deb The <a href="https://localhost:3000/cREE">Builder</a>
          </h1>
        </div>
        <div className="w-full h-full flex flex-row">
          <div className="w-1/2 h-full">
            <Image src={Cover} alt={"Deb The Builder"} />
          </div>
          <div className="w-1/2 h-full">
            <h1>Hi, I am Debs</h1>
          </div>
        </div>
       
      </main>
    </div>
  )
}
