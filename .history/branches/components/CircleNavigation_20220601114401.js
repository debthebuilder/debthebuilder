import Image from "next/image";
import Deb from "../deb.jpg";
import Work from "../work.png";

export default function CircleNavigation() {
    return(
        <div className="flex w-full h-full flex-row">
            <div className="w-1/3 relative group cursor-pointer  h-screen flex items-center justify-center">
                <div className="absolute">
                    <div className="hidden group-hover:block grayscale">
                        <Image src={Deb}  alt="Deb the Builder"  />
                    </div>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="group-hover:font-black group-hover:text-5xl group-hover:text-stone-50">Deb</h2>
                </div>
            </div>
            <div className="w-1/3 relative bg-stone-100 h-screen flex items-center justify-center">
            <div className="absolute">
                    <div className="hidden group-hover:block grayscale">
                        <Image src={}  alt="Deb the Builder"  />
                    </div>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="group-hover:font-black group-hover:text-5xl group-hover:text-stone-50">the <span>builder</span></h2>
                </div>
            </div>
            <div className="w-1/3 relative  h-screen flex items-center justify-center">
                
                <div>the <span>instructor</span></div>
            </div>
        </div>
    )
}