export default function NavBar() {
    return(
        <div className="px-5 py-2">
            <nav className="flex flex-row items-center justify-between">
                <a href="/">
                    <div>Deb the Builder</div>
                </a>
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/about">Portfolio</a>
                    </li>
                    <li>
                        <a href="/about">Learn</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}