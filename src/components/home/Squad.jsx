import { useState } from "react";
import { SQUAD } from "../../data/cricketData";

function Squad() {
    const [activeTab, setActiveTab] = useState("batting");
    const [hoveredPlayer, setHoveredPlayer] = useState(null);

    const filteredPlayers = SQUAD.filter(
        (p) => p.category === activeTab
    );

    return (
        <section
            style={{ background: "var(--navy)" }}
            className="py-12 seam-bg"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <div className="bc font-black text-2xl text-white uppercase tracking-wide">
                            The Squad
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-0 mt-3 border-b border-white/10">
                            {["batting", "bowling", "all-rounders"].map(
                                (tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`bc font-bold text-sm px-5 py-2.5 uppercase tracking-wide transition-all ${activeTab === tab
                                                ? "tab-active"
                                                : "tab-inactive"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                )
                            )}
                        </div>
                    </div>

                    <a
                        href="#"
                        className="bc font-bold text-sm"
                        style={{ color: "var(--sky)" }}
                    >
                        FULL SQUAD →
                    </a>
                </div>

                {/* Players Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {filteredPlayers.map((p, i) => (
                        <div
                            key={p.name}
                            className="card rounded-xl overflow-hidden cursor-pointer"
                            style={{
                                background:
                                    hoveredPlayer === i
                                        ? "#0057A8"
                                        : "#0A1628",
                                border:
                                    "1px solid rgba(255,255,255,.07)",
                            }}
                            onMouseEnter={() =>
                                setHoveredPlayer(i)
                            }
                            onMouseLeave={() =>
                                setHoveredPlayer(null)
                            }
                        >
                            <div
                                className="relative overflow-hidden"
                                style={{
                                    background:
                                        "linear-gradient(135deg,#001233,#002060)",
                                    minHeight: 80,
                                }}
                            >
                                <div
                                    className="absolute bottom-0 right-1 bc font-black opacity-15 leading-none select-none"
                                    style={{
                                        fontSize: "4.5rem",
                                        color: "white",
                                    }}
                                >
                                    {p.jersey}
                                </div>

                                <div className="relative z-10 p-3 flex flex-col items-center justify-center h-20">
                                    <div className="text-3xl mb-1">
                                        {p.flag}
                                    </div>
                                    <div
                                        className="badge"
                                        style={{
                                            background:
                                                "rgba(0,87,168,.6)",
                                            color: "var(--sky)",
                                        }}
                                    >
                                        #{p.jersey}
                                    </div>
                                </div>
                            </div>

                            <div className="p-3">
                                <div className="bc font-bold text-white text-sm leading-tight">
                                    {p.name}
                                </div>

                                <div
                                    className="b text-xs mt-0.5 mb-2"
                                    style={{ color: "#6B8CAE" }}
                                >
                                    {p.role}
                                </div>

                                <div
                                    className="text-center py-1.5 rounded-lg"
                                    style={{
                                        background:
                                            "rgba(255,255,255,.05)",
                                    }}
                                >
                                    <div
                                        className="bc font-black text-xl"
                                        style={{
                                            color: p.runs
                                                ? "var(--sky)"
                                                : "var(--saffron)",
                                        }}
                                    >
                                        {p.runs
                                            ? p.runs.toLocaleString()
                                            : p.wickets}
                                    </div>

                                    <div
                                        className="b text-xs"
                                        style={{
                                            color: "var(--gray)",
                                        }}
                                    >
                                        {p.runs
                                            ? `Runs · Avg ${p.avg}`
                                            : `Wkts · Avg ${p.avg}`}
                                    </div>
                                </div>

                                <div className="flex gap-0.5 mt-2">
                                    {p.form.map((f, j) => (
                                        <div
                                            key={j}
                                            className="flex-1 h-1 rounded-full"
                                            style={{
                                                background:
                                                    parseInt(f) > 50
                                                        ? "#22C55E"
                                                        : parseInt(f) > 20
                                                            ? "#F4A623"
                                                            : "#EF4444",
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Squad;
