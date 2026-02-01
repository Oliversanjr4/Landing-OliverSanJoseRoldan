import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaPython, FaDatabase, FaAndroid } from 'react-icons/fa';
import { SiKotlin, SiMysql, SiMongodb, SiN8N, SiTailwindcss, SiVite, SiNextdotjs } from 'react-icons/si';

const TechStack = () => {
    const skills = [
        { name: 'Java', icon: <FaJava />, color: '#f89820', category: 'Backend' },
        { name: 'Kotlin', icon: <SiKotlin />, color: '#7f52ff', category: 'Mobile' },
        { name: 'React', icon: <FaReact />, color: '#61dafb', category: 'Frontend' },
        { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e', category: 'Lang' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38bdf8', category: 'Frontend' },
        { name: 'SQL', icon: <SiMysql />, color: '#00758f', category: 'Data' },
        { name: 'NoSQL', icon: <SiMongodb />, color: '#47a248', category: 'Data' },
        { name: 'Python', icon: <FaPython />, color: '#3776ab', category: 'Lang' },
        { name: 'n8n', icon: <SiN8N />, color: '#ff6c37', category: 'Automation' },
        { name: 'Android', icon: <FaAndroid />, color: '#3ddc84', category: 'Mobile' },
    ];

    return (
        <section id="tech" className="py-24 bg-dark-900 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-4">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-music to-accent-cyan">Arsenal</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        A curated set of tools and languages I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="text-4xl transition-transform duration-300 group-hover:scale-110" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <span className="font-medium text-gray-300 group-hover:text-white">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
