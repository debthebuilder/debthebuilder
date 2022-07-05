
const Courses = () => {
    return(
        <div className='flex flex-col lg:flex-row lg:items-center mt-10'>
            
            <div className='w-full lg:w-1/4 bg-purple-500 h-56 border-4 border-black dark:border-white'>
                <a href="https://wa.link/01v4kp" target={'_blank'} rel={"noreferrer"}>
                    <div className="flex flex-col items-center justify-center h-full tracking-wider group cursor-pointer">
                        <h2 className="text-center text-sm text-black font-medium">Course <br/><span className="text-3xl font-bold text-white">Web Development</span></h2>
                        <div className="text-gray-200 flex items-center w-full justify-center flex-wrap">
                            <span className="text-sm tracking-widest mx-1">#7weeks</span>
                            <span className="text-sm tracking-widest mx-1">#beginner</span>
                            <span className="text-sm tracking-widest mx-1">#online</span>
                            <span className="text-sm tracking-widest mx-1">#interactive</span>
                        </div>
                        <h3 className="font-semibold text-center">HTML + CSS + Bootstrap</h3>
                        <span className="font-bold text-yellow-300">₦ 20,000</span>
                    </div>
                </a>
                
            </div>
            <div className='w-full lg:w-2/4 bg-orange-500 h-56 my-10 lg:my-0 lg:mx-10 border-4 border-black dark:border-white'>
                <a href="https://wa.link/01v4kp" target={'_blank'} rel={"noreferrer"}>
                    <div className="flex flex-col items-center justify-center h-full tracking-wider group cursor-pointer">
                        <h2 className="text-center text-sm text-black font-medium">Course<br/><span className="text-3xl font-bold text-white">Front-end Development</span></h2>
                        <div className="text-gray-200 flex items-center w-full justify-center flex-wrap">
                            <span className="text-sm tracking-widest mx-1">#10weeks</span>
                            <span className="text-sm tracking-widest mx-1">#beginner</span>
                            <span className="text-sm tracking-widest mx-1">#online</span>
                            <span className="text-sm tracking-widest mx-1">#interactive</span>
                        </div>
                        <h3 className="font-semibold text-center">HTML + CSS + Bootstrap + Javascript</h3>
                        <span className="font-bold text-yellow-300">₦ 35,000</span>
                    </div>
                </a>
            </div>
            <div className='w-full lg:w-1/4 bg-teal-500 h-56 border-4 border-black dark:border-white'>
                <a href="https://wa.link/01v4kp" target={'_blank'} rel={"noreferrer"}>
                    <div className="flex flex-col items-center justify-center h-full tracking-wider group cursor-pointer">
                        <h2 className="text-center text-sm text-black font-medium">Course <br/><span className="text-3xl font-bold text-white">E-Commerce</span></h2>
                        <div className="text-gray-200 flex items-center w-full justify-center flex-wrap">
                            <span className="text-sm tracking-widest mx-1">#5weeks</span>
                            <span className="text-sm tracking-widest mx-1">#beginner</span>
                            <span className="text-sm tracking-widest mx-1">#online</span>
                            <span className="text-sm tracking-widest mx-1">#interactive</span>
                        </div>
                        <h3 className="font-semibold text-center">WordPress + WooCommerce </h3>
                        <span className="font-bold text-yellow-300">₦ 25,000</span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Courses;