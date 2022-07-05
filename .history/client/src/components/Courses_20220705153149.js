import Button from "./Button";

const Courses = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='w-full md:w-1/4 bg-purple-500 h-56 border-4 border-black'>
                <div className="flex flex-col items-center justify-center h-full tracking-wider group cursor-pointer">
                    <h2 className="text-center text-xl text-black font-medium">Intro to <br/><span className="text-3xl font-bold text-white">Web Development</span></h2>
                    <div className="text-gray-200">
                        <span className="text-sm tracking-widest mx-1">#7weeks</span>
                        <span className="text-sm tracking-widest mx-1">#beginner</span>
                        <span className="text-sm tracking-widest mx-1">#online</span>
                        <span className="text-sm tracking-widest mx-1">#interactive</span>
                    </div>
                    <h3 className="font-semibold">HTML + CSS + Bootstrap</h3>
                    <span>35,000</span>
                </div>
            </div>
            <div className='w-full md:w-2/4 bg-orange-500 h-56 my-10 md:my-0 md:mx-10 border-4 border-black'></div>
            <div className='w-full md:w-1/4 bg-teal-500 h-56 border-4 border-black'></div>
        </div>
    )
}

export default Courses;