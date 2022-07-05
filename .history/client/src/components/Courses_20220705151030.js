
const Courses = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='w-full md:w-1/4 bg-purple-500 h-56 border-4 border-black'>
                <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-center text-xl">Intro to <br/><span className="text-3xl">Web Development</span></h2>
                    <ul className="flex flex-row items-center">
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-2/4 bg-orange-500 h-56 my-10 md:my-0 md:mx-10 border-4 border-black'></div>
            <div className='w-full md:w-1/4 bg-teal-500 h-56 border-4 border-black'></div>
        </div>
    )
}

export default Courses;