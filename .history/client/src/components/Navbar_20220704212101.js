import {Link} from "react-router-dom"
export const Navbar = () => {
    return(
        <div>
            <nav>
                <Link to={"/"}>
                    <span>Deb the Builder</span>
                </Link>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                        </li>
                    <li>Work</li>
                    <li>Learn</li>
                </ul>
            </nav>
        </div>
    )
}