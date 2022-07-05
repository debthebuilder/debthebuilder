import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <div className='border-2'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
