import {Link} from "react-router-dom"
export const Navbar = () => {
    return(
        <div className="fixed w-full left-0 px-5 bg-transparent">
            <nav className="flex flex-row items-center justify-between px-5">
                <Link to={"/"}>
                    <span className="font-semibold hover:font-bold">Deb the Builder</span>
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