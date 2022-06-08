import Image from "next/image";

export default function CircleNavigation() {
    return(
        <div className="flex w-full h-full flex-row">
            <div className="w-1/3 relative  h-screen flex items-center justify-center">
            <div className="absolute">
                    
                    </div>
                <div>Deb</div>
            </div>
            <div className="w-1/3 relative bg-stone-100 h-screen flex items-center justify-center">
                <div>the <span>builder</span></div>
            </div>
            <div className="w-1/3 relative  h-screen flex items-center justify-center">
                
                <div>the <span>instructor</span></div>
            </div>
        </div>
    )
}