import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaRocket, FaLightbulb } from 'react-icons/fa';

const Experience = () => {
    const projects = [
        {
            title: "EvolveHub",
            role: "Digital Transformation Project",
            desc: "A comprehensive project focused on the digitization and digital transformation of SMEs (Small and Medium-sized Enterprises). Aimed at modernizing business processes through technology.",
            tech: ["React", "Node.js", "System Design"],
            link: "https://evolvehub.es",
            color: "from-blue-600 to-cyan-500",
            icon: <FaRocket />,
            status: "In Process"
        },
        {
            title: "Desafío Emprendedor Innovador",
            role: "EOI Course",
            desc: "Specialized training by the Escuela de Organización Industrial (EOI) focused on innovative entrepreneurship in Madrid. Developing skills to turn technical solutions into viable business models.",
            tech: ["Entrepreneurship", "Innovation", "Business Model"],
            link: "#",
            color: "from-purple-600 to-pink-500",
            icon: <FaLightbulb />,
            status: "Completed"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-dark-800 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
                        Experience & <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative glass-panel rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            {/* Gradient Overlay on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="p-8 relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} shadow-lg shadow-purple-900/20`}>
                                        <span className="text-2xl text-white">{project.icon}</span>
                                    </div>
                                    {project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors text-white/50 hover:text-white">
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">{project.role}</p>
                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-gray-300">
                                            {t}
                                        </span>
                                    ))}
                                    <span className="ml-auto flex items-center gap-1 text-xs text-green-400 border border-green-500/20 px-2 py-1 rounded-md bg-green-500/10">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
