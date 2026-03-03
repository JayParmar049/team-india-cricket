import React from "react";
// Make sure CricketBall is imported
import CricketBall from "../ui/CricketBall";

const Hero = () => {
  return (
    <section
      style={{ background: "var(--dark)", minHeight: 500 }}
      className="relative overflow-hidden hero-grid seam-bg"
    >
      <div
        className="absolute right-0 top-0 bc font-black select-none pointer-events-none leading-none"
        style={{
          fontSize: "26rem",
          color: "rgba(0,53,128,0.18)",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        11
      </div>

      <div className="absolute top-12 right-24 opacity-15">
        <CricketBall size={130} color="#CC3300" />
      </div>

      <div className="absolute bottom-8 left-8 opacity-10">
        <CricketBall size={75} color="#CC3300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16 flex gap-10 items-center">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <span
              className="badge"
              style={{ background: "var(--saffron)", color: "white" }}
            >
              🔴 LIVE SERIES
            </span>
            <span className="b text-sm" style={{ color: "var(--gray)" }}>
              India vs England · 5-Test Series
            </span>
          </div>

          <h1
            className="bc font-black text-white leading-none mb-3 uppercase"
            style={{ fontSize: "clamp(2.8rem,7vw,5.5rem)" }}
          >
            Born to
            <br />
            <span style={{ color: "var(--sky)" }}>Bat. Bowl.</span>
            <br />
            <span
              style={{
                WebkitTextStroke: "2px white",
                color: "transparent",
              }}
            >
              Dominate.
            </span>
          </h1>

          <p
            className="b text-base mb-8 max-w-lg leading-relaxed"
            style={{ color: "#8FA8CC" }}
          >
            The official home of Indian Men's Cricket. Live scores, squad
            updates, match stats & everything cricket — straight from the BCCI.
          </p>

          <div className="flex gap-3 flex-wrap">
            <button
              className="btn bc font-black px-7 py-3.5 rounded-lg text-white text-base"
              style={{
                background:
                  "linear-gradient(135deg,#003580,#0057A8)",
              }}
            >
              ▶ WATCH LIVE
            </button>

            <button
              className="btn bc font-bold px-7 py-3.5 rounded-lg text-sm border"
              style={{
                borderColor: "rgba(255,255,255,.2)",
                color: "white",
              }}
            >
              📋 FULL SQUAD
            </button>
          </div>

          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              ["#1", "ICC Test Ranking"],
              ["6🏆", "World Titles"],
              ["1.4B", "Fans"],
            ].map(([v, l]) => (
              <div key={l}>
                <div
                  className="bc font-black text-2xl"
                  style={{ color: "var(--gold)" }}
                >
                  {v}
                </div>
                <div
                  className="b text-xs"
                  style={{ color: "var(--gray)" }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;