import React from 'react';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage = () => {
    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-6">
                <SectionTitle title="About IndiNexZ Tech" subtitle="Driving the future of technology with passion and precision." />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="space-y-6 text-muted leading-relaxed text-lg">
                        <p>
                            IndiNexZ Tech is at the forefront of the artificial intelligence revolution.
                            Founded with the belief that technology should serve humanity, we strive to create
                            algorithms and systems that solve real-world problems creatively and efficiently.
                        </p>
                        <p>
                            Our team comprises data scientists, engineers, and strategists who are deeply
                            passionate about the potential of AI to transform industries.
                        </p>
                    </div>
                    <div className="p-8 glass-card rounded-2xl border border-neon/20 bg-secondary/50">
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-muted">
                            To be the global catalyst for AI adoption, making advanced intelligence accessible,
                            ethical, and beneficial for every enterprise.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-secondary rounded-xl border border-white/5 hover:border-neon/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-neon mb-3">Our Mission</h3>
                        <p className="text-muted text-sm">
                            To engineer reliable, scalable, and intuitive AI solutions that empower businesses
                            to optimize operations and unlock new revenue streams.
                        </p>
                    </div>
                    <div className="p-6 bg-secondary rounded-xl border border-white/5 hover:border-neon/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-neon mb-3">Innovation</h3>
                        <p className="text-muted text-sm">
                            We constantly challenge the status quo, exploring new frontiers in machine learning
                            and data science to stay ahead of the curve.
                        </p>
                    </div>
                    <div className="p-6 bg-secondary rounded-xl border border-white/5 hover:border-neon/50 transition-all duration-300">
                        <h3 className="text-xl font-bold text-neon mb-3">Integrity</h3>
                        <p className="text-muted text-sm">
                            We believe in ethical AI. Transparency, security, and fairness are the cornerstones
                            of every solution we build.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
