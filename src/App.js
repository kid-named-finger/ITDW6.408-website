import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Invoice from './components/Invoice';
import AdvancedScript from './components/AdvancedScript';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/advancedScript" element={<AdvancedScript/>} />
          <Route path="/faq" element={<FAQ />}/>
          <Route path="/invoice" element={<Invoice />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
