import Image from "next/image";
import MCLogo from "../pages/assets/MC_Logo.jpg";
import YTLogo from "../pages/assets/logo-youtube.png";

export default function SubscribeForm(){
    return(
        <>
        <div>
            <div className="text-center">Subscribe</div>
            <div>
                <a href="https://gmail.us8.list-manage.com/subscribe/post?u=e8ad586d39179304b2aeb71c6&id=3d210216fb" className="my-3 mr-3">
                    <button className="outline-none py-1 px-2 text-sm  border flex flex-row items-center hover:font-bold hover:border-black">
                        <div className="w-8 h-8 mr-3 ">
                        <Image src={MCLogo} width={"100%"} height={"100%"} />
                        </div>
                        Mailing List</button>
                </a>
                <a href="https://www.youtube.com/channel/UCjtMETGfAS5RozG1L_-EgdA" className="my-3 mr-3">
                    <button className="outline-none py-1 px-2 text-sm  border flex flex-row items-center hover:font-bold hover:border-black">
                        <div className="w-8 h-8  mr-3">
                        <Image src={YTLogo} width={"100%"} height={"100%"} />
                        </div>
                        YouTube Channel</button>
                </a>
            </div>
            
            <a href="https://gmail.us8.list-manage.com/subscribe/post?u=e8ad586d39179304b2aeb71c6&id=3d210216fb" className="my-3 mr-3">
                <button className="outline-none py-1 px-2 text-sm  border hover:font-bold hover:border-black">YouTube Channel</button>
            </a>
        </div>
            
        </>
    )
}