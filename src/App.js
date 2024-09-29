import './App.css';
import Navbar from './components/Navbar';
import Content from "./components/Content";
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path=":productID" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
