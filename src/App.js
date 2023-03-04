import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu'; 
import Banner from './components/Banner';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Menu> </Menu>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Works></Works>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
}

export default App;
