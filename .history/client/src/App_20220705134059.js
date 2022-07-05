import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <Navbar />
      <Banner />
      <div className='flex flex-col md:flex-row md:items-center mt-10'>
          <About />
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-10'>
          <div className='h-96 w-full md:w-9/12 bg-green-500 md:mr-10 border-4 border-black'></div>
          <div className='w-full md:w-3/12 mt-10 md:mt-0'>
            <div className='w-full h-64 bg-red-500 border-4 border-black'></div>
            <div className='w-full h-56 bg-red-500 mt-10 border-4 border-black'></div>
          </div>
      </div>
      <div className='flex flex-col md:flex-row md:items-center mt-10'>
        <div className='w-1/4 bg-purple-500 h-56'></div>
        <div className='w-2/4 bg-orange-500 h-56  mx-10'></div>
        <div className='w-1/4 bg-purple-500 h-56'></div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
