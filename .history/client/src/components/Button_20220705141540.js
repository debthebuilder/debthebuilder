const Button = (props) => {
    return <button className="outline-0 px-5 py-2 shadow-md rounded-sm bg-transparent text-sm tracking-wider font-normal my-2 hover:text-white hover:font-medium border border-blue-400">
    <i class="fa-solid fa-download"></i>    {props.label}</button>
}

export default Button;