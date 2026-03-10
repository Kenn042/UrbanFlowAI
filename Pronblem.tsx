"use client";

import { motion } from "framer-motion";
import { AlertOctagon, RouteOff, Clock, Flame, Factory } from "lucide-react";

export default function Problem() {
    const problems = [
        {
            icon: <RouteOff size={28} className="text-red-400" />,
            title: "Herd Effect",
            desc: "Drivers are redirected to the exact same roads simultaneously.",
        },
        {
            icon: <AlertOctagon size={28} className="text-orange-400" />,
            title: "Artificial Congestion",
            desc: "New traffic jams form simply because navigation apps reacted too late.",
        },
        {
            icon: <Flame size={28} className="text-yellow-400" />,
            title: "Fuel Waste",
            desc: "Idling in unexpected jams drastically increases average fuel consumption.",
        },
        {
            icon: <Factory size={28} className="text-gray-400" />,
            title: "Higher CO₂",
            desc: "Traffic gridlocks are a leading cause of urban carbon emissions spikes.",
        },
        {
            icon: <Clock size={28} className="text-neon-blue" />,
            title: "Unpredictability",
            desc: "Travel time becomes entirely unpredictable, hurting logistics and commutes.",
        },
    ];

    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVars: import("framer-motion").Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } },
    };

    return (
        <section id="about" className="py-24 bg-dark-gray/50 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        The <span className="text-red-500">Artificial</span> Traffic Jam Problem
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400"
                    >
                        Modern navigation systems like Google Maps and Waze are reactive. They only see congestion
                        <strong className="text-white font-medium"> after it occurs</strong>.
                        When they redirect traffic, everyone gets the same route, instantly moving the bottleneck somewhere else.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVars}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                    {problems.map((prob, i) => (
                        <motion.div
                            key={i}
                            variants={itemVars}
                            className="bg-dark-bg border border-border-gray/50 p-8 rounded-2xl hover:border-red-500/30 transition-colors group"
                        >
                            <div className="mb-6 p-4 rounded-full bg-white/5 inline-block group-hover:scale-110 transition-transform">
                                {prob.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{prob.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{prob.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
