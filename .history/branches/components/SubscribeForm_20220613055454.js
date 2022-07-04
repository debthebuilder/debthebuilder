import Image from "next/image";
import MCLogo from "../pages/assets/MC_Logo"

export default function SubscribeForm(){
    return(
        <>
        <div>
            <div className="text-center">Subscribe</div>
            <a href="https://gmail.us8.list-manage.com/subscribe/post?u=e8ad586d39179304b2aeb71c6&id=3d210216fb" className="my-3 mr-3">
                <button className="outline-none py-1 px-2 text-sm  border hover:font-bold hover:border-black">
                    <Image src={MCLogo}/>Mailing List</button>
            </a>
            <a href="https://gmail.us8.list-manage.com/subscribe/post?u=e8ad586d39179304b2aeb71c6&id=3d210216fb" className="my-3 mr-3">
                <button className="outline-none py-1 px-2 text-sm  border hover:font-bold hover:border-black">YouTube Channel</button>
            </a>
        </div>
            
        </>
    )
}