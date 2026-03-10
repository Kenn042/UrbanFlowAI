"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState<number | string>(from);

    useEffect(() => {
        let controls;
        if (inView) {
            controls = animate(count, to, { duration, ease: "easeOut" });
        }
        return controls?.stop;
    }, [inView, count, to, duration]);

    useEffect(() => {
        return rounded.onChange((v) => {
            setDisplayValue(v);
        });
    }, [rounded]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayValue}{suffix}
        </span>
    );
}

export default function Impact() {
    const stats = [
        { value: 25, suffix: "%", label: "Faster Travel Time", color: "from-blue-400 to-neon-blue" },
        { value: 15, suffix: "%", label: "Reduction in CO₂", color: "from-neon-green to-emerald-400" },
        { value: 40, suffix: "%", label: "Less Congestion", color: "from-purple-400 to-fuchsia-400" },
        { value: 30, suffix: "%", label: "Faster Emergency Access", color: "from-red-400 to-orange-400" },
    ];

    return (
        <section id="impact" className="py-24 bg-dark-gray/50 border-y border-border-gray">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-3xl md:text-5xl font-bold mb-4"
                >
                    Expected <span className="text-gray-400">Impact</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 max-w-2xl mx-auto mb-16"
                >
                    Simulations in our digital twin models project significant improvements to city-wide mobility and sustainability metrics.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl bg-dark-bg border border-border-gray/50 shadow-lg relative group overflow-hidden"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r opacity-50 group-hover:opacity-100 transition-opacity transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 ease-out z-0"></div>

                            <h3 className={`text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${stat.color} drop-shadow-sm`}>
                                <Counter from={0} to={stat.value} suffix={stat.suffix} duration={2.5} />
                            </h3>
                            <p className="text-gray-400 font-medium text-sm tracking-wide uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
