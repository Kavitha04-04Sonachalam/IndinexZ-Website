import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../common/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0B1220]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 group z-20">
                    <img
                        src="/logo-icon.jpg"
                        alt="IndiNexZ Tech"
                        className="h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(77,231,255,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(77,231,255,0.9)]"
                    />
                    <span className="text-2xl font-bold tracking-tight text-white group-hover:text-neon transition-colors font-sans">
                        IndiNexZ Tech
                    </span>
                </Link>

                {/* Desktop Menu - Centered */}
                <div className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative text-base font-medium transition-all duration-300 ${isActive(link.path) ? 'text-white' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                            {isActive(link.path) && (
                                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-neon rounded-full shadow-[0_0_8px_rgba(77,231,255,0.8)]"></span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Right Side - CTA Button */}
                <div className="hidden md:flex items-center z-20">
                    <Link to="/contact">
                        <Button
                            variant="primary"
                            className="!px-6 !py-2.5 !rounded-full !text-sm font-bold shadow-[0_0_15px_rgba(77,231,255,0.3)] hover:shadow-[0_0_25px_rgba(77,231,255,0.5)]"
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none z-20"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} className="text-neon" /> : <Menu size={28} className="text-neon" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden fixed inset-0 bg-[#0B1220] z-10 flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-2xl font-bold ${isActive(link.path) ? 'text-neon' : 'text-slate-300'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        <Button variant="primary" className="!rounded-full px-8">Contact Us</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
