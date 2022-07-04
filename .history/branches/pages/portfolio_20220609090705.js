import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import NavBar from '../components/NavBar';

export default function Portfolio() {
    return(
        <div>
            <Head>
                <title>Portfolio Deb</title>
                <meta name="description" content="Prince Akachi's Home." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Layout>
                    <NavBar Portfolio=/>
                </Layout>
            </main>
        </div>
    )
}
