import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Mainlayout from './layouts/Mainlayout.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import Product from './pages/Product/Product.jsx'
import ProductCard from './pages/Product/ProductCard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />

        {/* Routes with layout (NavBar + Footer) */}
        <Route element={<Mainlayout />}>
          <Route path='/home' element={<HomePage/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:category/:index" element={<ProductCard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;