import Button from "./Button";

const Courses = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='w-full md:w-1/4 bg-purple-500 h-56 border-4 border-black'>
                <div className="flex flex-col items-center justify-center h-full tracking-wider">
                    <h2 className="text-center text-xl text-black font-medium">Intro to <br/><span className="text-2xl font-bold text-white">Web Development</span></h2>
                    <h3 className="font-semibold">HTML + CSS</h3>
                    
                    <span className="text-sm tracking-widest">#beginner</span>
                    <Button label={"Enroll"} />
                </div>
            </div>
            <div className='w-full md:w-2/4 bg-orange-500 h-56 my-10 md:my-0 md:mx-10 border-4 border-black'></div>
            <div className='w-full md:w-1/4 bg-teal-500 h-56 border-4 border-black'></div>
        </div>
    )
}

export default Courses;