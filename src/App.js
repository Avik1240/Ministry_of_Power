import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Detail from './Components/Detail';
import Rdss from './Components/Rdss';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard category="Dashboard->RDSS" />} />
            <Route path="/rdss" element={<Rdss category="RDSS" />} />
            <Route path="/detail" element={<Detail category="Detail_Dashboard" />} />
            <Route path="/" element={<Home category="home" />} />
          </Routes>
          <Footer />
        </div>
      </Router >
    </>
  );
}

export default App;
