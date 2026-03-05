import React from 'react'
import { STATS_HIGHLIGHTS } from "../../data/cricketData";


const QuickStats = () => {
    return (
        <>
            <section style={{ background: "#F0F4FF" }} className="py-8" id="quickstats">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {STATS_HIGHLIGHTS.map((s, i) => (
                            <div key={i} className="card bg-white rounded-2xl p-5 text-center border border-blue-50">
                                <div className="text-3xl mb-2">{s.icon}</div>
                                <div className="bc font-black text-2xl" style={{ color: "var(--blue)" }}>{s.value}</div>
                                <div className="bc font-bold text-sm text-gray-800 mt-1">{s.label}</div>
                                <div className="b text-xs text-gray-400 mt-0.5">{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default QuickStats;
