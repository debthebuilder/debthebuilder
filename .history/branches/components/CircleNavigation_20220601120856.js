import Image from "next/image";
import Deb from "../deb.jpg";
import Work from "../work2.png";

export default function CircleNavigation() {
    return(
        <div className="flex w-full h-full flex-row overflow-hidden">
            <div className="w-1/3 relative group cursor-pointer  h-screen flex items-center justify-center">
                <div className="absolute">
                    <div className="hidden group-hover:block grayscale transition duration-1000 hover:delay-500">
                        <Image src={Deb}  alt="Deb the Builder"  />
                    </div>
                </div>
                <div className="absolute hidden right-0 top-0 group-hover:block">
                    <ul className="border-l-2 border-l-stone-50 px-5 text-2xl text-stone-50 pt-3">
                        <li>a</li>
                        <li>b</li>
                        <li>o</li>
                        <li>u</li>
                        <li>t</li>
                    </ul>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="tracking-widest text-xl text-gray-800 group-hover:hidden">Deb</h2>
                </div>
            </div>
            <div className="w-1/3 relative group cursor-pointer h-screen flex items-center justify-center">
                <div className="absolute">
                    <div className="hidden h-fit w-full group-hover:block grayscale">
                        <Image src={Work}  alt="Deb the Builder Portfolio"  />
                    </div>
                </div>
                <div className="absolute hidden right-0 top-0 group-hover:block">
                    <ul className="border-l-2 border-l-gray-500 px-5 text-2xl text-gray-800 pt-3">
                        <li>a</li>
                        <li>b</li>
                        <li>o</li>
                        <li>u</li>
                        <li>t</li>
                    </ul>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="tracking-widest text-xl text-gray-800 group-hover:hidden">the <span>builder</span></h2>
                </div>
            </div>
            <div className="w-1/3 relative group cursor-pointer h-screen flex items-center justify-center">
                <div className="absolute">
                    <div className="hidden h-fit w-full group-hover:block grayscale">
                        <Image src={Work}  alt="Deb the Builder Portfolio"  />
                    </div>
                </div>
                <div className="z-50 h-full w-full flex items-center justify-center backdrop-opacity-10 backdrop-grayscale bg-white/10">
                    <h2 className="tracking-widest text-xl text-gray-800 group-hover:hidden">the <span>instructor</span></h2>
                </div>
            </div>
        </div>
    )
}