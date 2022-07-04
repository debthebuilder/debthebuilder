export default function NavBar() {
    return(
        <div className="py-3">
            <nav className="flex flex-row items-center justify-between">
                <a href="/">
                    <div>Deb the Builder</div>
                </a>
                <ul className="flex w-1/2 flex-row items-center justify-end">
                    <li className={`ml-5 flex flex-col ${prop.about}`}>
                        <a href="/about" className={`${props.about ? "font-bold" : 'font-normal'}`}>About</a>
                        <span className={`${props.about ? "border-b-2 w-full" : 'border-b-0'}`}></span>
                    </li>
                    <li className="ml-5">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="ml-5">
                        <a href="/learn">Learn</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}