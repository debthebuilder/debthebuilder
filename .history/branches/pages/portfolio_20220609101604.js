import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import NavBar from '../components/NavBar';
import PageTitle from '../components/PageTitle';

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
                    <NavBar portfolio="true" />
                    <PageTitle title={"Portfolio"} />
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-10'>
                        <div className='bg-red-400 hover:border-4 hover:border-black h-96'>
                            <div></div>
                            <div className='bg-white p-2 tracking-wider text-sm'>
                                <div>
                                    <span className=''>Application:</span>
                                    <span>CMS for NYSC Community Development Service </span>
                                </div>
                                
                                <div className='flex flex-col my-3'>
                                    <div>
                                        <span className='text-xs border border-black p-2 my-2 hover:font-bold'>REACT js</span>
                                        <span className='text-xs border border-black p-2 my-2 hover:font-bold ml'>REACT js</span>
                                        <span className='text-xs border border-black p-2 my-2 hover:font-bold'>REACT js</span>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div className='bg-blue-400 hover:border-4 hover:border-black h-96'>
                            <div></div>
                            <div>02</div>
                        </div>
                        <div className='bg-purple-400 hover:border-4 hover:border-black h-96'>
                            <div></div>
                            <div>03</div>
                        </div>
                    </div>
                </Layout>
            </main>
        </div>
    )
}
