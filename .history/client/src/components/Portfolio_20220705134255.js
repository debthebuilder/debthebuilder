const Portfolio = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='h-96 w-full md:w-9/12 bg-green-500 md:mr-10 border-4 border-black'></div>
            <div className='w-full md:w-3/12 mt-10 md:mt-0'>
                <div className='w-full h-64 bg-red-500 border-4 border-black'></div>
                <div className='w-full h-56 bg-red-500 mt-10 border-4 border-black'></div>
            </div>
      </div>
    )
}

export default Portfolio;