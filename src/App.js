import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Device from './components/device/Device';
import Data from './components/data/Data';
import Insights from './components/insights/Insights';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Contact from './components/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <main>
      <Navbar />
      {isHomePage && (
        <header className="header-bg">
          {/* <Navbar /> */}
          <Header />
        </header>
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<><Header /><Main /></>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/device" element={<Device />} />
        <Route path="/data" element={<Data />} />
        <Route path="/insights" element={<Insights/>} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
