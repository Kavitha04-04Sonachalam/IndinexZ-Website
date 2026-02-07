import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    // Strict Phone Input Handler (Only numbers allowed)
    const handlePhoneChange = (e) => {
        const value = e.target.value;
        // Allow only digits
        if (/^\d*$/.test(value)) {
            setFormData(prev => ({ ...prev, phone: value }));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const { name, email, phone, message } = formData;

        // 1. All fields required
        if (!name || !email || !phone || !message) {
            setStatus({ type: 'error', message: 'All fields are required.' });
            return false;
        }

        // 2. Phone Validation (10-12 digits)
        if (phone.length < 10 || phone.length > 12) {
            setStatus({ type: 'error', message: 'Phone number must be between 10 and 12 digits.' });
            return false;
        }

        // 3. Email Validation (Restricted domains: .com, .in, .org)
        // Regex explanation: 
        // ^[^\s@]+       : Start with non-whitespace, non-@ characters
        // @              : Must contain @
        // [^\s@]+\.      : Domain name followed by dot
        // (com|in|org)$  : Must end with strictly com, in, or org
        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|in|org)$/;
        if (!emailRegex.test(email)) {
            setStatus({ type: 'error', message: 'Invalid email. Allowed domains: .com, .in, .org' });
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch("https://formspree.io/f/mwvnkbja", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully! We will contact you soon.' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                const data = await response.json();
                setLoading(false);
                if (Object.hasOwn(data, 'errors')) {
                    setStatus({ type: 'error', message: data["errors"].map(error => error["message"]).join(", ") });
                } else {
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                }
            }
        } catch (error) {
            setLoading(false);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
            console.error('Formspree Error:', error);
        }
    };

    return (
        <div className="pt-24 min-h-screen pb-20 relative">
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle title="Contact Us" subtitle="Get in touch with our team for queries, collaborations, or just to say hello." />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="glass-card p-8 rounded-2xl h-fit">
                        <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary rounded-lg border border-white/10 text-neon">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Address</h4>
                                    <p className="text-muted leading-relaxed">
                                        No. 9, Sai Ram Nagar,<br />
                                        Ayyilur Road, Siruvachur,<br />
                                        Perambalur – 621113,<br />
                                        Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-lg border border-white/10 text-neon">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                                    <a href="tel:+917418387311" className="text-muted hover:text-white transition-colors">+91 74183 87311</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-lg border border-white/10 text-neon">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                                    <a href="mailto:m.visahar@gmail.com" className="text-muted hover:text-white transition-colors">m.visahar@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-8 bg-secondary/30 rounded-2xl border border-white/5">
                        <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-400 mb-2">Phone (10-12 digits) *</label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                                        placeholder="9876543210"
                                        onPaste={(e) => {
                                            // Prevent pasting non-numeric content
                                            const pastedData = e.clipboardData.getData('text');
                                            if (!/^\d*$/.test(pastedData)) {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-primary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon focus:ring-1 focus:ring-neon transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            {status.message && (
                                <div className={`text-sm p-3 rounded-lg ${status.type === 'error' ? 'bg-red-500/10 text-red-500' : 'bg-green-500/10 text-green-500'}`}>
                                    {status.message}
                                </div>
                            )}

                            <Button type="submit" variant="primary" className="w-full flex justify-center items-center gap-2" disabled={loading}>
                                {loading ? 'Sending...' : <>Send Message <Send size={18} /></>}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
