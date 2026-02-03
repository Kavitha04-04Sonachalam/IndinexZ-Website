import React from 'react';
import { Brain, Database, Cloud, Cpu } from 'lucide-react';
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';

const services = [
    {
        icon: <Brain size={40} className="text-neon" />,
        title: "AI Solutions",
        description: "Custom artificial intelligence models tailored to solve complex business problems."
    },
    {
        icon: <Cpu size={40} className="text-neon" />,
        title: "Machine Learning",
        description: "Predictive analytics and automated decision-making systems using advanced algorithms."
    },
    {
        icon: <Database size={40} className="text-neon" />,
        title: "Data Analytics",
        description: "Transforming raw data into actionable insights to drive strategic growth."
    },
    {
        icon: <Cloud size={40} className="text-neon" />,
        title: "Cloud & Automation",
        description: "Scalable cloud infrastructures and automated workflows for operational efficiency."
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Our Expertise"
                    subtitle="Comprehensive technology solutions designed to propel your business forward."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="h-full flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="mb-6 p-4 rounded-full bg-primary/50 group-hover:bg-neon/20 transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon transition-colors">{service.title}</h3>
                            <p className="text-muted leading-relaxed">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
