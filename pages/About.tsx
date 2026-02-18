import React from 'react';
import { RevealCard } from '../components/RevealCard';
import { Marquee } from '../components/Marquee';

export const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-neo-white">
            {/* Hero */}
            <div className="bg-neo-black text-white py-20 px-4 border-b-8 border-neo-yellow">
                <div className="max-w-4xl mx-auto">
                    <RevealCard>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-2 bg-neo-yellow"></div>
                            <span className="font-mono text-neo-yellow uppercase">Profile_V1.0</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
                            Operator <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-yellow to-neo-green" style={{ WebkitTextStroke: '2px white' }}>Manual.</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium font-mono text-gray-300 max-w-2xl">
                            Jai Samyukth is a Systems Engineer focused on the intersection of human process and digital infrastructure.
                        </p>
                    </RevealCard>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Biography */}
                    <div className="space-y-8">
                        <RevealCard className="bg-white border-4 border-black p-8 shadow-neo-lg">
                            <h2 className="text-3xl font-black uppercase mb-6 border-b-4 border-black pb-2">Background</h2>
                            <div className="space-y-4 font-medium text-lg leading-relaxed">
                                <p>
                                    I don't just write code; I design the machinery that businesses run on. My background isn't focused on chasing the latest framework, but on solving recurring structural problems in distributed teams.
                                </p>
                                <p>
                                    Starting in [Year], I realized that most software failure isn't technical—it's translational. The gap between "what we need" and "what we built" is where I operate.
                                </p>
                                <p>
                                    Currently building high-fidelity systems that prioritize data integrity and operational stability over flash.
                                </p>
                            </div>
                        </RevealCard>

                        {/* Skills Grid */}
                        <RevealCard delay={0.2}>
                            <h2 className="text-3xl font-black uppercase mb-6 flex items-center gap-2">
                                <div className="w-4 h-4 bg-neo-blue rounded-full"></div>
                                Technical Arsenal
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { cat: "Core", items: ["TypeScript", "Python", "Rust", "Go"] },
                                    { cat: "Frontend", items: ["React", "Next.js", "Tailwind", "Framer Motion"] },
                                    { cat: "Backend", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis"] },
                                    { cat: "Infra", items: ["Docker", "AWS", "Terraform", "CI/CD"] }
                                ].map((skill, i) => (
                                    <div key={i} className="border-2 border-black bg-neo-white p-4">
                                        <h4 className="font-mono font-bold uppercase mb-2 bg-black text-white px-2 inline-block text-sm">{skill.cat}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map(item => (
                                                <span key={item} className="text-sm font-bold border border-black px-2 py-1 bg-white hover:bg-neo-yellow transition-colors cursor-default">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealCard>
                    </div>

                    {/* Experience Timeline */}
                    <div>
                        <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-black pb-2">Operations Log</h2>
                        <div className="border-l-4 border-black ml-4 space-y-12 pl-8 relative">
                            {[
                                {
                                    role: "Senior Systems Engineer",
                                    company: "Tech Corp Inc.",
                                    period: "2023 - Present",
                                    desc: "Leading the architectural overhaul of legacy payment systems. Implemented event-driven architecture reducing latency by 40%."
                                },
                                {
                                    role: "Full Stack Developer",
                                    company: "Digital Solutions Ltd.",
                                    period: "2021 - 2023",
                                    desc: "Built and deployed enterprise HRMS solutions for mid-sized logistics firms. Focused on offline-first capabilities."
                                },
                                {
                                    role: "Freelance Architect",
                                    company: "Self-Employed",
                                    period: "2019 - 2021",
                                    desc: "Consulted for early-stage startups on technical feasibility and MVP scoping. Delivered 12+ production projects."
                                }
                            ].map((job, idx) => (
                                <RevealCard key={idx} delay={idx * 0.1} className="relative">
                                    <div className="absolute -left-[42px] top-0 w-6 h-6 bg-neo-pink border-4 border-black rounded-full z-10"></div>
                                    <div className="bg-neo-white border-4 border-black p-6 shadow-neo hover:shadow-neo-hover transition-all">
                                        <span className="font-mono text-sm font-bold bg-black text-white px-2 py-1 mb-2 inline-block">
                                            {job.period}
                                        </span>
                                        <h3 className="text-2xl font-black uppercase leading-none mb-1">{job.role}</h3>
                                        <p className="font-bold text-gray-600 mb-4">@ {job.company}</p>
                                        <p className="font-medium text-sm">{job.desc}</p>
                                    </div>
                                </RevealCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Marquee text="AVAILABLE FOR CONTRACTS • SYSTEMS DESIGN • TECHNICAL AUDITS •" bgColor="bg-neo-blue" textColor="text-white" />
        </div>
    );
};
