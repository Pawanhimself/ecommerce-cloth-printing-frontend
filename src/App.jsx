import {BrowserRouter, Route, Routes} from 'react-router-dom';
<<<<<<< HEAD
import Login from './components/Login/index.jsx';
import Signup from './components/Signup/index.jsx';
import Product from './pages/Product/Product.jsx'
=======
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Mainlayout from './layouts/Mainlayout.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';
>>>>>>> 17aa48d64c46c7bc063163165c5f664ab2287970

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
<<<<<<< HEAD
        <Route path='/product' element={<Product/>} />
=======

        {/* Routes with layout (NavBar + Footer) */}
        <Route element={<Mainlayout />}>
          <Route path='/home' element={<HomePage/>} />
        </Route>

>>>>>>> 17aa48d64c46c7bc063163165c5f664ab2287970
      </Routes>
    </BrowserRouter>
  );
}

export default App;