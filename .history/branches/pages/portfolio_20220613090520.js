import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import NavBar from '../components/NavBar';
import DebtheBuilder from "../pages/assets/DebtheBuilder.PNG";
import NYSCSplash from "../pages/assets/NYSC_SPLASH.PNG";
import NoajEmpire from "../pages/assets/NoajEmpire.PNG";
import Resaads from "../pages/assets/Resaads.PNG";
import PageTitle from '../components/PageTitle';

export default function Portfolio() {
    return(
        <div>
            <Head>
                <title>Portfolio - Deb the Builder</title>
                <meta name="description" content="Prince Akachi's Home." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Layout>
                    <NavBar portfolio="true" />
                    <PageTitle title={"Portfolio"} />
                    <div className='w-full mt-5 grid grid-cols-1 lg:grid-cols-2 flex items-center gap-y-10 lg:gap-10'>
                        <div className='bg-green-400 group relative hover:border-4 hover:border-black mb-4 h-auto'>
                            <a href='https://nysc-cds-e-attendance.com.ng/'>
                                <Image src={NYSCSplash} alt={"CMS FOR NYSC CDS Group"} />
                            </a>
                            <div className='w-full h-full bg-black bg-opacity-80 absolute left-0 top-0 z-50 '>
                                <ul className='flex flex-wrap flex-row items-center ml-2 my-3'>
                                    <li className='inline-block border text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>REACT Js</li>
                                    <li className='inline-block border text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>TAIL</li>
                                    <li className='inline-block border text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>REACT Js</li>
                                </ul>
                            </div>
                        </div>
                        <div className='bg-black group hover:border-4 hover:border-black md:mb-24 lg:mb-0 md:h-96'>
                            <a href='https://resaads.com.ng/'>
                                <Image src={Resaads} alt={"Resaads Consult Think Millenial - Business Site"} />
                            </a>
                        </div>
                        <div className='bg-yellow-600 group hover:border-4 hover:border-black mb-4 h-auto'>
                            <a href='https://noajempire.com/'>
                                <Image src={NoajEmpire} alt={"Noaj Empire - Ecommerce"} />
                            </a>
                        </div>
                        <div className='bg-stone-100 group hover:border-4 hover:border-black mb-4 h-auto'>
                            <a href='/'>
                                <Image src={DebtheBuilder} alt={"DebtheBuilder Portfolio Site"} />
                            </a>
                        </div>
                        
                    </div>
                </Layout>
            </main>
        </div>
    )
}
