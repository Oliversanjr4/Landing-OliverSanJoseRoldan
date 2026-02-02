import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import clsx from 'clsx';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre mí', href: '#about' },
        { name: 'Stack', href: '#tech' },
        { name: 'Proyectos', href: '#experience' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "bg-dark-900/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold font-['Outfit'] tracking-tighter hover:text-primary transition-colors">
                    OLIVER<span className="text-primary">.SJR</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}

                    <div className="h-4 w-px bg-white/10 mx-2"></div>

                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/oliver-san-josé-roldán-58a08a29a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">
                            <FaLinkedin />
                        </a>
                        <a href="mailto:oliversanjr@gmail.com" className="text-gray-400 hover:text-white transition-colors text-lg">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button (Simple implementation) */}
                <div className="md:hidden text-white sm:visible">
                    {/* Add Mobile Menu logic if needed, keeping simple for now to focus on experience */}
                    <span className="text-sm text-gray-400">Menu</span>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
