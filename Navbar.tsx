"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Activity } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Solution", href: "#solution" },
    { name: "Technology", href: "#technology" },
    { name: "Impact", href: "#impact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-dark-bg/80 backdrop-blur-md border-b border-border-gray py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-neon-blue group-hover:text-neon-green transition-colors"
                    >
                        <Activity size={28} />
                    </motion.div>
                    <span className="text-xl font-bold tracking-wide">
                        UrbanFlow <span className="text-neon-blue">AI</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#demo"
                        className="px-5 py-2 text-sm font-medium rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition-all text-white backdrop-blur-sm"
                    >
                        Watch Demo
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-dark-gray border-b border-border-gray"
                    >
                        <div className="flex flex-col px-6 py-4 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white text-lg font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="#demo"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full text-center px-5 py-3 mt-2 text-sm font-medium rounded-lg bg-neon-blue text-black hover:bg-neon-blue/90 transition-all"
                            >
                                Watch Demo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
