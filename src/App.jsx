import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Service from './Components/pages/Service';
import Contact from './Components/pages/Contact';
function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    )
}
export default App;
