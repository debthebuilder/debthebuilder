export default function NavBar(props) {
    return(
        <div className="py-3">
            <nav className="flex flex-row items-center justify-between">
                <a href="/">
                    <div>Deb the Builder</div>
                </a>
                <ul className="flex w-1/2 flex-row items-center justify-end">
                    <li className={`ml-5 flex flex-col ${props.about} tracking-wider`}>
                        <a href="/about" className={`${props.about ? "font-semibold" : 'font-normal'}`}>About</a>
                        <span className={`${props.about ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                    <li className={`ml-5 flex flex-col ${props.portfolio} tracking-wider`}>
                        <a href="/portfolio" className={`${props.portfolio ? "font-semibold" : 'font-normal'}`}>Portfolio</a>
                        <span className={`${props.portfolio ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                    <li className={`ml-5 flex flex-col ${props.learn}`}>
                        <a href="/learn" className={`${props.learn ? "font-semibold" : 'font-normal'}`}>Learn</a>
                        <span className={`${props.learn ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}