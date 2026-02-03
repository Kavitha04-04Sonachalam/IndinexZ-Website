import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
                    Let's build the future together. Contact us today for a free consultation.
                </p>
                <Link to="/contact">
                    <Button variant="primary" className="text-lg px-8 py-4">
                        Get in Touch
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default CTA;
