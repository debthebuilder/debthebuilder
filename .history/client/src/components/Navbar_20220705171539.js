import {Link} from "react-router-dom"
const Navbar = () => {
    return(
        <div className="w-full  px-5 bg-transparent z-20">
            <nav className="flex flex-row items-center py-3 justify-center">
                <Link to={"/"}>
                    <span className="font-semibold hover:font-bold logo ">Deb the <span>Builder</span></span>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;