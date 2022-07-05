import {Link} from "react-router-dom"
const Navbar = () => {
    return(
        <div className="w-full fixed left-0   px-5 bg-transparent z-20">
            <nav className="flex flex-row items-center py-3 justify-center">
                <Link to={"/"}>
                    <span className="font-semibold hover:font-bold logo dark:text-white ">Deb the <span className="text-blue-500">Builder</span></span>
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;