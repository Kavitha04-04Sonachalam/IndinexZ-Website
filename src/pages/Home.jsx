import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Technologies from '../components/sections/Technologies';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CTA from '../components/sections/CTA';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <About />
            <Services />
            <Technologies />
            <WhyChooseUs />
            <CTA />
        </div>
    );
};

export default Home;
