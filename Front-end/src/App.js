import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import face_cleanser_banner from './Components/Assets/face_cleanser_banner.jpg';
import serum_banner from './Components/Assets/serum_banner.jpg';
import toner_banner from './Components/Assets/toner_banner.jpg';
import moisturizer_banner from './Components/Assets/moisturizer_banner.jpg';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path='/face-cleansers' element={<ShopCategory banner={face_cleanser_banner} category="FaceCleansers" />} />
          <Route path='/serums' element={<ShopCategory banner={serum_banner} category="Serums" />} />
          <Route path='/toners' element={<ShopCategory banner={toner_banner} category="Toners" />} />
          <Route path='/moisturizers' element={<ShopCategory banner={moisturizer_banner} category="Moisturizers" />} />
          <Route path="/product" element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
