import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <div className='border-4 border-right-8 border-black mt-10 bg-purple-500 -skew-3 transform-gpu'>
        <div className='py-10 pl-10'>
            <h2>Hello, I am</h2>
            <h1 className='text-3xl font-bold'>Deb the <br/>Builder</h1>
        </div>
      </div>
      <div className='flex flex-row items-center'>
          <div></div>
          <div className='h-'></div>
      </div>
      <div id="trapezium" className=''></div>
 
      <div className='border-4 border-black mt-10 bg-yellow-500 -skew-y-3	'>
        <div className='py-10 '>
          <div className='pl-10 '>
            <h2>A <span className='text-white'>female</span></h2>
            <h1 className='text-3xl font-bold'>Front-end <br/>Developer</h1>
            <span className='mt-3'>Located in <span className='text-white'>Enugu</span></span>
          </div>
        </div>
      </div>
      <div className='border-4 border-black mt-10 bg-blue-500 -skew-3 '>
        <div className='py-10 '>
          <div className='pl-10 '>
            <h2>A <span className='text-white'>female</span></h2>
            <h1 className='text-3xl font-bold'>Front-end <br/>Developer</h1>
            <span className='mt-3'>Located in <span className='text-white'>Enugu</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
