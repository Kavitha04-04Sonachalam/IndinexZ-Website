import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { ShieldCheck, Zap, Users, Rocket } from 'lucide-react';

const reasons = [
    {
        icon: <ShieldCheck size={32} className="text-neon" />,
        title: "Proven Reliability",
        desc: "Delivering robust systems that you can count on, day in and day out."
    },
    {
        icon: <Zap size={32} className="text-neon" />,
        title: "Innovative Approach",
        desc: "Staying ahead of the curve with the latest advancements in AI tech."
    },
    {
        icon: <Users size={32} className="text-neon" />,
        title: "Client-Centric",
        desc: "Your success is our priority. We work closely to understand your unique needs."
    },
    {
        icon: <Rocket size={32} className="text-neon" />,
        title: "Scalable Growth",
        desc: "Solutions designed to grow with your business, from startup to enterprise."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-secondary/30 relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Why Choose IndiNexZ"
                    subtitle="Partner with a team dedicated to excellence and innovation."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="p-6 rounded-xl bg-primary/40 border border-white/5 hover:border-neon/30 hover:bg-white/5 transition-all duration-300">
                            <div className="mb-4">{reason.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                            <p className="text-muted text-sm">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
