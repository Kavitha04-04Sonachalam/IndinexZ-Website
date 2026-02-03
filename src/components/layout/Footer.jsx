import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="IndiNexZ Tech" className="w-8 h-8 object-contain" />
                            <span className="text-xl font-bold text-white">IndiNexZ Tech</span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Innovating the Next AI Frontier. We build intelligent solutions for a smarter future.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-muted hover:text-neon transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-muted hover:text-neon transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-muted hover:text-neon transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-muted hover:text-neon text-sm transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-muted hover:text-neon text-sm transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="text-muted hover:text-neon text-sm transition-colors">Services</Link></li>
                            <li><Link to="/contact" className="text-muted hover:text-neon text-sm transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Our Expertise</h3>
                        <ul className="space-y-3">
                            <li className="text-muted text-sm">AI Solutions</li>
                            <li className="text-muted text-sm">Machine Learning</li>
                            <li className="text-muted text-sm">Data Analytics</li>
                            <li className="text-muted text-sm">Cloud & Automation</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted text-sm">
                                <MapPin size={18} className="text-neon flex-shrink-0 mt-1" />
                                <span>No. 9, Sai Ram Nagar,<br />Ayyilur Road, Siruvachur,<br />Perambalur – 621113,<br />Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted text-sm">
                                <Phone size={18} className="text-neon flex-shrink-0" />
                                <a href="tel:+917418387311" className="hover:text-white transition-colors">+91 74183 87311</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted text-sm">
                                <Mail size={18} className="text-neon flex-shrink-0" />
                                <a href="mailto:m.visahar@gmail.com" className="hover:text-white transition-colors">m.visahar@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} IndiNexZ Tech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
