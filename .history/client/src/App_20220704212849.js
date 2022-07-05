import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <div className='border-4 border-black bg-purple-500'>
        <Navbar />
        <div className='py-10 flex '>
          <div></div>
          <div>
            <h1 className='text-3xl font-bold'></h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
