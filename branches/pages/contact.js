import Head from "next/head";
import NavBar from "../components/NavBar";
import PageTitle from "../components/PageTitle";

export default function Contact(){
    return(
        <div>
            <Head>
                <title>Contact - Deb the Builder</title>
            </Head>
            <NavBar />
            <PageTitle title={'Contact'} />
            
        </div>
    )
}