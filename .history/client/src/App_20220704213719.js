import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <div className='border-4 border-black bg-purple-500'>
        <Navbar />
        <div className='py-10'>
          <div className='pl-10 pt-10'>
            <h2>Hello, I am</h2>
            <h1 className='text-3xl font-bold'>Deb the <br/>builder</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
