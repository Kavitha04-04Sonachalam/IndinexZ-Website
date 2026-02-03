import React from 'react';
import SectionTitle from '../common/SectionTitle';

const About = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-gradient">IndiNexZ Tech</span>
                        </h2>
                        <p className="text-muted text-lg mb-6 leading-relaxed">
                            We are a team of visionaries and engineers dedicated to pushing the boundaries of what's possible with Artificial Intelligence.
                            Our mission is to empower businesses with intelligent solutions that drive efficiency, growth, and innovation.
                        </p>
                        <p className="text-muted text-lg mb-6 leading-relaxed">
                            From machine learning algorithms to complex data analytics, we turn abstract data into concrete results.
                        </p>
                    </div>

                    {/* Visual/Image placeholder */}
                    <div className="md:w-1/2 relative">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary border border-white/5 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                            <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-neon text-6xl font-bold opacity-20">AI</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-neon/10 rounded-full blur-[50px] pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
