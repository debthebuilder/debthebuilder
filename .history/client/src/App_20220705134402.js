import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Footer from './components/Footer';
import { Navbar } from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className='bg-white w-full p-5'>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      
      <Footer />
    </div>
  );
}

export default App;
