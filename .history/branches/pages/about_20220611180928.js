import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Image from 'next/image'
import Head from 'next/head'
import Layout from "../components/Layout"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import NavBar from '../components/NavBar';
import PageTitle from '../components/PageTitle';

export default function About() {
    return(
        <div>
            <Head>
                <title>About Deb</title>
                <meta name="description" content="Prince Akachi's Home." />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Layout>
                    <NavBar about="true" />
                    <PageTitle title={"About Deb"} />
                    <div>
                        <div className='my-5'>
                            <h2 className='font-bold tracking-widest'>Greetings...</h2>
                            <p className='font-normal'>Hello, I am Deb a.k.a Deb the Builder. I am a front-end developer currently transitioning to full-stack development with over 2 years of professional experience. I bring ideas and  designs to life by meticulously building user-centric applications achievable by combining my design, S.E.O, and human knowledge with my love for writing beautiful code. I also love creating solutions to problems in my community such as the <a href="/project" className='text-green-600 font-semin hover:underline hover:font-bold'>C.M.S for NYSC CDS</a>. I am pretty much still getting started on my journey and I am enthusiastic about what the future holds, will you become part of my journey? I guess we will find out.  </p>
                        </div>
                        <div className='my-5'>
                            <h2 className='font-bold tracking-widest'>Tech Stack</h2>
                            <ul className='flex items-center my-3 flex-wrap'>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>HTML</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>CSS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>SCSS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>BOOTSTRAP</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>TAILWIND CSS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>JQUERY</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>JAVASCRIPT</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>REACT JS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>NEXT JS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>EXPRESS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>NODE JS</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>MYSQL</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>GIT</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>GITHUB</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>FIGMA</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>WORDPRESS</li>
                            </ul>
                        </div>
                        <div className='my-5'>
                            <h2 className='font-bold tracking-widest'>Cloud Tools</h2>
                            <ul className='flex items-center my-3 flex-wrap'>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Slack</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Trello</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Google Docs</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Click Up</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Zoom</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Google Meet</li>
                            </ul>
                        </div>
                        <div className='my-5'>
                            <h2 className='font-bold tracking-widest'>Reach Out</h2>
                            <button>Download CV</button>
                            <ul className='flex items-center my-3 flex-wrap'>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Slack</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Trello</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Google Docs</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Click Up</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Zoom</li>
                                <li className='inline-block cursor-pointer border py-1 px-2 tracking-widest mr-2 mb-2 hover:border-black hover:font-semibold '>Google Meet</li>
                            </ul>
                        </div>
                    </div>
                </Layout>
            </main>
        </div>
    )
}
