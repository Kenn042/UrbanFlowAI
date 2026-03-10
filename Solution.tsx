"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Camera, Network, RefreshCw } from "lucide-react";

export default function Solution() {
    const points = [
        {
            icon: <Camera className="text-neon-blue" size={24} />,
            title: "Computer Vision",
            desc: "Analyzes feeds from existing city cameras.",
        },
        {
            icon: <Network className="text-neon-green" size={24} />,
            title: "Digital Twin",
            desc: "Builds a real-time simulation of the entire traffic system.",
        },
        {
            icon: <BrainCircuit className="text-purple-400" size={24} />,
            title: "15-30 Min Prediction",
            desc: "Forecasts congestion before vehicles even arrive.",
        },
        {
            icon: <RefreshCw className="text-pink-400" size={24} />,
            title: "Dynamic Balancing",
            desc: "Routes are adjusted on the fly to prevent bottlenecks.",
        },
    ];

    return (
        <section id="solution" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">
                                    UrbanFlow AI
                                </span>
                                <br /> Predictive Optimization
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                By combining existing city camera infrastructure with advanced machine learning, our system predicts congestion 15 to 30 minutes in advance and dynamically balances road traffic across the city network.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {points.map((pt, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: i * 0.1 + 0.3 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
                                >
                                    <div className="p-2 rounded-lg bg-dark-bg border border-border-gray">
                                        {pt.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{pt.title}</h4>
                                        <p className="text-sm text-gray-500">{pt.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Diagram Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:w-1/2 w-full relative h-[400px] md:h-[500px]"
                    >
                        <div className="absolute inset-0 bg-dark-gray border border-border-gray rounded-2xl overflow-hidden flex items-center justify-center relative group">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-neon-blue/20 to-neon-green/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 text-center flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full border border-neon-blue/50 flex items-center justify-center mb-6 relative">
                                    <div className="absolute inset-0 rounded-full border-t-2 border-neon-blue animate-spin" style={{ animationDuration: '3s' }}></div>
                                    <BrainCircuit className="text-neon-blue w-10 h-10" />
                                </div>
                                <p className="text-white/80 font-mono text-sm tracking-widest uppercase">AI Flow Diagram</p>
                                <div className="mt-8 flex gap-4">
                                    <div className="w-16 h-1 bg-neon-blue/30 overflow-hidden relative rounded-full">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 w-1/2 bg-neon-blue"
                                            animate={{ x: ["-100%", "200%"] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                    <div className="w-16 h-1 bg-neon-green/30 overflow-hidden relative rounded-full">
                                        <motion.div
                                            className="absolute inset-y-0 left-0 w-1/2 bg-neon-green"
                                            animate={{ x: ["-100%", "200%"] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
