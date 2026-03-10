"use client";

import { motion } from "framer-motion";
import { Video, ActivitySquare, GitMerge } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            num: "01",
            title: "Data Collection",
            desc: "City traffic cameras collect continuous, real-time visual data, instantly detecting vehicle volume and speed.",
            icon: <Video className="text-blue-400 w-8 h-8" />,
        },
        {
            num: "02",
            title: "Predictive AI",
            desc: "Machine learning cross-references live data with historical patterns, weather, and time to predict bottlenecks.",
            icon: <ActivitySquare className="text-neon-blue w-8 h-8" />,
        },
        {
            num: "03",
            title: "Load Balancing",
            desc: "Once a road hits 80% capacity, the system dynamically reroutes new navigation requests to alternative roads.",
            icon: <GitMerge className="text-neon-green w-8 h-8" />,
        },
    ];

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        How <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white">The System Works</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border-gray -translate-y-1/2 z-0">
                        <motion.div
                            className="h-full bg-gradient-to-r from-neon-blue to-neon-green"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.3 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-dark-bg border-2 border-border-gray shadow-xl flex items-center justify-center mb-8 relative group">
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-black rounded-lg border border-border-gray flex items-center justify-center text-xs font-bold text-gray-400">
                                        {step.num}
                                    </div>
                                    <div className="group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
