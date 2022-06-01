export default function CircleNavigation() {
    return(
        <div className="w-screen h-screen flex items-center justify-center text-center relative">
            <div className="absolute border-2 h-36 w-36 rounded-full flex items-center justify-center left-24">
                <h2>instructor</h2>
            </div>
            <div className="absolute border-2 h-36 w-36 rounded-full flex items-center justify-center left-24">
                <h2>instructor</h2>
            </div>
            <div className="absolute border-2 h-36 w-36 rounded-full flex items-center justify-center right-24">
                <h2>instructor</h2>
            </div>
            <div className="h-56 w-56 border-4 shadow border-stone-200 rounded-full flex items-center justify-center text-center">
                <h1 className="text-3xl tracking-wider">Deb the <br/> <span className="mt-24 font-bold leading-loose tracking-wider">Builder</span></h1>
            </div>
        </div>
    )
}