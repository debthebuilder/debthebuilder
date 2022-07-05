const Footer = () => {
    return(
        <div className='border-4 border-black dark:border-white my-10 bg-blue-500 py-10'>
            <div className='flex flex-col md:flex-row md:items-center tracking-wider'>
                <div className='pl-10 w-full md:w-2/6'>
                  <h2>Let's <span className='text-white font-semibold'>Build</span></h2>
                  <h1 className='text-3xl font-bold'>Just say<br/><span className='text-white font-semibold greeting'>!</span></h1>
                </div>
                <ul className='px-10 mt-5 md:mt-0 w-full md:w-4/6 flex flex-row items-center justify-between'>
                  <li className='flex flex-col hover:text-white hover:font-semibold group'>
                    <a href='mailto:hello@debthebuilder.com'>
                    <i className="fa-solid fa-at"></i> email<span></span></a>
                    <span className='hidden border-2 border-white mt-1 group-hover:block'></span>
                  </li>
                  <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://www.linkedin.com/in/deborahegonu'><i className="fa-brands fa-linkedin"></i> linkedin</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                  
                  <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://t.me/+UNl4pDuJcog1MGJk'><i className="fa-brands fa-telegram"></i> telegram</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                  <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://www.youtube.com/channel/UCjtMETGfAS5RozG1L_-EgdA'><i className="fa-brands fa-youtube"></i> youtube</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                  
                </ul>
              </div>
              
        </div>
    )
}


export default Footer;