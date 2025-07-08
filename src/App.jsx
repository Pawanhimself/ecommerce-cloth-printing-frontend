import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Mainlayout from './layouts/Mainlayout.jsx';
import { HomePage } from './pages/HomePage/HomePage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />

        {/* Routes with layout (NavBar + Footer) */}
        <Route element={<Mainlayout />}>
          <Route path='/home' element={<HomePage/>} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;