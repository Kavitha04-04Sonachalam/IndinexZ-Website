import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-light font-sans selection:bg-neon selection:text-primary">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
