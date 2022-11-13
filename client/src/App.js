import { Route, Routes } from 'react-router-dom';
import Trips from './Components/Trips/Trips';
import './App.css';
import AdminPage from './Components/Admin/EditTrip/EditTrip';
import Navbar from './Components/Nav/Navbar';
import SingleTrip from './Components/SingleTrip/SingleTrip';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/:id" element={<SingleTrip />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<div>error</div>} />
      </Routes>
    </>
  );
}

export default App;
