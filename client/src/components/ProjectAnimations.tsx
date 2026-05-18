/**
 * SVG Animations for Project Cards
 * Each animation reflects the essence of the project
 */

export function WebtoonAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes slideIn {
            0% { transform: translateX(-20px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .webtoon-card { animation: slideIn 0.6s ease-out forwards; }
          .webtoon-accent { fill: #00DC64; animation: pulse 2s ease-in-out infinite; }
        `}</style>
      </defs>
      
      {/* Navigation rail */}
      <rect x="10" y="20" width="15" height="160" rx="2" fill="#f0f0f0" opacity="0.3" />
      <circle cx="17.5" cy="35" r="3" className="webtoon-accent" />
      <circle cx="17.5" cy="55" r="3" fill="#00DC64" opacity="0.5" />
      <circle cx="17.5" cy="75" r="3" fill="#00DC64" opacity="0.3" />
      
      {/* Content cards sliding in */}
      <g style={{ animationDelay: '0s' }} className="webtoon-card">
        <rect x="35" y="30" width="155" height="35" rx="4" fill="#00DC64" opacity="0.1" stroke="#00DC64" strokeWidth="1" />
        <text x="45" y="52" fontSize="10" fill="#00DC64" fontWeight="bold">Profile</text>
      </g>
      
      <g style={{ animationDelay: '0.1s' }} className="webtoon-card">
        <rect x="35" y="75" width="155" height="35" rx="4" fill="#00DC64" opacity="0.1" stroke="#00DC64" strokeWidth="1" />
        <text x="45" y="97" fontSize="10" fill="#00DC64" fontWeight="bold">Series</text>
      </g>
      
      <g style={{ animationDelay: '0.2s' }} className="webtoon-card">
        <rect x="35" y="120" width="155" height="35" rx="4" fill="#00DC64" opacity="0.1" stroke="#00DC64" strokeWidth="1" />
        <text x="45" y="142" fontSize="10" fill="#00DC64" fontWeight="bold">Dashboard</text>
      </g>
    </svg>
  );
}

export function SilverWallAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes dash { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
          .silverwall-gauge { animation: rotate 3s linear infinite; transform-origin: 100px 100px; }
          .silverwall-line { animation: dash 2s ease-in-out infinite; stroke-dasharray: 100; }
        `}</style>
      </defs>
      
      {/* Racing gauge */}
      <circle cx="100" cy="100" r="70" fill="none" stroke="#E10600" strokeWidth="2" opacity="0.2" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#E10600" strokeWidth="1.5" opacity="0.3" />
      
      {/* Rotating needle */}
      <g className="silverwall-gauge">
        <line x1="100" y1="100" x2="100" y2="40" stroke="#E10600" strokeWidth="2" />
        <circle cx="100" cy="100" r="4" fill="#E10600" />
      </g>
      
      {/* Data lines */}
      <line x1="30" y1="150" x2="170" y2="150" stroke="#E10600" strokeWidth="1" opacity="0.4" className="silverwall-line" />
      <line x1="30" y1="165" x2="170" y2="165" stroke="#E10600" strokeWidth="1" opacity="0.3" className="silverwall-line" style={{ animationDelay: '0.3s' }} />
      
      {/* Center display */}
      <text x="100" y="105" fontSize="16" fill="#E10600" textAnchor="middle" fontWeight="bold" opacity="0.7">F1</text>
    </svg>
  );
}

export function TerminalAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes blink { 0%, 49%, 100% { opacity: 1; } 50%, 99% { opacity: 0; } }
          @keyframes typeIn { 0% { width: 0; } 100% { width: 100%; } }
          .terminal-cursor { animation: blink 1s infinite; }
          .terminal-text { animation: typeIn 1.5s steps(20, end) forwards; overflow: hidden; }
        `}</style>
      </defs>
      
      {/* Terminal window */}
      <rect x="15" y="20" width="170" height="160" rx="4" fill="#1a1a1a" stroke="#28CA41" strokeWidth="1.5" />
      
      {/* Terminal header */}
      <line x1="15" y1="35" x2="185" y2="35" stroke="#28CA41" strokeWidth="1" opacity="0.3" />
      
      {/* Terminal text lines */}
      <text x="25" y="55" fontSize="9" fill="#28CA41" fontFamily="monospace" className="terminal-text">$ ls -la</text>
      <text x="25" y="70" fontSize="9" fill="#28CA41" fontFamily="monospace" opacity="0.7">drwxr-xr-x  12 root</text>
      <text x="25" y="85" fontSize="9" fill="#28CA41" fontFamily="monospace" opacity="0.7">-rw-r--r--   1 user</text>
      <text x="25" y="100" fontSize="9" fill="#28CA41" fontFamily="monospace" opacity="0.7">-rwxr-xr-x   1 admin</text>
      
      {/* Blinking cursor */}
      <rect x="25" y="115" width="8" height="12" fill="#28CA41" className="terminal-cursor" />
      <text x="35" y="125" fontSize="9" fill="#28CA41" fontFamily="monospace">_</text>
      
      {/* XP indicator */}
      <text x="25" y="155" fontSize="8" fill="#28CA41" opacity="0.6" fontFamily="monospace">XP: 3,450 / 5,000</text>
    </svg>
  );
}

export function EvolutionAtlasAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes flow { 0% { d: path('M 50 100 Q 100 50, 150 100'); } 50% { d: path('M 50 100 Q 100 80, 150 100'); } 100% { d: path('M 50 100 Q 100 50, 150 100'); } }
          @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          .evolution-particle { animation: float 3s ease-in-out infinite; }
          .evolution-line { stroke: #7C3AED; stroke-width: 2; fill: none; filter: drop-shadow(0 0 3px #7C3AED); }
        `}</style>
      </defs>
      
      {/* Flowing liquid shapes */}
      <path d="M 30 100 Q 80 60, 130 100 Q 160 130, 170 150" className="evolution-line" opacity="0.6" />
      <path d="M 40 80 Q 90 40, 140 80 Q 170 110, 180 130" className="evolution-line" opacity="0.4" style={{ animationDelay: '0.2s' }} />
      
      {/* Floating particles */}
      <circle cx="60" cy="80" r="3" fill="#7C3AED" opacity="0.8" className="evolution-particle" />
      <circle cx="100" cy="60" r="2" fill="#7C3AED" opacity="0.6" className="evolution-particle" style={{ animationDelay: '0.3s' }} />
      <circle cx="140" cy="100" r="2.5" fill="#7C3AED" opacity="0.7" className="evolution-particle" style={{ animationDelay: '0.6s' }} />
      <circle cx="170" cy="130" r="2" fill="#7C3AED" opacity="0.5" className="evolution-particle" style={{ animationDelay: '0.9s' }} />
      
      {/* Center glow */}
      <circle cx="100" cy="100" r="30" fill="#7C3AED" opacity="0.1" />
      <circle cx="100" cy="100" r="20" fill="#7C3AED" opacity="0.05" />
    </svg>
  );
}

export function SVGForgeAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes morph { 0%, 100% { d: path('M 100 50 L 150 100 L 100 150 L 50 100 Z'); } 50% { d: path('M 100 40 L 160 100 L 100 160 L 40 100 Z'); } }
          @keyframes draw { 0% { stroke-dashoffset: 200; } 100% { stroke-dashoffset: 0; } }
          .forge-shape { animation: morph 3s ease-in-out infinite; }
          .forge-line { animation: draw 2s ease-in-out infinite; stroke-dasharray: 200; }
        `}</style>
      </defs>
      
      {/* Morphing SVG shape */}
      <path d="M 100 50 L 150 100 L 100 150 L 50 100 Z" fill="#00D4FF" opacity="0.2" stroke="#00D4FF" strokeWidth="2" className="forge-shape" />
      
      {/* Animated lines */}
      <line x1="50" y1="50" x2="150" y2="150" stroke="#00D4FF" strokeWidth="1.5" opacity="0.4" className="forge-line" />
      <line x1="150" y1="50" x2="50" y2="150" stroke="#00D4FF" strokeWidth="1.5" opacity="0.4" className="forge-line" style={{ animationDelay: '0.3s' }} />
      
      {/* Center point */}
      <circle cx="100" cy="100" r="4" fill="#00D4FF" opacity="0.8" />
      
      {/* Outer ring */}
      <circle cx="100" cy="100" r="60" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function SolarCoreAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes orbit { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes orbitSlow { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
          .solar-orbit-1 { animation: orbit 4s linear infinite; transform-origin: 100px 100px; }
          .solar-orbit-2 { animation: orbitSlow 6s linear infinite; transform-origin: 100px 100px; }
        `}</style>
      </defs>
      
      {/* Sun */}
      <circle cx="100" cy="100" r="15" fill="#EAB308" opacity="0.9" />
      <circle cx="100" cy="100" r="20" fill="#EAB308" opacity="0.3" />
      
      {/* Orbital paths */}
      <circle cx="100" cy="100" r="40" fill="none" stroke="#EAB308" strokeWidth="0.5" opacity="0.2" />
      <circle cx="100" cy="100" r="60" fill="none" stroke="#EAB308" strokeWidth="0.5" opacity="0.15" />
      
      {/* Planet 1 */}
      <g className="solar-orbit-1">
        <circle cx="140" cy="100" r="5" fill="#EAB308" opacity="0.7" />
      </g>
      
      {/* Planet 2 */}
      <g className="solar-orbit-2">
        <circle cx="100" cy="160" r="4" fill="#EAB308" opacity="0.5" />
      </g>
      
      {/* Planet 3 */}
      <g className="solar-orbit-1" style={{ animationDelay: '1s' }}>
        <circle cx="60" cy="100" r="3" fill="#EAB308" opacity="0.4" />
      </g>
    </svg>
  );
}

export function LifeSyncAnimation() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <style>{`
          @keyframes pulse { 0%, 100% { r: 5; opacity: 0.8; } 50% { r: 8; opacity: 0.4; } }
          @keyframes connect { 0% { stroke-dashoffset: 50; } 100% { stroke-dashoffset: 0; } }
          .lifesync-node { animation: pulse 2s ease-in-out infinite; }
          .lifesync-line { animation: connect 2s ease-in-out infinite; stroke-dasharray: 50; }
        `}</style>
      </defs>
      
      {/* Central node */}
      <circle cx="100" cy="100" r="8" fill="#A78BFA" opacity="0.9" />
      
      {/* Connection lines */}
      <line x1="100" y1="100" x2="60" y2="60" stroke="#A78BFA" strokeWidth="1.5" opacity="0.4" className="lifesync-line" />
      <line x1="100" y1="100" x2="140" y2="60" stroke="#A78BFA" strokeWidth="1.5" opacity="0.4" className="lifesync-line" style={{ animationDelay: '0.3s' }} />
      <line x1="100" y1="100" x2="140" y2="140" stroke="#A78BFA" strokeWidth="1.5" opacity="0.4" className="lifesync-line" style={{ animationDelay: '0.6s' }} />
      <line x1="100" y1="100" x2="60" y2="140" stroke="#A78BFA" strokeWidth="1.5" opacity="0.4" className="lifesync-line" style={{ animationDelay: '0.9s' }} />
      
      {/* Connected nodes */}
      <circle cx="60" cy="60" r="5" fill="#A78BFA" opacity="0.6" className="lifesync-node" />
      <circle cx="140" cy="60" r="5" fill="#A78BFA" opacity="0.6" className="lifesync-node" style={{ animationDelay: '0.3s' }} />
      <circle cx="140" cy="140" r="5" fill="#A78BFA" opacity="0.6" className="lifesync-node" style={{ animationDelay: '0.6s' }} />
      <circle cx="60" cy="140" r="5" fill="#A78BFA" opacity="0.6" className="lifesync-node" style={{ animationDelay: '0.9s' }} />
    </svg>
  );
}
