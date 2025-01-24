import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import LogIn from './components/login';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import ToolBox from './components/toolbox';

function App() {
  return (
    <BrowserRouter>
      <div style={appContainer}>
        <Sidebar />
        <div style={mainContent}>
          <nav style={navStyle}>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/login">LogIn</Link></li>
              <li><Link to="/toolbox">ToolBox</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/toolbox" element={<ToolBox />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

const appContainer = {
  display: 'flex',
  flexDirection: 'row', 
  height: '100vh',
};

const mainContent = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
};

const navStyle = {
  marginBottom: '20px',
};

export default App;