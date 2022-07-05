import {Link} from "react-router-dom"
export const Navbar = () => {
    return(
        <div>
            <nav className="flex flex-row items-center justify-between px-5">
                <Link to={"/"}>
                    <span>Deb the Builder</span>
                </Link>
                <ul className="flex fkex-row items-center ">
                    <li className="mr-5"><Link to={"/about"}>About</Link></li>
                    <li className="mr-5"><Link to={"/work"}>Work</Link></li>
                    <li><Link to={"/learn"}>Learn</Link></li>
                </ul>
            </nav>
        </div>
    )
}