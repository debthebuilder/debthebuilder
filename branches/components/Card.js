import Image from "next/image"

export default function Card(props) {
    return(
        <div className='my-5 px-1 hover:shadow-xl hover:shadow-slate-50'>
            <div className='flex flex-row items-center'>
                <div className="w-2/4">
                    <Image src={props.imgSrc} alt={props.alt} className='rounded p-2' />
                </div>
                <div className='pl-2'>
                    <h3 className='font-bold text-gray-900 tracking-wide'>{props.postTitle}</h3>
                    <p className='tracking-wide text-sm font-loose font-normal text-gray-400 my-1'>{props.postSummary}</p>
                    <div className='flex flex-row items-center text-xs'>
                        {props.children}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
