import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Courses from './components/Courses';
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
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
