"use client";

import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, MapPin, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export default function InteractiveDemo() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [time, setTime] = useState(0);

    // Auto-play the demo
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setTime((prev) => (prev + 1) % 100);
        }, 100);
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <section id="demo" className="py-24 relative overflow-hidden bg-dark-bg">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Live <span className="text-neon-blue">AI Simulation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Watch how UrbanFlow AI dynamically redistributes traffic in real-time before congestion forms.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 bg-dark-gray/50 rounded-3xl border border-border-gray p-6 lg:p-12 shadow-2xl">

                    {/* Map Simulation */}
                    <div className="lg:w-2/3 w-full h-[400px] md:h-[500px] rounded-2xl bg-black border border-border-gray/50 relative overflow-hidden flex items-center justify-center">
                        {/* Grid overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>

                        {/* Main Arterial Road (Horizontal) */}
                        <div className={`absolute top-1/2 -translate-y-1/2 left-10 right-10 h-6 rounded-full flex items-center justify-between px-2 transition-all duration-1000 ${time > 30 && time < 70 ? 'bg-red-500/20 border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-gray-800 border-gray-700'
                            } border`}>
                            {/* Cars horizontally */}
                            <motion.div
                                className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"
                                animate={{ x: [(time % 100) * 8, ((time + 10) % 100) * 8] }}
                                transition={{ duration: 0.1, ease: 'linear' }}
                            />
                            <motion.div
                                className={`w-3 h-3 rounded-full ${time > 30 && time < 70 ? 'bg-red-400 shadow-[0_0_10px_red]' : 'bg-white shadow-[0_0_10px_white]'}`}
                                animate={{ x: [((time + 20) % 100) * 8, ((time + 30) % 100) * 8] }}
                                transition={{ duration: 0.1, ease: 'linear' }}
                            />
                            <motion.div
                                className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]"
                                animate={{ x: [((time + 50) % 100) * 8, ((time + 60) % 100) * 8] }}
                                transition={{ duration: 0.1, ease: 'linear' }}
                            />
                        </div>

                        {/* Alternative Route (Curved) */}
                        <div className="absolute top-1/2 left-20 right-20 h-40 border-t-2 border-l-2 border-r-2 rounded-t-[100px] border-neon-green/40 -translate-y-full opacity-60">
                            {/* Highlight when rerouting */}
                            <div className={`absolute -top-1 -left-[1px] -right-[1px] h-0.5 bg-neon-green transition-opacity duration-500 ${time > 60 ? 'opacity-100' : 'opacity-0'}`}></div>

                            {/* Rerouted Car */}
                            {time > 60 && (
                                <motion.div
                                    className="absolute top-0 right-1/2 w-3 h-3 bg-neon-green rounded-full shadow-[0_0_15px_#39ff14] -mt-1.5"
                                    animate={{ left: ["0%", "50%", "100%"] }}
                                    transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                                />
                            )}
                        </div>

                        {/* Map nodes */}
                        <MapPin className="absolute top-1/2 left-10 -translate-y-1/2 -translate-x-1/2 text-gray-500 w-8 h-8" />
                        <MapPin className="absolute top-1/2 right-10 -translate-y-1/2 translate-x-1/2 text-neon-blue w-8 h-8" />

                        {/* AI Warning / Status Float */}
                        <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3">
                            <Activity className={time > 30 && time < 70 ? "text-red-500 animate-pulse" : "text-neon-green"} size={20} />
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 font-mono">SYSTEM STATUS</span>
                                <span className={`text-sm font-bold ${time > 30 && time < 70 ? "text-red-500" : "text-neon-green"}`}>
                                    {time > 30 && time < 70 ? "BOTTLENECK DETECTED" : "FLOW BALANCED"}
                                </span>
                            </div>
                        </div>

                        {/* Rerouting action Float */}
                        <div className={`absolute bottom-6 left-1/2 -translate-x-1/2 bg-neon-green/20 backdrop-blur-md border border-neon-green/50 px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-500 ${time > 60 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            <div className="w-2 h-2 rounded-full bg-neon-green animate-ping"></div>
                            <span className="text-neon-green text-xs font-bold uppercase">Rerouting 35% Traffic</span>
                        </div>
                    </div>

                    {/* Controls & Sync Output */}
                    <div className="lg:w-1/3 w-full flex flex-col justify-between space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Simulation Engine</h3>
                            <p className="text-gray-400 text-sm">Observe the digital twin reacting to increasing load on the main arterial road.</p>
                        </div>

                        {/* Terminal-like output */}
                        <div className="bg-black border border-[#333] rounded-xl p-4 font-mono text-xs text-green-400 h-48 overflow-hidden relative">
                            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black to-transparent z-10" />
                            <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-black to-transparent z-10" />

                            <div className="flex flex-col space-y-2 justify-end h-full">
                                <span className="text-gray-500">&gt; Engine started...</span>
                                <span className="text-gray-500">&gt; Connected to CCTV grid</span>
                                <span className={time > 10 ? "opacity-100" : "opacity-0"}>&gt; Analyzing traffic volume [Time: {time}]</span>
                                <span className={time > 30 ? "text-red-400 opacity-100" : "opacity-0"}>&gt; WARNING: Main arterial capacity &gt; 80%</span>
                                <span className={time > 40 ? "text-yellow-400 opacity-100" : "opacity-0"}>&gt; Calculating predictive impact for T+15m...</span>
                                <span className={time > 60 ? "text-neon-blue opacity-100" : "opacity-0"}>&gt; SOLUTION: Opening Northern bypass route</span>
                                <span className={time > 65 ? "text-neon-green opacity-100" : "opacity-0"}>&gt; Broadcasting route payloads to Waze/Maps</span>
                                <span className={time > 80 ? "text-neon-green opacity-100" : "opacity-0"}>&gt; Flow restored to optimal balance.</span>
                            </div>
                        </div>

                        {/* Playback Controls */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="flex-1 bg-white hover:bg-gray-200 text-black font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                            >
                                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                                {isPlaying ? "Pause Demo" : "Play Demo"}
                            </button>
                            <button
                                onClick={() => { setTime(0); setIsPlaying(true); }}
                                className="p-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-white transition-colors"
                                aria-label="Restart simulation"
                            >
                                <RotateCcw size={18} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
