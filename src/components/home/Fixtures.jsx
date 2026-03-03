import React from 'react'
import { FIXTURES } from "../../data/cricketData";

const Fixtures = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <div className="bc font-black text-2xl text-gray-900 uppercase tracking-wide">Latest Fixtures</div>
                        <div className="b text-sm text-gray-500 mt-1">Recent & Upcoming international matches</div>
                    </div>
                    <a href="#" className="bc font-bold text-sm tracking-wide" style={{ color: "var(--blue)" }}>VIEW ALL →</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {FIXTURES.map((f, i) => (
                        <div key={i} className="card rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between px-4 py-2.5"
                                style={{ background: f.status === "upcoming" ? "#FFF3EC" : "var(--navy)" }}>
                                <span className="badge"
                                    style={{ background: f.format === "TEST" ? "#1a1a2e" : f.format === "ODI" ? "#003580" : "#0057A8", color: "white" }}>
                                    {f.format}
                                </span>
                                <span className="b text-xs font-semibold"
                                    style={{ color: f.status === "upcoming" ? "var(--saffron)" : "#8FA8CC" }}>
                                    {f.date}
                                </span>
                            </div>
                            <div className="px-4 py-4">
                                <div className="space-y-3">
                                    {[[f.flag1, f.team1, f.score1, true], [f.flag2, f.team2, f.score2, false]].map(([flag, team, score, isIndia]) => (
                                        <div key={team} className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl">{flag}</span>
                                                <span className={`bc font-bold text-sm ${isIndia ? "text-gray-900" : "text-gray-500"}`}>{team}</span>
                                            </div>
                                            <div className={`bc font-black text-lg ${isIndia && f.status === "completed" ? "text-blue-700" : "text-gray-400"}`}>
                                                {score}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                                    <span className="b text-xs text-gray-400">📍 {f.venue}</span>
                                    <span className={`b text-xs font-semibold ${f.status === "upcoming" ? "text-orange-500" : "text-green-600"}`}>
                                        {f.status === "upcoming" ? "⏳ " : "✓ "}{f.result}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Fixtures;
