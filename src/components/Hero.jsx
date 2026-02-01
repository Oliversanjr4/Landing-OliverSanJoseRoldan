import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial, ContactShadows, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const GeometricShape = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} {...props} scale={1.8}>
                <icosahedronGeometry args={[1, 15]} />
                <MeshDistortMaterial
                    color="#3b82f6"
                    envMapIntensity={0.8}
                    clearcoat={0.9}
                    clearcoatRoughness={0.1}
                    metalness={0.9}
                    roughness={0.2}
                    distort={0.4}
                    speed={2}
                />
            </mesh>
        </Float>
    );
};

const ExperienceShape = () => {
    return (
        <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5} position={[2, -1, -2]}>
            <mesh scale={0.8}>
                <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    emissive="#5b21b6"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    );
};

const Hero = () => {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-900 border-b border-white/5">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/20 to-transparent opacity-50 z-0 pointer-events-none" />

            {/* 3D Canvas */}
            <div className="absolute inset-0 z-0 opacity-80 lg:opacity-100">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -5]} color="#d946ef" intensity={1} />
                    <GeometricShape position={[2, 0, 0]} />
                    <ExperienceShape />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
                <div className="flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">
                            Portfolio 2026
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-['Outfit'] leading-tight text-white mb-6">
                            Oliver
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-pulse-glow">
                                San José Roldán
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-8 leading-relaxed">
                            Desarrollador de software creativo, especializado en crear experiencias digitales premium.
                            Fusionando <span className="text-white font-semibold">dominio técnico</span> con
                            <span className="text-white font-semibold"> visión artística</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="flex gap-4"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-3 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Ver proyectos <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-accent-magenta opacity-0 group-hover:opacity-20 transition-opacity" />
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                        >
                            Contactar
                        </a>
                    </motion.div>
                </div>

                {/* Right side intentionally empty on desktop */}
                <div className="hidden lg:block"></div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Desplázate
                </span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
