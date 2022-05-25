export default function Tag(props) {
    return <span className={`${props.tagColor} font-medium tracking-wider hover:underline mr-2`}>{props.label}</span>
}
