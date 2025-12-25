import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ViolationMarker {
  id: string;
  label: string;
  detail: string;
  position: { x: number; y: number; width: number; height: number };
}

interface PDFViewerProps {
  fileName: string;
  activeViolation?: string | null;
  violations: ViolationMarker[];
}

const PDFViewer = ({ fileName, activeViolation, violations }: PDFViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeMarker = violations.find((v) => v.id === activeViolation);

  // Smooth scroll/zoom to active violation
  useEffect(() => {
    if (activeViolation && containerRef.current) {
      const marker = document.getElementById(`marker-${activeViolation}`);
      if (marker) {
        marker.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      }
    }
  }, [activeViolation]);

  return (
    <div className="h-full flex flex-col bg-slate-800">
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-3 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Visual Proof
          </span>
          <span className="text-xs text-slate-500 ml-2 truncate">
            {fileName}
          </span>
        </div>
      </div>

      {/* PDF Canvas */}
      <div 
        ref={containerRef}
        className="flex-1 overflow-auto p-8 flex items-center justify-center"
      >
        {/* Mock PDF Page */}
        <div className="relative bg-white rounded shadow-2xl" style={{ width: 480, height: 620 }}>
          {/* Grid lines to simulate blueprint */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Mock floor plan elements */}
          <div className="absolute inset-6 border-2 border-slate-300 rounded">
            {/* Property boundary label */}
            <span className="absolute -top-3 left-4 bg-white px-1 text-[10px] font-mono text-slate-400">
              LOT BOUNDARY
            </span>

            {/* House outline */}
            <div className="absolute top-8 left-8 right-8 bottom-24 border-2 border-slate-400 bg-slate-50/50">
              <span className="absolute top-2 left-2 text-[10px] font-mono text-slate-500">
                MAIN STRUCTURE
              </span>
              {/* Rooms */}
              <div className="absolute top-8 left-4 w-24 h-16 border border-slate-300" />
              <div className="absolute top-8 right-4 w-20 h-20 border border-slate-300" />
              <div className="absolute bottom-4 left-4 right-4 h-12 border border-slate-300" />
            </div>

            {/* Driveway - this is where the violation is */}
            <div className="absolute bottom-4 left-8 w-32 h-16 border border-slate-300 bg-slate-100">
              <span className="absolute bottom-1 left-1 text-[8px] font-mono text-slate-400">
                DRIVEWAY
              </span>
            </div>

            {/* Scale indicator */}
            <div className="absolute bottom-2 right-4 flex items-center gap-1">
              <div className="w-12 h-[2px] bg-slate-400" />
              <span className="text-[8px] font-mono text-slate-400">10 ft</span>
            </div>
          </div>

          {/* Violation Markers */}
          {violations.map((violation) => (
            <div
              key={violation.id}
              id={`marker-${violation.id}`}
              className={cn(
                "absolute border-2 rounded transition-all duration-300",
                activeViolation === violation.id
                  ? "border-rose-500 bg-rose-500/30 scale-105 shadow-lg shadow-rose-500/20"
                  : "border-rose-400/60 bg-rose-400/20"
              )}
              style={{
                left: violation.position.x,
                top: violation.position.y,
                width: violation.position.width,
                height: violation.position.height,
              }}
            >
              {/* Floating Tooltip */}
              <div 
                className={cn(
                  "absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap",
                  "px-3 py-1.5 rounded-lg shadow-xl",
                  "bg-slate-900 text-white text-xs font-mono",
                  "transition-all duration-300",
                  activeViolation === violation.id
                    ? "opacity-100 scale-100"
                    : "opacity-80 scale-95"
                )}
              >
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-rose-400 font-semibold">{violation.label}</span>
                  <span className="text-slate-300 text-[10px]">{violation.detail}</span>
                </div>
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                  <div className="border-4 border-transparent border-t-slate-900" />
                </div>
              </div>

              {/* Corner indicators */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-l-2 border-t-2 border-rose-500" />
              <div className="absolute -top-1 -right-1 w-2 h-2 border-r-2 border-t-2 border-rose-500" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-l-2 border-b-2 border-rose-500" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r-2 border-b-2 border-rose-500" />
            </div>
          ))}

          {/* North indicator */}
          <div className="absolute top-4 right-4 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-transparent border-b-slate-400" />
            <span className="text-[8px] font-mono text-slate-400 mt-0.5">N</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex-shrink-0 px-4 py-3 border-t border-slate-700">
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-rose-400/60 bg-rose-400/20 rounded-sm" />
            <span>Violation Area</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 border border-slate-400 bg-slate-50 rounded-sm" />
            <span>Structure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
