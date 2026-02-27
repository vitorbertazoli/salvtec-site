import { useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { setupGlobalLinkTracking, trackPageView } from './analytics/tracking';
import Carreiras from './components/Carreiras';
import Home from './components/Home';
import WhatsAppButton from './components/WhatsAppButton';

function AnalyticsManager() {
  const location = useLocation();

  useEffect(() => {
    const cleanup = setupGlobalLinkTracking();
    return cleanup;
  }, []);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`;
    trackPageView(pagePath, document.title);
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <Router>
      <AnalyticsManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carreiras" element={<Carreiras />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  )
}

export default App
