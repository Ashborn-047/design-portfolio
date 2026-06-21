import { useState } from 'react';
import { X } from 'lucide-react';

interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  label: string;
  description: string;
  color: 'blue' | 'green' | 'red' | 'purple';
}

interface AnnotatedMockupProps {
  imageSrc: string;
  imageAlt: string;
  hotspots: Hotspot[];
}

const colorMap = {
  blue: 'bg-blue-500/20 border-blue-500 text-blue-300',
  green: 'bg-green-500/20 border-green-500 text-green-300',
  red: 'bg-red-500/20 border-red-500 text-red-300',
  purple: 'bg-purple-500/20 border-purple-500 text-purple-300',
};

export default function AnnotatedMockup({ imageSrc, imageAlt, hotspots }: AnnotatedMockupProps) {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <div className="relative bg-slate-800/50 border border-white/10 rounded-lg overflow-hidden">
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto block" />
        
        {/* Hotspots */}
        {hotspots.map((hotspot) => (
          <div
            key={hotspot.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
          >
            {/* Animated pulse circle */}
            <div className={`w-8 h-8 rounded-full border-2 ${colorMap[hotspot.color]} flex items-center justify-center animate-pulse`}>
              <div className="w-2 h-2 rounded-full bg-current" />
            </div>
            
            {/* Tooltip (Only visible on sm screens and larger) */}
            {activeHotspot === hotspot.id && (
              <div className={`absolute hidden sm:block w-64 bg-slate-900 border border-white/10 rounded-lg p-4 shadow-lg z-10 animate-fade-in
                ${hotspot.x > 60 ? 'right-12 left-auto' : 'left-12 right-auto'}
                ${hotspot.y > 60 ? 'bottom-0 top-auto' : 'top-0 bottom-auto'}
              `}>
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{hotspot.label}</h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveHotspot(null);
                    }}
                    className="text-slate-400 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{hotspot.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Description Block (Only visible on mobile screens) */}
      {activeHotspot && (
        <div className="mt-4 sm:hidden bg-slate-900 border border-white/10 rounded-lg p-4 animate-fade-in">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-white text-sm">
              {hotspots.find((h) => h.id === activeHotspot)?.label}
            </h4>
            <button
              onClick={() => setActiveHotspot(null)}
              className="text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {hotspots.find((h) => h.id === activeHotspot)?.description}
          </p>
        </div>
      )}

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {hotspots.map((hotspot) => (
          <button
            key={hotspot.id}
            onClick={() => setActiveHotspot(activeHotspot === hotspot.id ? null : hotspot.id)}
            className={`text-xs p-2 rounded border transition-all cursor-pointer ${
              activeHotspot === hotspot.id
                ? `${colorMap[hotspot.color]} border-current`
                : 'bg-slate-800/30 border-white/10 text-slate-400 hover:text-slate-200'
            }`}
          >
            {hotspot.label}
          </button>
        ))}
      </div>
    </div>
  );
}
