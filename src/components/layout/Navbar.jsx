import { NAV_LINKS } from "../../data/cricketData";
import '../../App.css';
import { StumpIcon } from "../ui/StumpIcon";

export default function Navbar() {
  return (
    <header style={{ background: "var(--navy)" }} className="sticky top-0 z-50 shadow-xl">
        <div className="flex h-1">
          <div className="flex-1" style={{ background: "#FF9933" }} />
          <div className="flex-1 bg-white" />
          <div className="flex-1" style={{ background: "#138808" }} />
        </div>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#003580,#0057A8)" }}>
              <StumpIcon />
            </div>
            <div>
              <div className="bc text-white font-black text-lg leading-none tracking-wide">TEAM INDIA</div>
              <div className="b text-xs mt-0.5" style={{ color: "var(--gold)" }}>BCCI · Men's Cricket</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l, i) => (
              <a key={l} href="#"
                className={`nav-link bc font-semibold text-sm tracking-wide ${i === 0 ? "active text-white" : "text-blue-200 hover:text-white"}`}>
                {l}
              </a>
            ))}
          </nav>
          <button className="btn bc font-black text-sm px-5 py-2.5 rounded-lg text-white"
            style={{ background: "var(--saffron)" }}>
            🎟 GET TICKETS
          </button>
        </div>
      </header>
  );
}