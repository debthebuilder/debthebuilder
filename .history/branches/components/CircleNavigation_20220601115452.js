import Image from "next/image";
import Deb from "../deb.jpg";
import Work from "../work2.png";

export default function CircleNavigation() {
    return(
        <div className="flex w-full h-full flex-row overflow-hidden">
            <div className="w-1/3 relative group cursor-pointer  h-screen flex items-center justify-center">
                <div className="absolute">
                    <div className="hidden group-hover:block grayscale">
                        <Image src={Deb}  alt="Deb the Builder"  />
                    </div>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="tracking-widest">Deb</h2>
                </div>
            </div>
            <div className="w-1/3 relative group cursor-pointer h-screen flex items-center justify-center">
            <div className="absolute">
                    <div className="hidden h-fit w-full group-hover:block grayscale">
                        <Image src={Work}  alt="Deb the Builder Portfolio"  />
                    </div>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="group-hover:font-black group-hover:hidden group-hover:text-5xl group-hover:text-black">the <span>builder</span></h2>
                </div>
            </div>
            <div className="w-1/3 relative  h-screen flex items-center justify-center">
                
                <div>the <span>instructor</span></div>
            </div>
        </div>
    )
}