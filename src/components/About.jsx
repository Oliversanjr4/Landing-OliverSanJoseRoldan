import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode } from 'react-icons/fa';

const About = () => {
    // Reveal animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="about" className="relative py-20 px-6 bg-dark-800 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    {/* Left Column */}
                    <motion.div variants={fadeInUp} className="relative">
                        <div className="relative z-10 p-8 glass-panel rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <h3 className="text-8xl font-bold text-white/5 absolute -top-10 -left-10 z-0">
                                SOBRE MÍ
                            </h3>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Creando <span className="text-gradient">experiencias digitales</span>
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                                Soy <span className="text-white font-semibold">Oliver San José Roldán</span>, un futuro ingeniero de software de 20 años.
                                Actualmente estudio Ingeniería del Software en la UPM, combinando rigor académico con exploración creativa.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Mi camino comenzó con la curiosidad por entender cómo funcionan las cosas, evolucionando hacia una pasión por diseñar sistemas complejos y crear interfaces de usuario atractivas.
                            </p>
                        </div>

                        {/* Decorative circle */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-magenta/20 rounded-full blur-3xl" />
                    </motion.div>

                    {/* Right Column */}
                    <motion.div variants={staggerContainer} className="grid grid-cols-1 gap-6">
                        {/* Education Card */}
                        <motion.div variants={fadeInUp} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors cursor-default border-l-4 border-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary text-xl">
                                    <FaGraduationCap />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Formación</h4>
                                    <p className="text-gray-300 mt-2">
                                        <span className="block font-semibold">
                                            Técnico Superior en Desarrollo de Aplicaciones Multiplataforma
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            IES Luis Braille (2025)
                                        </span>
                                    </p>
                                    <p className="text-gray-300 mt-2">
                                        <span className="block font-semibold">
                                            Ingeniería del Software
                                        </span>
                                        <span className="text-sm text-gray-500">
                                            Universidad Politécnica de Madrid (Actualidad)
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Focus Card */}
                        <motion.div variants={fadeInUp} className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors cursor-default border-l-4 border-accent-cyan">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-accent-cyan/20 rounded-lg text-accent-cyan text-xl">
                                    <FaCode />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Enfoque</h4>
                                    <p className="text-gray-400 mt-2">
                                        Desarrollo full-stack con un fuerte énfasis en arquitectura limpia, rendimiento y frontends creativos y atractivos.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
