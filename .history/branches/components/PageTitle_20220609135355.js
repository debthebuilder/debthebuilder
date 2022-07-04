export default function PageTitle(props) {
    return(
        <div>
            <h1 className="text-center font-black xl:text-5xl py-5 leading-loose tracking-widest">{props.title}</h1>
        </div>
    )
}