import React from 'react'
import CricketBall from "../ui/CricketBall";

const AppDownload = () => {
  return (
    <div>
        <section className="max-w-7xl mx-auto px-6 pb-10" id="AppDownload">
        <div className="rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg,var(--navy) 0%,var(--blue) 60%,#0057A8 100%)", boxShadow: "0 25px 60px rgba(0,53,128,.35)" }}>
          <div className="absolute inset-0 hero-grid opacity-40" />
          <div className="absolute right-0 top-0 bottom-0 flex items-center pr-16 opacity-5">
            <svg viewBox="0 0 300 200" width="380">
              <rect x="50" y="20" width="200" height="160" rx="8" fill="none" stroke="white" strokeWidth="2" />
              <rect x="90" y="20" width="120" height="160" rx="4" fill="none" stroke="white" strokeWidth="1.5" />
              <line x1="50" y1="55" x2="250" y2="55" stroke="white" strokeWidth="1.5" />
              <line x1="50" y1="145" x2="250" y2="145" stroke="white" strokeWidth="1.5" />
              <line x1="150" y1="20" x2="150" y2="180" stroke="white" strokeWidth="1" strokeDasharray="8,6" />
              {[100, 115, 130].map(x => <line key={x} x1={x} y1="20" x2={x} y2="10" stroke="white" strokeWidth="3" />)}
              {[170, 185, 200].map(x => <line key={x} x1={x} y1="180" x2={x} y2="190" stroke="white" strokeWidth="3" />)}
              <circle cx="150" cy="100" r="15" fill="none" stroke="white" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 px-10 py-10">
            {/* <div className="flex-shrink-0"> */}
            <div className="shrink-0">
              <div className="w-32 h-56 rounded-3xl border-4 border-white/20 flex flex-col items-center justify-center shadow-2xl"
                style={{ background: "rgba(0,0,0,.4)", backdropFilter: "blur(10px)" }}>
                <div className="text-4xl">📱</div>
                <div className="bc font-bold text-white text-xs mt-2">BCCI APP</div>
                <div className="mt-3">
                  <CricketBall size={28} color="#CC3300" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <span className="badge mb-3" style={{ background: "var(--saffron)", color: "white" }}>OFFICIAL APP</span>
              <h2 className="bc font-black text-white uppercase leading-tight mb-2" style={{ fontSize: "2.5rem" }}>
                Download The<br /><span style={{ color: "var(--sky)" }}>BCCI Cricket App</span>
              </h2>
              <p className="b text-blue-200 text-sm mb-6 max-w-sm">
                Live ball-by-ball scores, video highlights, player stats, fantasy cricket, news alerts — everything in one place.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button className="btn flex items-center gap-3 px-5 py-3 rounded-xl border border-white/20 text-white"
                  style={{ background: "rgba(0,0,0,.5)" }}>
                  <span className="text-2xl">🍎</span>
                  <div>
                    <div className="b text-xs opacity-60">Download on the</div>
                    <div className="bc font-bold text-sm">Apple Store</div>
                  </div>
                </button>
                <button className="btn flex items-center gap-3 bg-white px-5 py-3 rounded-xl">
                  <span className="text-2xl">▶</span>
                  <div>
                    <div className="b text-xs text-gray-500">Get it on</div>
                    <div className="bc font-bold text-sm text-gray-900">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex flex-col items-center gap-3">
              <CricketBall size={90} color="#CC2200" />
              <div className="text-center">
                <div className="bc font-black text-3xl text-white">4.8★</div>
                <div className="b text-xs text-blue-300">2M+ Downloads</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AppDownload;
