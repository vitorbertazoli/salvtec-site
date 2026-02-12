import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Carreiras from './components/Carreiras';
import Home from './components/Home';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreiras" element={<Carreiras />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  )
}

export default App
