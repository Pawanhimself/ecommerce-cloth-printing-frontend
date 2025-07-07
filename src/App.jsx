import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login/index.jsx';
import Signup from './components/Signup/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;