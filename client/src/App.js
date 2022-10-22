import { Route, Routes } from 'react-router-dom';
import Trips from './Components/Trips/Trips';
import './App.css';

function App() {
  return (
    // <>
    //   {(window.location.pathname === '/' ||
    //     window.location.pathname === '/characters') && <Navbar />}
    <Routes>
      <Route path="/" element={<div>main</div>} />
      <Route path="/about" element={<div>about</div>} />
      <Route path="/trips" element={<Trips />} />
      <Route path="/trips/:id" element={<div>trip</div>} />
      <Route path="*" element={<div>error</div>} />
    </Routes>
    // </>
  );
}

export default App;
