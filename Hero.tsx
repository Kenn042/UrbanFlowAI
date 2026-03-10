"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-dark-bg z-10 opacity-70"></div>

                {/* Abstract road lines / data flow */}
                <div className="absolute inset-0 overflow-hidden flex transform -skew-y-12 scale-150">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="h-[200vh] w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent mx-auto relative"
                            initial={{ y: "-100%" }}
                            animate={{ y: "100%" }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 2,
                            }}
                        >
                            <div className="absolute top-0 w-[4px] h-[100px] bg-neon-blue/80 shadow-[0_0_15px_#00f0ff] -ml-[1.5px] rounded-full"></div>
                        </motion.div>
                    ))}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={`green-${i}`}
                            className="h-[200vh] w-px bg-gradient-to-b from-transparent via-green-500/10 to-transparent mx-auto relative"
                            initial={{ y: "100%" }}
                            animate={{ y: "-100%" }}
                            transition={{
                                duration: Math.random() * 6 + 6,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 3,
                            }}
                        >
                            <div className="absolute bottom-0 w-[3px] h-[80px] bg-neon-green/70 shadow-[0_0_10px_#39ff14] -ml-[1px] rounded-full"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="container px-6 relative z-10 flex flex-col items-center text-center max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-300 tracking-wide">Urban Hackathon 2026</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
                >
                    <span className="block text-white">UrbanFlow AI</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed"
                >
                    Predictive Traffic Intelligence for <span className="text-gradient font-medium">Sustainable Cities</span>. An AI-powered system that predicts congestion before it happens and dynamically balances road traffic.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
                >
                    <a
                        href="#solution"
                        className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        View Project
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#demo"
                        className="group flex items-center justify-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all hover:border-neon-blue/50"
                    >
                        <Play size={20} fill="currentColor" className="text-neon-blue" />
                        See Demo
                    </a>
                </motion.div>
            </div>

            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent z-10 pointer-events-none"></div>
        </section>
    );
}
