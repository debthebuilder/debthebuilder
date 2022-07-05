
const Courses = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='w-full md:w-1/4 bg-purple-500 h-56 border-4 border-black'>
                <div className="flex flex-col items-center ">
                    <h2>Intro to Web Development</h2>
                    <ul>
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