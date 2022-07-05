import {Link} from "react-router-dom"
export const Navbar = () => {
    return(
        <div>
            <nav className="flex flex-row items-center">
                <Link to={"/"}>
                    <span>Deb the Builder</span>
                </Link>
                <ul>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/work"}>Work</Link></li>
                    <li><Link to={"/learn"}>Learn</Link></li>
                </ul>
            </nav>
        </div>
    )
}