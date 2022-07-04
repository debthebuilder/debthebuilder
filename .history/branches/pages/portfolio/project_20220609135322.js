import Image from 'next/image'
import Head from 'next/head'
import Layout from "../../components/Layout"
import NavBar from '../../components/NavBar';
import NYSCSplash from "../assets/NYSC_SPLASH.PNG";
import PageTitle from '../../components/PageTitle';
export default function Project() {
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
                    <NavBar portfolio={"true"} />
                    <PageTitle title="NYSC CDS Group C.M.S" />
                    {/* <div className='bg-white p-2 tracking-wider'>
                                <div>
                                    <span className='font-bold text-lg'>C.M.S for NYSC Community Development Service </span>
                                </div>
                                <div className='my-2'>
                                <span className='font-bold text-bold text-blue-500'>Full-Stack Developer</span>
                                </div>
                                
                                <div className='flex flex-wrap'>
                                    
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>REACT js</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Axios</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Formik</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Tailwind CSS</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Express js</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>JWT</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Node js</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>MySQL</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Bcrypt</span>
                                    <span className='text-xs border border-black py-2 px-2 mb-3 group-hover:font-bold mr-2'>Font Awesome 6</span>
                                </div>
                                
                               
                            </div> */}
                </Layout>
            </main>
        </div>
    )
}