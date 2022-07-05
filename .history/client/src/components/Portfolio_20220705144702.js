import NYSC from "../NYSCREEN.PNG";
import 
const Portfolio = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='h-auto w-full md:w-9/12 bg-green-500 md:mr-10 border-4 border-black'>
                <img src={NYSC} alt="NYSC" className='w-full h-full'/>
            </div>
            <div className='w-full md:w-3/12 mt-10 md:mt-0'>
                <div className='w-full h-64  border-4 border-black'></div>
                <div className='w-full h-56 bg-amber-400 mt-10 border-4 border-black'></div>
            </div>
        </div>
    )
}

export default Portfolio;