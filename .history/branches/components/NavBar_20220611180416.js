export default function NavBar(props) {
    return(
        <div className="py-3">
            <nav className="w-full flex flex-col  md:flex-row items-center md:justify-between">
                <a href="/">
                    <div className="tracking-wider text-lg font-normal cursor-pointer text-gray-400 hover:text-gray-900 hover:text">Deb the Builder</div>
                </a>
                <ul className="flex w-full md:w-1/2 flex-row justify-center items-center md:justify-end text-sm">
                    <li className={`ml-5 flex flex-col ${props.about} tracking-wider leading-loose`}>
                        <a href="/about" className={`${props.about ? "font-semibold" : 'font-normal'}`}>About</a>
                        <span className={`${props.about ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                    <li className={`ml-5 flex flex-col ${props.portfolio} tracking-wider leading-loose`}>
                        <a href="/portfolio" className={`${props.portfolio ? "font-semibold" : 'font-normal'}`}>Portfolio</a>
                        <span className={`${props.portfolio ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                    <li className={`ml-5 flex flex-col ${props.learn} tracking-wider leading-loose`}>
                        <a href="/learn" className={`${props.learn ? "font-semibold" : 'font-normal'}`}>Learn</a>
                        <span className={`${props.learn ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}