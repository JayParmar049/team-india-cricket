import React from 'react'
import { NAV_LINKS } from "../../data/cricketData";
import { StumpIcon } from "../ui/StumpIcon";

const Footer = () => {
  return (
    <footer style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--blue)" }}>
                <StumpIcon />
              </div>
              <div className="bc font-black text-white">TEAM INDIA</div>
            </div>
            <p className="b text-sm max-w-xs leading-relaxed" style={{ color: "var(--gray)" }}>
              Official website of the Indian Men's Cricket Team, managed by the Board of Control for Cricket in India (BCCI).
            </p>
          </div>
          {[
            ["QUICK LINKS", NAV_LINKS],
            ["FORMATS", ["Test Cricket", "One Day Intl.", "T20 Internationals", "IPL", "Domestic"]],
            ["ABOUT", ["BCCI", "Selector Panel", "Coaching Staff", "Media Centre", "Careers"]],
          ].map(([heading, links]) => (
            <div key={heading}>
              <div className="bc font-black text-xs tracking-widest mb-3" style={{ color: "var(--gold)" }}>{heading}</div>
              <div className="space-y-2">

                {/* {links.map(l => (
                  <a key={l} href="#" className="b block text-sm hover:text-white transition-colors" style={{ color: "var(--gray)" }}>{l}</a>
                ))} */}

                {links.map((l, i) => (
                  <a
                    key={typeof l === "object" ? l.name : i}
                    href={typeof l === "object" ? `#${l.link}` : "#"}
                    className="b block text-sm hover:text-white transition-colors"
                    style={{ color: "var(--gray)" }}
                  >
                    {typeof l === "object" ? l.name : l}
                  </a>
                ))}
                
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="b text-xs" style={{ color: "var(--gray)" }}>© 2024 BCCI. All rights reserved. 🇮🇳 Jai Hind</div>
          <div className="flex gap-3">
            {["📘", "🐦", "📸", "▶️"].map((icon, i) => (
              <button key={i} className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-sm hover:border-white/30 transition-colors">
                {icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-1">
        <div className="flex-1" style={{ background: "#FF9933" }} />
        <div className="flex-1 bg-white" />
        <div className="flex-1" style={{ background: "#138808" }} />
      </div>
    </footer>
  )
}

export default Footer;
