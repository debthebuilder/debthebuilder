import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import Tag from "../components/Tag"
import Card from '../components/Card';

export default function Home() {
    return(
        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="Prince Akachi's Home." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Layout>
                    <div className='flex flex-row w-full items-center justify-between relative'>
                        <ArrowBackSharpIcon />
                        <span className='absolute right-0 -top-6 text-gray-300 text-4xl'>...</span>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-28'>
                            <a href='#'>
                                {/* <Image src={Debs} alt={"Jiyoung Seo"} className=" rounded-full w-full" /> */}
                            </a>
                        </div>
                        <h1 className='text-gray-900 font-bold text-2xl tracking-wide'>Jiyoung Seo</h1>
                        <span className='font-medium text-sm text-gray-300'>@jiyoung_roses</span>
                        <button className='flex items-center  rounded py-1 px-2 text-sm text-gray-800 my-3'>
                            <PersonAddAltOutlinedIcon />
                            <span className='pl-2 tracking-wide  font-bold'>Follow</span>
                        </button>
                    </div>
                    <div className='flex flex-row items-center justify-around bg-gray-50 py-2 rounded my-2'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='font-bold text-gray-900 text-xl'>96</span>
                            <span className='font-normal text-gray-400 text-sm tracking-wide'>Posts</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='font-bold text-gray-900 text-xl'>12k</span>
                            <span className='font-normal text-gray-400 text-sm tracking-wide'>Friends</span>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='font-bold text-gray-900 text-xl'>37k</span>
                            <span className='font-normal text-gray-400 text-sm tracking-wide'>Likes</span>
                        </div>
                    </div>

                    <div className='px-2 py-2'>
                        <p className='text-sm text-gray-400  tracking-wide font-loose text-center'>Creative English teacher who blogs and teaches beginning to advanced literature courses for 10th and 11th grade students at Bloomfield High School.</p>
                    </div>

                    <div className='flex flex-row justify-around items-center text-gray-300 my-3'>
                        <a href="#" className='text-blue-500 border-b-2 border-blue-400'><DriveFileRenameOutlineOutlinedIcon /> <span className='hidden text-sm mx-1'>Blog</span></a>
                        <a href="#"> <i class="fa-brands fa-tiktok"></i> <span className='hidden text-sm mx-1'>TikTok</span></a>
                        <a href="#"><InstagramIcon /> <span className='hidden text-sm mx-1'>Instagram</span></a>
                        <a href="#"><YouTubeIcon /> <span className='hidden text-sm mx-1'>YouTube</span></a>
                    </div>
                    <div className='my-3'>
                        <Card imgSrc={''} alt={"Kids"} 
                            postTitle={"The Art of Giving"} 
                            postSummary="Show some love to Sharon McCutcheon by giving...">
                            <Tag tagColor={"text-purple-500"} label={"Children"} />
                            <Tag tagColor={"text-blue-500"} label={"Education"} />
                        </Card>
                        <Card imgSrc={''} alt={"Kids"} 
                            postTitle={"The Art of Giving"} 
                            postSummary="Show some love to Sharon McCutcheon by giving...">
                            <Tag tagColor={"text-purple-500"} label={"Children"} />
                            <Tag tagColor={"text-blue-500"} label={"Education"} />
                        </Card>
                        <Card imgSrc={''} alt={"Kids"} 
                            postTitle={"The Art of Giving"} 
                            postSummary="Show some love to Sharon McCutcheon by giving...">
                            <Tag tagColor={"text-purple-500"} label={"Children"} />
                            <Tag tagColor={"text-blue-500"} label={"Education"} />
                        </Card>
                    </div>
                    
                   
                </Layout>
                
            </main>
        </div>
    )
}
