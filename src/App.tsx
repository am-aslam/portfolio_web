import { Navbar } from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contacts from './Pages/Contacts';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;