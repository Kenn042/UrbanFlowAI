"use client";

import { motion } from "framer-motion";
import { ScanFace, Cpu, LineChart, Globe, Zap } from "lucide-react";

export default function Technology() {
    const techs = [
        {
            icon: <ScanFace size={32} className="text-blue-400" />,
            title: "Computer Vision",
            subtitle: "YOLOv10 / OpenCV",
            desc: "Real-time vehicle detection and classification from city cameras with ultra-low latency.",
        },
        {
            icon: <Cpu size={32} className="text-purple-400" />,
            title: "Machine Learning",
            subtitle: "Traffic Prediction Models",
            desc: "Deep learning models that forecast congestion 30 minutes in advance based on historical and real-time data.",
        },
        {
            icon: <LineChart size={32} className="text-green-400" />,
            title: "Data Processing",
            subtitle: "Real-time Analytics",
            desc: "High-throughput stream processing to handle thousands of events per second from sensors and cameras.",
        },
        {
            icon: <Globe size={32} className="text-cyan-400" />,
            title: "Digital Twin",
            subtitle: "City Traffic Simulation",
            desc: "A virtual replica of the city's road network, allowing the AI to test scenarios before implementation.",
        },
        {
            icon: <Zap size={32} className="text-yellow-400" />,
            title: "API Integration",
            subtitle: "Navigation Sync",
            desc: "Direct integration with navigation apps (Google Maps, Waze) to suggest balanced alternative routes.",
        },
    ];

    return (
        <section id="technology" className="py-24 bg-dark-gray/30 relative">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Technology <span className="text-gray-500">Stack</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400"
                    >
                        Powered by state-of-the-art AI and distributed systems to process city-scale data in real-time.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techs.map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className={`p-8 bg-dark-bg border border-border-gray rounded-2xl group hover:border-gray-500/50 transition-all ${i === 3 || i === 4 ? "lg:col-span-1" : ""
                                }`}
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                                    {tech.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{tech.title}</h3>
                            <span className="text-xs font-mono text-neon-blue uppercase tracking-wider block mb-4">
                                {tech.subtitle}
                            </span>
                            <p className="text-gray-400 text-sm leading-relaxed">{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
