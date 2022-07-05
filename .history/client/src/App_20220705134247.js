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
      <About />
      
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
