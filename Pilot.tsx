"use client";

import { motion } from "framer-motion";
import { CopyPlus, Network, Map } from "lucide-react";

export default function Pilot() {
    const phases = [
        {
            num: "Phase 1",
            city: "Quba Pilot",
            icon: <CopyPlus size={24} className="text-neon-blue" />,
            desc: "Integration with existing city traffic cameras on key intersections. First predictive load-balancing tests using YOLOv10 edge devices.",
            status: "Starting Q4 2026",
        },
        {
            num: "Phase 2",
            city: "Smart City Grid",
            icon: <Network size={24} className="text-neon-green" />,
            desc: "Deployment of central traffic data platform. Syncing with local public transport schedules and emergency vehicle routing systems.",
            status: "Planned 2027",
        },
        {
            num: "Phase 3",
            city: "Baku Expansion",
            icon: <Map size={24} className="text-purple-400" />,
            desc: "Scaling the architecture to handle the capital's massive traffic volume, integrating with national mapping apps and toll roads.",
            status: "Planned 2028+",
        },
    ];

    return (
        <section className="py-24 relative bg-dark-bg">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-bold mb-4 text-white"
                    >
                        Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">Strategy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        A scalable, phased rollout designed to prove efficiency in Quba before expanding to major metropolitan areas.
                    </motion.p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical line for timeline on desktop */}
                    <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border-gray"></div>

                    <div className="space-y-12 relative z-10">
                        {phases.map((phase, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.2 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-dark-bg border-4 border-neon-blue z-20 items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                </div>

                                {/* Content Box */}
                                <div className={`md:w-1/2 flex flex-col mx-auto ${i % 2 === 0 ? "items-start md:pl-16 text-left" : "items-end md:pr-16 text-right"}`}>
                                    <div className="bg-dark-gray/80 border border-border-gray p-8 rounded-3xl shadow-xl hover:border-neon-blue/40 transition-colors w-full sm:w-[400px]">
                                        <div className={`flex items-center gap-4 mb-6 ${i % 2 === 0 ? "justify-start" : "md:justify-end justify-start"}`}>
                                            <div className="p-3 bg-white/5 rounded-xl">
                                                {phase.icon}
                                            </div>
                                            <div className={i % 2 !== 0 ? "md:text-right text-left" : "text-left"}>
                                                <h4 className="text-neon-blue font-mono text-xs uppercase tracking-wider mb-1">{phase.num}</h4>
                                                <h3 className="text-2xl font-bold text-white">{phase.city}</h3>
                                            </div>
                                        </div>
                                        <p className={`text-gray-400 text-sm leading-relaxed mb-6 ${i % 2 !== 0 ? "md:text-right text-left" : "text-left"}`}>
                                            {phase.desc}
                                        </p>
                                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 font-medium ${i % 2 !== 0 ? "md:float-right float-left" : "float-left"}`}>
                                            {phase.status}
                                        </div>
                                        <div className="clear-both"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
