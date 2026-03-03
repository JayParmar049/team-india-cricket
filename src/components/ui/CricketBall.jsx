const CricketBall = ({ size = 40, color = "#CC0000", className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
    <circle cx="50" cy="50" r="46" fill={color} />
    <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
    <path d="M 50 4 C 30 20, 25 40, 50 50 C 75 60, 70 80, 50 96" fill="none" stroke="white" strokeWidth="3" opacity="0.6" />
    <path d="M 50 4 C 70 20, 75 40, 50 50 C 25 60, 30 80, 50 96" fill="none" stroke="white" strokeWidth="3" opacity="0.6" />
    <path d="M 44 6 C 42 15 41 22 44 30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M 56 6 C 58 15 59 22 56 30" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M 44 70 C 42 78 41 85 44 94" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
    <path d="M 56 70 C 58 78 59 85 56 94" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export default CricketBall;