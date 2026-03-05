import React from 'react'
import { FORMATS } from "../../data/cricketData";

const FormatRankings = () => {
    return (
        <>
            <section className="bg-white border-b border-gray-100" id="FormatRankings">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="grid grid-cols-3 gap-4">
                        {FORMATS.map(f => (
                            <div key={f.name} className="format-pill card rounded-2xl overflow-hidden border border-gray-100 cursor-pointer">
                                <div className="px-5 py-3 bc font-black text-white text-sm tracking-widest text-center"
                                    style={{ background: f.color }}>
                                    {f.name}
                                </div>
                                <div className="px-5 py-4 flex items-center justify-between" style={{ background: f.light }}>
                                    <div>
                                        <div className="b text-xs text-gray-500">Matches · Wins</div>
                                        <div className="bc font-bold text-gray-800">{f.matches} · {f.wins}</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="b text-xs text-gray-500">ICC Rank</div>
                                        <div className="bc font-black text-2xl" style={{ color: f.color }}>{f.rank}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormatRankings;
