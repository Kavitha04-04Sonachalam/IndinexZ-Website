import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy loading for better performance
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));

const AppRoutes = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-primary text-neon">Loading...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback route */}
                <Route path="*" element={<Home />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
