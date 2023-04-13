import { Route, Routes } from 'react-router-dom';

import Socials from './components/Socials';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        {/* <Route path='/contact' element={<Contact />} /> */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Socials />
      <p className='footer'>©2023 <span>Greg Mrowczynski</span></p>
    </div>
  );
}

export default App;
