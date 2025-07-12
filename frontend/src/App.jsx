import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ItemListing from './pages/ItemListing';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import FacilityUnavailable from './components/FacilityUnavailable'
import ItemListPage from './pages/items_page'
import Donate from './pages/Donate'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/item" element={<ItemListing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/sorry" element={<FacilityUnavailable />} />
        <Route path="/swapping" element={<ItemListPage />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;