import Head from 'next/head'
import Layout from "../components/Layout"
import NavBar from '../components/NavBar';
import PageTitle from '../components/PageTitle';
import Subscribe from '../components/Subscribe';

export default function Learn() {
    return(
        <div>
            <Head>
                <title>Learn - Deb the Builder</title>
                <meta name="description" content="Prince Akachi's Home." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Layout>
                    <NavBar learn="true" />
                    <PageTitle title={"Learn"} />
                    <div className='flex flex-col items-center justify-center'>
                        <div className='mb-5'>Amazing content loading... In the mean time </div>
                        <Subscribe />
                    </div>
                </Layout>
            </main>
        </div>
    )
}
