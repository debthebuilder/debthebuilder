const Banner = () => {
    return(
        return(
            <div className='border-4 border-black my-10 bg-blue-500 py-10'>
                <div className='flex flex-col md:flex-row md:items-center'>
                    <div className='pl-10 w-full md:w-2/6'>
                      <h2>Let's <span className='text-white font-semibold'>Build</span></h2>
                      <h1 className='text-3xl font-bold'>Just say<br/>Mush<span className='text-white font-semibold'>mushi!</span></h1>
                    </div>
                    <ul className='px-10 mt-5 md:mt-0 w-full md:w-4/6 flex flex-row items-center justify-between'>
                      <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='mailto:hello@debthebuilder.com'>email</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                      <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://www.linkedin.com/in/deborahegonu'>linkedin</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                      <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://github.com/debthebuilder'>github</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                      <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='mailto:hello@debthebuilder.com'>telegram</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                      
                    </ul>
                  </div>
                  
            </div>
        )
    )
}