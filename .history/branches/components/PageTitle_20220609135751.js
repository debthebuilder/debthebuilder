export default function PageTitle(props) {
    return(
        <div className="py-5">
            <h1 className="text-center font-black text-3xl xl:text-5xl py-5 leading-7 tracking-widest">{props.title}</h1>
        </div>
    )
}