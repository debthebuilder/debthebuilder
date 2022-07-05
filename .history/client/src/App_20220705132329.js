import './App.css';
import About from './components/About';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <Navbar />
      <div className='border-4 border-r-20 border-black mt-28 bg-purple-500 z-10'>
        <div className='py-10 pl-10'>
            <h2><span className='text-white font-semibold'>Hello, </span>I am</h2>
            <h1 className='text-3xl font-bold'>Deb the <br/><span className='text-white'>Builder</span></h1>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-10'>
          <About />
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-10'>
          <div className='h-96 w-full md:w-9/12 bg-green-500 md:mr-10 border-4 border-t-5 border-black'></div>
          <div className='w-full md:w-3/12  border mt-10 md:mt-0 border-l-8'>
            <div className='w-full h-64 bg-red-500'></div>
            <div className='w-full h-56 bg-red-500 mt-10'></div>
          </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-10'>
        <div className='w-1/4 bg-purple-500 h-56'></div>
        <div className='w-2/4 bg-orange-500 h-56  mx-10'></div>
        <div className='w-1/4 bg-purple-500 h-56'></div>
      </div>
      <div className='border-4 border-black my-10 bg-blue-500 py-10'>
        <div className='flex flex-row items-center'>
            <div className='pl-10 w-2/6'>
              <h2>Let's <span className='text-white font-semibold'>Build</span></h2>
              <h1 className='text-3xl font-bold'>Just say<br/>Hello!</h1>
              <span className='mt-3'>Mush<span className='text-white font-semibold'>mushi</span></span>
            </div>
            <ul className='px-10 w-4/6 flex flex-row items-center justify-between'>
              <li>email</li>
              <li>linkedin</li>
              <li>github</li>
              <li>telegram</li>
            </ul>
          </div>
          
      </div>
    </div>
  );
}

export default App;
