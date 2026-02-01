import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null); // null | 'submitting' | 'success' | 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formEndpoint = 'https://formspree.io/f/mqebobbg';

        try {
            const response = await fetch(formEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ email: '', subject: '', message: '' });
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 relative bg-dark-900">
            <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-radial from-primary-music/10 to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-['Outfit'] mb-6">
                        Let's start a <br />
                        <span className="text-gradient">Conversation</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 max-w-md">
                        Have a project in mind or want to discuss the latest tech? I'm always open to new opportunities and challenges.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-5">
                            <div className="p-4 rounded-full bg-white/5 text-primary text-xl shadow-inner shadow-white/5">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Email</h4>
                                <a href="mailto:oliversanjr@gmail.com" className="text-gray-400 hover:text-white transition-colors">oliversanjr@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="p-4 rounded-full bg-white/5 text-primary text-xl shadow-inner shadow-white/5">
                                <FaPhone />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Phone</h4>
                                <a href="tel:+34689519776" className="text-gray-400 hover:text-white transition-colors">+34 689 519 776</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <div className="p-4 rounded-full bg-white/5 text-primary text-xl shadow-inner shadow-white/5">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold">Location</h4>
                                <span className="text-gray-400">Madrid, Spain</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl border-t border-white/10"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600"
                                placeholder="Project Idea / Greeting"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-600 resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting' || status === 'success'}
                            className="w-full py-4 bg-gradient-to-r from-primary to-primary-glow rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            {status === 'submitting' ? (
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : status === 'success' ? (
                                <>Sent Successfully <FaCheckCircle /></>
                            ) : (
                                <>Send Message <FaPaperPlane /></>
                            )}
                        </button>

                        {status === 'error' && <p className="text-red-500 text-center mt-2">Something went wrong. Please try again.</p>}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
