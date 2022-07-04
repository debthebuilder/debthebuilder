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
                        <div>

                        </div>
                        <div>
                            <p>Hi, I am Deb a.k.a Deb the Builder. I am a software developer currently specialized in front-end development with over 2 years of professional experience. </p>
                        </div>
                    </div>
                </Layout>
            </main>
        </div>
    )
}
