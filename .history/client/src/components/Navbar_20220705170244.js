import {Link} from "react-router-dom"
const Navbar = () => {
    return(
        <div className="w-full left-0 px-5 bg-transparent z-20">
            <nav className="flex flex-row items-center py-3 justify-center">
                <Link to={"/"}>
                    <span className="font-semibold hover:font-bold ">Deb the Builder</span>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;