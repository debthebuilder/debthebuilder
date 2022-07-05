import NYSC from "../NYSCREEN.PNG";
import NOAJEMPIRE from "../NoajEmpire.PNG";
import RESAADS from "../Resaads.PNG";

const Portfolio = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='h-auto w-full md:w-9/12 bg-green-500 md:mr-10 border-4 border-black dark:border-white cursor-pointer'>
                <a href="https://nysccds-cms.com/" target={'_blank'} rel={"noreferrer"}>
                    <img src={NYSC} alt="NYSC CDS Content Management System" className='w-full h-full curosr-pointer '/>
                </a>
            </div>
            <div className='w-full md:w-3/12 mt-10 md:mt-0'>
                <div className='w-full h-auto  border-4 border-black cursor-pointer'>
                    <a href="https://noajempire.com/" target={'_blank'} rel={"noreferrer"}>
                        <img src={NOAJEMPIRE} alt="Noaj Empire" className='w-full h-full curosr-pointer'/>
                    </a>
                </div>
                <div className='w-full h-auto bg-amber-400 mt-10 border-4 border-black cursor-pointer'>
                    <a href="https://resaads.com.ng/" target={'_blank'} rel={"noreferrer"}>
                        <img src={RESAADS} alt="Resaads Consults" className='w-full h-full curosr-pointer'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;