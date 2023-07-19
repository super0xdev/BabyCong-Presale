import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import HowtoBuy from './pages/howtobuy';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-to-buy-babycong" element={<HowtoBuy />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
