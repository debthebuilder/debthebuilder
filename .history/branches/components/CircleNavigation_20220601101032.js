export default function CircleNavigation() {
    return(
        // <div className="w-screen h-screen flex items-center justify-center text-center relative">
            
        //     <div className="absolute group border-2 h-36 w-36 hover:cursor-pointer hover:bg-blue-500 hover:text-stone-50 hover:h-56 hover:w-56 rounded-full flex items-center justify-center left-24">
        //         <div className="group-hover:text-3xl ">
        //             <span className="hidden group-hover:inline-block font-light tracking-widest">about</span> 
        //             <br/> 
        //             <span className="group-hover:mt-24 font-bold group-hover:leading-loose tracking-wider">Deb</span>
        //         </div>
        //     </div>
        //     <div className="absolute border-2 h-36 w-36 rounded-full flex items-center justify-center right-24">
        //         <div className="group-hover:text-3xl">
        //             <span className="hidden group-hover:inline-block">Deb</span> 
        //             <br/> 
        //             <span className="group-hover:mt-24 font-bold group-hover:leading-loose tracking-wider">the instructor</span>
        //         </div>
        //     </div>
        //     <div className="h-36 w-36 group hover:h-56 hover:w-56 border-4 shadow border-stone-200 rounded-full flex items-center justify-center text-center">
        //     <div className="group-hover:text-3xl">
        //             <span className="hidden group-hover:inline-block">Deb</span> 
        //             <br/> 
        //             <span className="group-hover:mt-24 font-bold group-hover:leading-loose tracking-wider">the builder</span>
        //         </div>            </div>
        // </div>
        <div className="flex flex-row">
            <div className="w-1/3 bg-b h-screen flex items-center justify-center">
                <div>Deb</div>
            </div>
            <div className="w-1/3 h-screen flex items-center justify-center">
                <div>the <span>builder</span></div>
            </div>
            <div className="w-1/3 h-screen flex items-center justify-center">
                <div>the <span>instructor</span></div>
            </div>
        </div>
    )
}