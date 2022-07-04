import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import NavBar from '../components/NavBar';
import Donbekson from "../pages/assets/Donbekson.PNG";
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
                        <div className='bg-green-400 group relative mb-4 h-auto'>
                            <a href='https://nysc-cds-e-attendance.com.ng/'>
                                <Image src={NYSCSplash} alt={"CMS FOR NYSC CDS Group"} />
                            </a>
                            <div className='hidden group-hover:inline-block'>
                                <div className=' w-full h-full bg-black bg-opacity-80 flex flex-col justify-end absolute left-0 top-0 z-50 '>
                                    
                                    <div className='text-gray-50 ml-2  mt-3 text-sm lg:text-base tracking-widest'>
                                        <span className='mr-2'>Role:</span>
                                        <span className='font-medium text-yellow-300'>Full-stack Developer</span>
                                    </div>
                                    <ul className='flex flex-wrap flex-row text-sm lg:text-base items-center ml-2 mt-3'>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>React Js</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Tailwind CSS</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Font Awesome Icons</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Multer</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>JSON Web Token</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Express Js</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>MySQL</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Node js</li>
                                        <li className='inline-block text-gray-50 mb-3 mr-2 '>
                                        <a href='/project' className='text-yellow-300 hover:underline mr-2'>Read more</a>
                                        </li>

                                    </ul>
                                    <div className='text-gray-50 ml-2 mb-3 text-sm'>
                                        <a href='nysc-cds-e-attendance.com' className='hover:text-yellow-300 hover:underline mr-2'>Vist Site <i className="fa-solid fa-up-right-from-square"></i></a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className='bg-black relative group md:mb-24 lg:mb-0 md:h-96'>
                            <a href='https://resaads.com.ng/'>
                                <Image src={Resaads} alt={"Resaads Consult Think Millenial - Business Site"} />
                            </a>
                            <div className='hidden group-hover:inline-block'>
                                <div className=' w-full h-full bg-black bg-opacity-80 flex flex-col justify-end absolute left-0 top-0 z-50 '>
                                    
                                    <div className='text-gray-50 ml-2  mt-3 text-sm lg:text-base tracking-widest'>
                                        <span className='mr-2'>Role:</span>
                                        <span className='font-medium text-yellow-300'>Full-stack Developer</span>
                                    </div>
                                    <ul className='flex flex-wrap flex-row text-sm lg:text-base items-center ml-2 mt-3'>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>WordPress</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>WooCommerce</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Google Analytics</li>
                                    </ul>
                                    <div className='text-gray-50 ml-2 mb-3 text-sm'>
                                        <a href='https://resaads.com.ng/' className='hover:text-yellow-300 hover:underline mr-2'>Vist Site <i className="fa-solid fa-up-right-from-square"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-yellow-600 relative group mb-4 h-auto'>
                            <a href='https://noajempire.com/'>
                                <Image src={NoajEmpire} alt={"Donbekson - Higher Education Consultant"} />
                            </a>
                            <div className='hidden group-hover:inline-block'>
                                <div className=' w-full h-full bg-black bg-opacity-80 flex flex-col justify-end absolute left-0 top-0 z-50 '>
                                    
                                    <div className='text-gray-50 ml-2  mt-3 text-sm lg:text-base tracking-widest'>
                                        <span className='mr-2'>Role:</span>
                                        <span className='font-medium text-yellow-300'>Full-stack Developer</span>
                                    </div>
                                    <ul className='flex flex-wrap flex-row text-sm lg:text-base items-center ml-2 mt-3'>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>WordPress</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>WooCommerce</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Google Analytics</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Font Awesome Icons</li>
                                    </ul>
                                    <div className='text-gray-50 ml-2 mb-3 text-sm'>
                                        <a href='https://noajempire.com/' className='hover:text-yellow-300 hover:underline mr-2'>Vist Site <i className="fa-solid fa-up-right-from-square"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-blue-600 relative group mb-4 h-auto'>
                            <a href='https://noajempire.com/'>
                                <Image src={NoajEmpire} alt={"Noaj Empire - Ecommerce"} />
                            </a>
                            <div className='hidden group-hover:inline-block'>
                                <div className=' w-full h-full bg-black bg-opacity-80 flex flex-col justify-end absolute left-0 top-0 z-50 '>
                                    
                                    <div className='text-gray-50 ml-2  mt-3 text-sm lg:text-base tracking-widest'>
                                        <span className='mr-2'>Role:</span>
                                        <span className='font-medium text-yellow-300'>Full-stack Developer</span>
                                    </div>
                                    <ul className='flex flex-wrap flex-row text-sm lg:text-base items-center ml-2 mt-3'>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>WordPress</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>WooCommerce</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Google Analytics</li>
                                        <li className='inline-block border cursor-pointer text-gray-50 hover:font-bold py-1 px-2 mb-3 mr-2 '>Font Awesome Icons</li>
                                    </ul>
                                    <div className='text-gray-50 ml-2 mb-3 text-sm'>
                                        <a href='https://noajempire.com/' className='hover:text-yellow-300 hover:underline mr-2'>Vist Site <i className="fa-solid fa-up-right-from-square"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </div>
    )
}
