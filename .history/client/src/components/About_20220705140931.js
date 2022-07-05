import Button from "./Button";

const About = () => {
    return(
        <div className='flex flex-col md:flex-row md:items-center mt-10'>
            <div className='md:h-64 w-full md:w-8/12 bg-yellow-400 md:mr-10 border-4 border-t-5 border-black'>
                <div className='pl-10 py-10'>
                    <h2>A <span className='text-white'>female</span></h2>
                    <h1 className='text-3xl font-bold'>Front-end <br/>Developer</h1>
                    <span className='mt-3'>Located in <span className='text-white'>Enugu</span></span>
                    <ul className='flex w-full flex-wrap flex-row items-center font-semibold text-sm tracking-wide mt-5'>
                    <li className='mr-2'>Figma</li>
                    <li className='mr-2'>HTML</li>
                    <li className='mr-2'>CSS</li>
                    <li className='mr-2'>SCSS</li>
                    <li className='mr-2'>BootStrap</li>
                    <li className='mr-2'>Tailwind CSS</li>
                    <li className='mr-2'>JQuery</li>
                    <li className='mr-2'>JavaScript</li>
                    <li className='mr-2'>React Js</li>
                    <li className='mr-2'>NEXT Js</li>
                    <li className='mr-2'>Express Js</li>
                    <li className='mr-2'>MySQL</li>
                    <li className='mr-2'>Node Js</li>
                    <li className='mr-2'>Git</li>
                    <li className='mr-2'>Github</li>
                    </ul>
                </div>
            </div>
            <div className='h-64 w-full md:w-4/12 bg-blue-500 mt-10 md:mt-0 border-4 border-black px-5'>
                <h2 className="text-3xl font-bold p-5">the <span className="text-white">Journey</span> so far...</h2>
                <Button label={"Resume"} />
            </div>
        </div>
    )
}

export default About;