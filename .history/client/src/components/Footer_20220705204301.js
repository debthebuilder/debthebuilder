const Footer = () => {
    return(
        <div className='border-4 border-black dark:border-white my-10 bg-blue-500 py-10'>
            <div className='flex flex-col lg:flex-row lg:items-center tracking-wider'>
                <div className='lg:pl-10 w-full lg:w-2/6 text-center lg:text-left'>
                  <h2>Let's <span className='text-white font-semibold'>Build</span></h2>
                  <h1 className='text-3xl font-bold'>Just say<br/><span className='text-white font-semibold greeting'>!</span></h1>
                </div>
                <ul className='px-10 mt-5 lg:mt-0 w-full lg:w-4/6 flex flex-row items-center justify-between'>
                  <li className='flex flex-col hover:text-white hover:font-semibold group'>
                    <a href='mailto:hello@debthebuilder.com'>
                      <i className="fa-solid fa-at"></i>
                      <span className="hidden lg:inline"> email</span>
                    </a>
                    <span className='hidden border-2 border-white mt-1 group-hover:block'></span>
                  </li>
                  <li className='flex flex-col hover:text-white hover:font-semibold group'>
                    <a href='https://www.linkedin.com/in/deborahegonu'>
                      <i className="fa-brands fa-linkedin"></i> <span className="hidden lg:inline">linkedin</span></a>
                      <span className='hidden border-2 border-white mt-1 group-hover:block'></span>
                      </li>
                  
                  <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://t.me/+UNl4pDuJcog1MGJk'><i className="fa-brands fa-telegram"></i> <span className="hidden lg:inline">telegram</span></a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                  <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://www.youtube.com/channel/UCjtMETGfAS5RozG1L_-EgdA'><i className="fa-brands fa-youtube"></i> <span className="hidden lg:inline">youtube</span></a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                  
                </ul>
              </div>
          <p>Be the change you want to see in the world &hearts</p> 
        </div>
    )
}


export default Footer;