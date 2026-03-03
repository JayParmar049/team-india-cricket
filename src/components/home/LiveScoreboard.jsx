import React from "react";

const LiveScoreboard = () => {
  return (
    <div className="hidden lg:block w-80 flex-shrink-0">
      <div
        className="rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        style={{
          background: "rgba(0,53,128,0.3)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ background: "var(--blue)" }}
        >
          <div className="bc font-bold text-white text-sm">
            LIVE SCORECARD
          </div>

          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400 score-live" />
            <span className="b text-xs text-red-300 font-semibold">
              LIVE
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div
                className="b text-xs mb-1"
                style={{ color: "var(--gray)" }}
              >
                3rd TEST · DAY 2 · SESSION 2
              </div>
              <div className="b text-sm font-semibold text-white">
                Rajkot, India
              </div>
            </div>

            <span
              className="badge"
              style={{ background: "#1a3a6e", color: "#60a5fa" }}
            >
              TEST
            </span>
          </div>

          <div className="space-y-3 mb-4">
            {[
              {
                flag: "🇮🇳",
                team: "India",
                score: "452/6",
                overs: "112 overs",
                dim: false,
              },
              {
                flag: "🏴",
                team: "England",
                score: "—",
                overs: "Yet to bat",
                dim: true,
              },
            ].map((row) => (
              <div
                key={row.team}
                className="flex items-center justify-between p-3 rounded-xl"
                style={{
                  background: row.dim
                    ? "rgba(255,255,255,.04)"
                    : "rgba(255,255,255,.07)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{row.flag}</span>
                  <div>
                    <div
                      className={`bc font-bold text-sm ${row.dim
                          ? "text-white/50"
                          : "text-white"
                        }`}
                    >
                      {row.team}
                    </div>
                    <div
                      className="b text-xs"
                      style={{ color: "var(--gray)" }}
                    >
                      {row.overs}
                    </div>
                  </div>
                </div>

                <div
                  className={`bc font-black text-2xl ${row.dim ? "text-white/25" : ""
                    }`}
                  style={
                    row.dim ? {} : { color: "var(--gold)" }
                  }
                >
                  {row.score}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-3">
            <div
              className="b text-xs mb-2"
              style={{ color: "var(--gray)" }}
            >
              CURRENT PARTNERSHIP
            </div>

            <div className="flex justify-between">
              {[
                ["Kohli", "86*", "142"],
                ["Jadeja", "52*", "78"],
              ].map(([n, r, b]) => (
                <div key={n} className="text-center">
                  <div className="bc font-bold text-white text-sm">
                    {n}
                  </div>
                  <div
                    className="bc text-xl font-black"
                    style={{ color: "var(--sky)" }}
                  >
                    {r}
                  </div>
                  <div
                    className="b text-xs"
                    style={{ color: "var(--gray)" }}
                  >
                    {b} balls
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveScoreboard;
