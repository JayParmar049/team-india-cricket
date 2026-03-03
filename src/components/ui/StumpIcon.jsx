const StumpIcon = () => (
  <svg width="28" height="40" viewBox="0 0 28 40">
    {[4, 12, 20].map(x => (
      <g key={x}>
        <rect x={x} y="8" width="4" height="30" rx="1" fill="#D4A017" />
        <rect x={x - 1} y="5" width="6" height="4" rx="1" fill="#D4A017" />
      </g>
    ))}
    <rect x="3" y="6" width="10" height="3" rx="1" fill="#A07010" />
    <rect x="15" y="6" width="10" height="3" rx="1" fill="#A07010" />
  </svg>
);

export { StumpIcon };