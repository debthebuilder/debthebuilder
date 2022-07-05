import Button from "./Button";

const About = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='h-auto w-full md:w-8/12 bg-yellow-400 md:mr-10 border-4 border-t-5 border-black'>
                <div className='pl-10 py-10'>
                    <h2>A <span className='text-white font-semibold'>female</span></h2>
                    <h1 className='text-3xl font-bold'>Front-end <br/>Developer</h1>
                    <span className='mt-3'>Located in <span className='text-white font-semibold'>Enugu</span></span>
                    <ul className='flex w-full flex-wrap flex-row items-center  text-sm tracking-wider font-medium mt-5 list-disc'>
                        <li className='mr-7'>Figma</li>
                        <li className='mr-7'>HTML</li>
                        <li className='mr-7'>CSS</li>
                        <li className='mr-7'>SCSS</li>
                        <li className='mr-7'>BootStrap</li>
                        <li className='mr-7'>Tailwind CSS</li>
                        <li className='mr-7'>JQuery</li>
                        <li className='mr-7'>JavaScript</li>
                        <li className='mr-7'>React Js</li>
                        <li className='mr-7'>NEXT Js</li>
                        <li className='mr-7'>Express Js</li>
                        <li className='mr-7'>MySQL</li>
                        <li className='mr-7'>Node Js</li>
                        <li className='mr-7'>Git</li>
                        <li className='mr-7'>Github</li>
                        <li className='mr-7'>WordPress</li>
                    </ul>
                    <ul className="flex flex-row items-center text-sm tracking-wider justify-start mt-3">
                        <li className='flex flex-col hover:text-white hover:font-semibold group mr-3'><a href='https://github.com/debthebuilder'><i className="fa-brands fa-github"></i>  github</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>

                        <li className='flex flex-col hover:text-white hover:font-semibold group'><a href='https://profile.codersrank.io/user/latenightsnacc'> codersrank</a><span className='hidden border-2 border-white mt-1 group-hover:block'></span></li>
                    </ul>
                </div>
            </div>
            <div className='h-auto w-full md:w-4/12 bg-blue-500 mt-10 md:mt-0 border-4 border-black p-5'>
                <h2 className="text-3xl font-bold">the <span className="text-white tracking-wide">Journey</span> so far...</h2>
                <ul className="text-sm tracking-wider list-disc pl-3">
                    <li className="hover:text-white hover:font-semibold cursor-pointer">November 2021 - June 2022 <i class="fa-solid fa-caret-right mt-2"></i><span className="text-gray-50">Full-stack Developer</span> NYSC CDS Content Management System</li>
                    <li className="hover:text-white hover:font-semibold cursor-pointer">April 2021 - February 2022 <i class="fa-solid fa-caret-right mt-2"></i> <span className="text-gray-50">Front-end Instructor</span> @ Digital Dreams Ltd (NYSC)</li>
                    <li className="hover:text-white hover:font-semibold cursor-pointer">April - May 2021 <i class="fa-solid fa-caret-right mt-2"></i> <span className="text-gray-50">UI/UX Designer</span> @ ASAP Lastmile Fulfilment Ltd (Contract)</li>
                    <li className="hover:text-white hover:font-semibold cursor-pointer">Sept. 2021- March 2022 <i class="fa-solid fa-caret-right mt-2"></i> <span className="text-gray-50">Freelancer</span> (Contract)</li>
                    <li className="hover:text-white hover:font-semibold cursor-pointer">May - August 2020 <i class="fa-solid fa-caret-right mt-2"></i> <span className="text-gray-50">Intern</span> @ Licorne Technologies</li>
                </ul>
                <Button label={"Resume"} icon={true} />
            </div>
        </div>
    )
}

export default About;