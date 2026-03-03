import React from 'react'
import { NEWS } from "../../data/cricketData";
import CricketBall from "../ui/CricketBall";

const News = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="flex justify-between items-end mb-6">
                    <div className="bc font-black text-2xl text-gray-900 uppercase tracking-wide">News & Reports</div>
                    <a href="#" className="bc font-bold text-sm" style={{ color: "var(--blue)" }}>VIEW ALL →</a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {NEWS.map((n, i) => (
                        <div key={i} className="card bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer group">
                            <div className="h-36 flex flex-col items-center justify-center relative overflow-hidden"
                                style={{ background: `linear-gradient(135deg,${n.color}ee,${n.color}88)` }}>
                                <div className="absolute inset-0 hero-grid opacity-20" />
                                <CricketBall size={52} color="rgba(0,0,0,0.25)" className="absolute top-3 right-3 opacity-50" />
                                <span className="badge relative z-10" style={{ background: "rgba(255,255,255,.2)", color: "white" }}>{n.tag}</span>
                            </div>
                            <div className="p-4">
                                <div className="b text-xs font-semibold mb-2" style={{ color: "var(--gray)" }}>{n.date}</div>
                                <p className="bc font-bold text-sm text-gray-800 leading-snug group-hover:text-blue-700 transition-colors line-clamp-3">
                                    {n.title}
                                </p>
                                <a href="#" className="bc font-bold text-xs mt-3 block" style={{ color: "var(--blue)" }}>READ MORE →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default News;
