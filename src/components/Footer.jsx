import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-black text-center text-gray-600 text-sm border-t border-white/5">
            <p>&copy; {new Date().getFullYear()} Oliver San José Roldán.</p>
        </footer>
    );
};

export default Footer;
