"use client";

import { motion } from "framer-motion";
import { Leaf, ParkingCircle, Fuel, Train } from "lucide-react";

export default function EcoFlow() {
    const rewards = [
        { icon: <ParkingCircle size={20} />, text: "Parking Discounts" },
        { icon: <Fuel size={20} />, text: "EV Charging & Fuel Rewards" },
        { icon: <Train size={20} />, text: "Public Transport Balance" },
    ];

    return (
        <section className="py-24 bg-dark-bg relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Mobile UI Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:w-1/2 relative flex justify-center w-full"
                    >
                        {/* Glow behind phone */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-neon-green/20 blur-[100px] rounded-full"></div>

                        <div className="relative w-72 h-[580px] bg-dark-gray border-[6px] border-[#222] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col pt-8 pb-4 px-6 z-10">
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-2xl"></div>

                            <div className="flex justify-between items-center text-white mb-8">
                                <span className="text-sm font-medium">9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-1 h-2.5 bg-white/80 rounded-sm"></div>
                                    <div className="w-1 h-3.5 bg-white/80 rounded-sm"></div>
                                    <div className="w-1 h-2 bg-white/30 rounded-sm"></div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-neon-green to-neon-blue rounded-full flex items-center justify-center mb-4">
                                    <Leaf className="text-white w-8 h-8" />
                                </div>
                                <h3 className="text-white text-lg font-semibold">Eco Points</h3>
                                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-white mt-1 mb-8">
                                    2,450
                                </h1>

                                <div className="w-full bg-white/5 rounded-2xl p-4 mb-4 backdrop-blur-md">
                                    <h4 className="text-white text-sm font-medium mb-3">Recent Route</h4>
                                    <div className="flex justify-between items-center bg-black/30 p-3 rounded-xl border border-white/5">
                                        <div>
                                            <p className="text-white text-sm">Balanced Route Taken</p>
                                            <p className="text-neon-green text-xs mt-1">+50 Points</p>
                                        </div>
                                        <Leaf size={16} className="text-neon-green" />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <h4 className="text-white text-sm font-medium mb-3">Redeem Rewards</h4>
                                    <div className="flex flex-col gap-2">
                                        {rewards.map((reward, i) => (
                                            <div key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                                                <div className="text-neon-blue bg-neon-blue/10 p-2 rounded-lg">
                                                    {reward.icon}
                                                </div>
                                                <span className="text-white text-xs">{reward.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Home indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full"></div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green text-sm font-medium mb-6">
                                <Leaf size={16} /> Driver Incentive System
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                Gamifying Urban <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-teal-400">
                                    Sustainability
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                We believe that behavioral change is just as important as algorithm precision. The <strong>EcoFlow Rewards System</strong> incentivizes drivers to follow AI-optimized, balanced routes.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center shrink-0 border border-neon-green/30">
                                        <div className="w-2 h-2 rounded-full bg-neon-green"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">Earn Points</h4>
                                        <p className="text-gray-400 text-sm mt-1">Accept the AI-suggested alternative route to avoid congestion and earn Eco Points automatically.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-neon-blue/20 flex items-center justify-center shrink-0 border border-neon-blue/30">
                                        <div className="w-2 h-2 rounded-full bg-neon-blue"></div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">Reduce Carbon Footprint</h4>
                                        <p className="text-gray-400 text-sm mt-1">By preventing stop-and-go traffic, every redirected car actively lowers city emissions.</p>
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
