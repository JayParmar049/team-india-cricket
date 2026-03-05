import React from 'react'
import CricketBall from '../ui/CricketBall'
import { LEADERBOARDS } from "../../data/cricketData";


const Leaderboards = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-6 py-10" id="leaderboards">
                <div className="flex items-end justify-between mb-6">
                    <div className="bc font-black text-2xl text-gray-900 uppercase tracking-wide">2024 Leaderboards</div>
                    <a href="#" className="bc font-bold text-sm" style={{ color: "var(--blue)" }}>FULL STATS →</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {LEADERBOARDS.map((lb, i) => (
                        <div key={i} className="card rounded-2xl overflow-hidden relative text-white" style={{ background: lb.grad }}>
                            <div className="absolute -top-6 -right-6 opacity-10">
                                <CricketBall size={120} color={i === 2 ? "#CC3300" : "#0057A8"} />
                            </div>
                            <div className="absolute top-0 left-0 right-0 h-1 opacity-30"
                                style={{ background: "repeating-linear-gradient(90deg,white 0,white 8px,transparent 8px,transparent 16px)" }} />
                            <div className="relative z-10 p-5">
                                <div className="b text-xs font-semibold mb-1 uppercase tracking-widest opacity-60">{lb.label}</div>
                                <div className="bc font-black text-xl">{lb.name}</div>
                                <div className="flex items-end justify-between mt-4">
                                    <div>
                                        <div className="bc font-black leading-none" style={{ fontSize: "4rem" }}>{lb.stat}</div>
                                        <div className="bc font-black tracking-widest text-sm opacity-60">{lb.unit}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="b text-xs opacity-50 mb-1">{lb.sub}</div>
                                        <div className="w-16 h-1.5 rounded-full overflow-hidden bg-white/20">
                                            <div className="h-full rounded-full bg-white" style={{ width: i === 2 ? "78%" : "91%" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Leaderboards;
