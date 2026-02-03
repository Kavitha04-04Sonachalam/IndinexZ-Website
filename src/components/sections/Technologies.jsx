import React from 'react';
import SectionTitle from '../common/SectionTitle';

const data = [
    { category: "Frontend", techs: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { category: "Backend", techs: ["Python", "FastAPI", "Node.js", "Django"] },
    { category: "AI & Data", techs: ["TensorFlow", "PyTorch", "Pandas", "Scikit-learn"] },
    { category: "Cloud & DevOps", techs: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
];

const Technologies = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-6">
                <SectionTitle
                    title="Technologies We Use"
                    subtitle="Building on a foundation of robust, modern, and scalable technologies."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {data.map((item, index) => (
                        <div key={index} className="bg-secondary/40 p-6 rounded-xl border border-white/5 hover:border-neon/30 transition-colors">
                            <h3 className="text-xl font-semibold text-neon mb-4">{item.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {item.techs.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-primary border border-white/10 rounded-full text-sm text-slate-300 hover:text-white hover:border-neon/50 transition-colors cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
