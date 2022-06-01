export default function CircleNavigation() {
    return(
        <div className="w-screen h-screen flex items-center justify-center text-center relative">
            
            <div className="absolute group border-2 h-36 w-36 hover:h-56 hover:w-56 rounded-full flex items-center justify-center left-24">
                <div className="group-hover:text-3xl">
                    <span className="hidden group-hover:inline-block">Deb</span> <br/> <span className="block mt-24 font-bold leading-loose tracking-wider">the Builder</span></div>
            </div>
            <div className="absolute border-2 h-36 w-36 rounded-full flex items-center justify-center right-24">
                <h2>the Instructor</h2>
            </div>
            <div className="h-36 w-36 group hover:h-56 hover:w-56 border-4 shadow border-stone-200 rounded-full flex items-center justify-center text-center">
                <h1 className="group-hover:text-3xl tracking-wider">Deb<br/> <span className="mt-24 font-bold leading-loose tracking-wider">the Builder</span></h1>
            </div>
        </div>
    )
}