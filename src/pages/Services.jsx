import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import { Brain, Database, Cloud, Cpu, Activity, TrendingUp, Lock } from 'lucide-react';

const serviceDetails = [
    {
        icon: <Brain size={40} className="text-neon" />,
        title: "AI Solutions",
        details: "Custom AI models, NLP, and Computer Vision.",
        useCases: ["Customer Support Chatbots", "Image Recognition Security", "Document Processing"]
    },
    {
        icon: <Cpu size={40} className="text-neon" />,
        title: "Machine Learning",
        details: "Predictive modeling and deep learning algorithms.",
        useCases: ["Demand Forecasting", "Fraud Detection", "Personalized Recommendations"]
    },
    {
        icon: <Database size={40} className="text-neon" />,
        title: "Data Analytics",
        details: "Big data processing and visualization dashboards.",
        useCases: ["Business Intelligence Reports", "Market Trend Analysis", "Operational Efficiency Tracking"]
    },
    {
        icon: <Cloud size={40} className="text-neon" />,
        title: "Cloud & Automation",
        details: "Cloud migration, DevOps, and process automation.",
        useCases: ["CI/CD Pipeline Setup", "Serverless Architecture", "Automated Data Backups"]
    }
];

const ServicesPage = () => {
    return (
        <div className="pt-24 min-h-screen pb-20">
            <div className="container mx-auto px-6">
                <SectionTitle title="Our Services" subtitle="Cutting-edge solutions engineered for modern challenges." />

                <div className="grid grid-cols-1 gap-12">
                    {serviceDetails.map((service, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 bg-secondary/30 p-8 rounded-2xl border border-white/5 hover:border-neon/30 transition-all duration-300">
                            <div className="flex-shrink-0">
                                <div className="p-4 bg-primary rounded-xl inline-block border border-white/10">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-muted mb-6 text-lg">{service.details}</p>

                                <div>
                                    <h4 className="text-sm font-semibold text-neon uppercase tracking-wider mb-3">Real-world Application</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {service.useCases.map((useCase, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-neon flex-shrink-0" />
                                                {useCase}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
