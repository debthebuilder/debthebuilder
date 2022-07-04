import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import NavBar from '../components/NavBar';
import NYSCSplash from "../pages/assets/NYSC_SPLASH.PNG";
import NoajEmpire from "../pages/assets/NoajEmpire.PNG";
import Resaads from "../../assets/Resaads.PNG";
import PageTitle from '../components/PageTitle';

export default function Portfolio() {
    return(
        <div>
            <Head>
                <title>Portfolio</title>
                <meta name="description" content="Prince Akachi's Home." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Layout>
                    <NavBar portfolio="true" />
                    <PageTitle title={"Portfolio"} />
                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 flex items-center gap-y-10 lg:gap-10'>
                        <div className='bg-green-400 group hover:border-4 hover:border-black h-auto'>
                            <a href='/portfolio/project'>
                                <Image src={NYSCSplash} alt={"CMS FOR NYSC CDS Group"} />
                            </a>
                        </div>
                        <div className='bg-gold-400 group hover:border-4 hover:border-black h-auto'>
                            <a href='/portfolio/project'>
                                <Image src={NoajEmpire} alt={"CMS FOR NYSC CDS Group"} />
                            </a>
                        </div>
                        <div className='bg-orange-400 group hover:border-4 hover:border-black h-auto'>
                            <a href='/portfolio/project'>
                                <Image src={NoajEmpire} alt={"CMS FOR NYSC CDS Group"} />
                            </a>
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
