import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
