import {Link} from "react-router-dom"
export const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to={"/"}>
                    <span>Deb the Builder</span>
                </Link>
                <ul>
                    <li><Link to={"/"}>About</Link></li>
                    <li><Link to={"/"}>Work</Link></li>
                    <li><Link to={"/"}>Learn</Link></li>
                </ul>
            </nav>
        </div>
    )
}