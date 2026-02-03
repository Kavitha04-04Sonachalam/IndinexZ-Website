import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">
            {/* Background - Deep Navy to Dark Blue Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0E1B2E] to-[#0B1220]">
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

                {/* Glow Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon/10 rounded-full blur-[120px] pointer-events-none opacity-50" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                    className="text-[40px] md:text-[60px] leading-[1.1] font-bold text-white mb-6 tracking-tight max-w-5xl"
                >
                    Innovating the <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon via-white to-soft-neon drop-shadow-[0_0_10px_rgba(77,231,255,0.3)]">
                        Next AI Frontier
                    </span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-slate-400 text-[18px] font-normal max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We engineer intelligent solutions that bridge the gap between imagination and reality.
                    Scalable AI, machine learning, and cloud technologies designed for the future.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-5 w-full justify-center"
                >
                    <Link to="/contact">
                        <Button
                            variant="primary"
                            className="w-full sm:w-auto px-8 py-3 text-[15px] font-medium !rounded-full shadow-[0_0_20px_rgba(77,231,255,0.3)] hover:shadow-[0_0_30px_rgba(77,231,255,0.5)]"
                        >
                            Start Your Journey
                        </Button>
                    </Link>
                    <Link to="/services">
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto px-8 py-3 text-[15px] font-medium !rounded-full border-white/20 text-white hover:bg-white/5 hover:border-neon/50"
                        >
                            Explore Solutions
                        </Button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator (Optional Polish) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
                >
                    <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center p-2">
                        <div className="w-1.5 h-1.5 bg-neon rounded-full animate-bounce"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
