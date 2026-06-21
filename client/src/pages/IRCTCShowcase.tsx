import { useState } from "react";
import { ArrowLeft, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface SectionState {
  booking: "before" | "after";
  seat: "before" | "after";
  error: "before" | "after";
}

export default function IRCTCShowcase() {
  const [viewState, setViewState] = useState<SectionState>({
    booking: "before",
    seat: "before",
    error: "before",
  });

  const toggleView = (section: keyof SectionState, view: "before" | "after") => {
    setViewState((prev) => ({
      ...prev,
      [section]: view,
    }));
  };

  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/assets/irctc/IRCTC_UX_CaseStudy.pdf";
    link.download = "IRCTC_UX_CaseStudy_Redesign.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#070D18] text-[#f2f3f5] font-sans pb-16">
      
      {/* HEADER BAR WITH BACK TO HOME */}
      <div className="sticky top-0 z-50 bg-[#070D18]/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 text-sm text-[#b5bac1] hover:text-white transition-colors cursor-pointer group font-medium">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </button>
          </Link>
          
          <Button variant="outline" size="sm" onClick={downloadPDF} className="rounded-full gap-2 text-xs border-white/10 hover:bg-white/5 text-[#f2f3f5]">
            <Download className="w-3.5 h-3.5" />
            Download PDF Report
          </Button>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="relative text-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5A623]/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#87898c] text-[11px] font-mono tracking-wider">
            UX CASE STUDY — 2026
          </div>
          <h1 className="text-4xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-[#87898c] bg-clip-text text-transparent leading-none">
            IRCTC <span className="text-[#F5A623]">Redesign</span>
          </h1>
          <p className="text-base sm:text-lg text-[#b5bac1] max-w-2xl mx-auto font-light leading-relaxed">
            Optimizing India's largest ticketing platform for speed, clarity, and user trust. A human-centric approach to high-stakes utility design.
          </p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-[#87898c]">MOBILE-FIRST</span>
            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-[#87898c]">HEURISTIC EVALUATION</span>
            <span className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-[#87898c]">PROTOTYPING</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto px-6 space-y-24">

        {/* SECTION 1: BOOKING FLOW */}
        <section id="booking" className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="font-mono text-xs text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/25 px-2.5 py-1 rounded">01</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">The Booking Flow</h2>
              <p className="text-sm text-[#87898c] italic">Reducing friction from search to payment</p>
            </div>
          </div>

          <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5 w-fit">
            <button
              onClick={() => toggleView("booking", "before")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewState.booking === "before" ? "bg-[#F5A623] text-[#0A1628]" : "text-[#87898c] hover:text-white"
              }`}
            >
              BEFORE
            </button>
            <button
              onClick={() => toggleView("booking", "after")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewState.booking === "after" ? "bg-[#F5A623] text-[#0A1628]" : "text-[#87898c] hover:text-white"
              }`}
            >
              AFTER
            </button>
          </div>

          <div className="rounded-2xl border border-[#1E2D45] bg-[#0F1E35] overflow-hidden shadow-2xl">
            {viewState.booking === "before" ? (
              <img
                className="w-full h-auto block"
                src="/manus-storage/IRCTC/zNiaOgmQtLpdPFGD.png"
                alt="IRCTC Flow Before"
              />
            ) : (
              <img
                className="w-full h-auto block"
                src="/manus-storage/IRCTC/IXdzkPbneygREmSp.png"
                alt="IRCTC Flow After"
              />
            )}
          </div>

          {viewState.booking === "before" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#ed4245]/5 border border-[#ed4245]/20 rounded-xl p-5 text-[#ed4245] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">FRICTION POINT</span>
                Mandatory login wall before users can even search for availability.
              </div>
              <div className="bg-[#ed4245]/5 border border-[#ed4245]/20 rounded-xl p-5 text-[#ed4245] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">COGNITIVE LOAD</span>
                Cluttered interface with intrusive ads camouflaging critical data.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#57f287]/5 border border-[#57f287]/20 rounded-xl p-5 text-[#57f287] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">SOLUTION</span>
                Search-first access; login only required at the passenger details stage.
              </div>
              <div className="bg-[#57f287]/5 border border-[#57f287]/20 rounded-xl p-5 text-[#57f287] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">CLARITY</span>
                Natural language search with city-based suggestions (e.g., Mumbai).
              </div>
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-[#1E2D45] bg-white/2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1E2D45] bg-black/20 text-xs font-mono text-[#F5A623] uppercase">
                  <th className="px-6 py-3.5 text-left font-medium">Metric</th>
                  <th className="px-6 py-3.5 text-left font-medium">Legacy System</th>
                  <th className="px-6 py-3.5 text-left font-medium">Redesign</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#b5bac1]">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Search Access</td>
                  <td className="px-6 py-3.5">Login Required</td>
                  <td className="px-6 py-3.5 text-[#57f287]">Instant Access</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Station Input</td>
                  <td className="px-6 py-3.5">Cryptic Codes</td>
                  <td className="px-6 py-3.5 text-[#57f287]">City Names</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Visual Hierarchy</td>
                  <td className="px-6 py-3.5">Low (Ad-heavy)</td>
                  <td className="px-6 py-3.5 text-[#57f287]">High (Task-focused)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="font-mono text-[10px] px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623]">NIELSEN #5: ERROR PREVENTION</span>
            <span className="font-mono text-[10px] px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623]">PROGRESSIVE DISCLOSURE</span>
          </div>
        </section>

        {/* SECTION 2: SEAT SELECTION */}
        <section id="seat" className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="font-mono text-xs text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/25 px-2.5 py-1 rounded">02</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">Seat Selection UI</h2>
              <p className="text-sm text-[#87898c] italic">Bridging the gap between data and physical reality</p>
            </div>
          </div>

          <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5 w-fit">
            <button
              onClick={() => toggleView("seat", "before")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewState.seat === "before" ? "bg-[#F5A623] text-[#0A1628]" : "text-[#87898c] hover:text-white"
              }`}
            >
              BEFORE
            </button>
            <button
              onClick={() => toggleView("seat", "after")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewState.seat === "after" ? "bg-[#F5A623] text-[#0A1628]" : "text-[#87898c] hover:text-white"
              }`}
            >
              AFTER
            </button>
          </div>

          <div className="rounded-2xl border border-[#1E2D45] bg-[#0F1E35] overflow-hidden shadow-2xl">
            {viewState.seat === "before" ? (
              <img
                className="w-full h-auto block"
                src="/manus-storage/IRCTC/cAWbdUPXvTGodtwC.png"
                alt="Seat Selection Before"
              />
            ) : (
              <img
                className="w-full h-auto block"
                src="/manus-storage/IRCTC/XBRuTtaTwFOZzSoQ.png"
                alt="Seat Selection After"
              />
            )}
          </div>

          {viewState.seat === "before" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#ed4245]/5 border border-[#ed4245]/20 rounded-xl p-5 text-[#ed4245] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">SPATIAL CONFUSION</span>
                Abstract text grid makes it impossible to visualize physical seat location.
              </div>
              <div className="bg-[#ed4245]/5 border border-[#ed4245]/20 rounded-xl p-5 text-[#ed4245] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">HIERARCHY</span>
                Price and availability given equal weight, leading to scanning fatigue.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#57f287]/5 border border-[#57f287]/20 rounded-xl p-5 text-[#57f287] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">SPATIAL MAPPING</span>
                Interactive coach map aligns digital interface with physical train layout.
              </div>
              <div className="bg-[#57f287]/5 border border-[#57f287]/20 rounded-xl p-5 text-[#57f287] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">AFFORDANCE</span>
                Seats look clickable; color-coded availability for instant recognition.
              </div>
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-[#1E2D45] bg-white/2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1E2D45] bg-black/20 text-xs font-mono text-[#F5A623] uppercase">
                  <th className="px-6 py-3.5 text-left font-medium">Feature</th>
                  <th className="px-6 py-3.5 text-left font-medium">Current State</th>
                  <th className="px-6 py-3.5 text-left font-medium">Redesign</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#b5bac1]">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Representation</td>
                  <td className="px-6 py-3.5">Textual Grid</td>
                  <td className="px-6 py-3.5 text-[#57f287]">Visual Map</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Interaction</td>
                  <td className="px-6 py-3.5">Select Date First</td>
                  <td className="px-6 py-3.5 text-[#57f287]">Select Seat Directly</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Feedback</td>
                  <td className="px-6 py-3.5">Static Text</td>
                  <td className="px-6 py-3.5 text-[#57f287]">Interactive Highlight</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="font-mono text-[10px] px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623]">SPATIAL MAPPING</span>
            <span className="font-mono text-[10px] px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623]">AFFORDANCE</span>
          </div>
        </section>

        {/* SECTION 3: ERROR STATES */}
        <section id="error" className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="font-mono text-xs text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/25 px-2.5 py-1 rounded">03</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">Error States & Recovery</h2>
              <p className="text-sm text-[#87898c] italic">Designing for grace under pressure</p>
            </div>
          </div>

          <div className="flex gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5 w-fit">
            <button
              onClick={() => toggleView("error", "before")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewState.error === "before" ? "bg-[#F5A623] text-[#0A1628]" : "text-[#87898c] hover:text-white"
              }`}
            >
              BEFORE
            </button>
            <button
              onClick={() => toggleView("error", "after")}
              className={`px-4 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewState.error === "after" ? "bg-[#F5A623] text-[#0A1628]" : "text-[#87898c] hover:text-white"
              }`}
            >
              AFTER
            </button>
          </div>

          <div className="rounded-2xl border border-[#1E2D45] bg-[#0F1E35] overflow-hidden shadow-2xl">
            {viewState.error === "before" ? (
              <img
                className="w-full h-auto block"
                src="/manus-storage/IRCTC/oYrPTyeEQAKTumUc.png"
                alt="Error Before"
              />
            ) : (
              <img
                className="w-full h-auto block"
                src="/manus-storage/IRCTC/eGPfZFUBxiFzcPqF.png"
                alt="Error After"
              />
            )}
          </div>

          {viewState.error === "before" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#ed4245]/5 border border-[#ed4245]/20 rounded-xl p-5 text-[#ed4245] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">CRYPTIC FEEDBACK</span>
                Technical error codes (e.g., Error 102) offer no context or solution.
              </div>
              <div className="bg-[#ed4245]/5 border border-[#ed4245]/20 rounded-xl p-5 text-[#ed4245] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">DEAD END</span>
                No recovery path; users lose all progress and must completely restart.
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#57f287]/5 border border-[#57f287]/20 rounded-xl p-5 text-[#57f287] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">PLAIN LANGUAGE</span>
                "Your money is safe" — reassuring text instead of technical jargon.
              </div>
              <div className="bg-[#57f287]/5 border border-[#57f287]/20 rounded-xl p-5 text-[#57f287] text-sm">
                <span className="font-mono text-[10px] uppercase opacity-80 block mb-1.5 tracking-wider font-bold">RECOVERY CTA</span>
                Prominent "Retry Payment" button preserves the current booking session.
              </div>
            </div>
          )}

          <div className="overflow-x-auto rounded-xl border border-[#1E2D45] bg-white/2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1E2D45] bg-black/20 text-xs font-mono text-[#F5A623] uppercase">
                  <th className="px-6 py-3.5 text-left font-medium">Aspect</th>
                  <th className="px-6 py-3.5 text-left font-medium">Current State</th>
                  <th className="px-6 py-3.5 text-left font-medium">Redesign</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#b5bac1]">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Error Tone</td>
                  <td className="px-6 py-3.5">Punitive/Technical</td>
                  <td className="px-6 py-3.5 text-[#57f287]">Helpful/Human</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Progress Loss</td>
                  <td className="px-6 py-3.5">100% (Restart)</td>
                  <td className="px-6 py-3.5 text-[#57f287]">0% (Session Saved)</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">User Control</td>
                  <td className="px-6 py-3.5">None</td>
                  <td className="px-6 py-3.5 text-[#57f287]">High (Retry/Modify)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="font-mono text-[10px] px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623]">NIELSEN #9: ERROR RECOVERY</span>
            <span className="font-mono text-[10px] px-3 py-1 rounded bg-[#F5A623]/10 border border-[#F5A623]/30 text-[#F5A623]">GRACEFUL DEGRADATION</span>
          </div>
        </section>

        {/* SECTION 4: IMPACT */}
        <section id="impact" className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="font-mono text-xs text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/25 px-2.5 py-1 rounded">04</div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display">Overall Impact</h2>
              <p className="text-sm text-[#87898c] italic">Measured improvements in UX performance</p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-[#1E2D45] bg-white/2">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1E2D45] bg-black/20 text-xs font-mono text-[#F5A623] uppercase">
                  <th className="px-6 py-3.5 text-left font-medium">UX Metric</th>
                  <th className="px-6 py-3.5 text-left font-medium">Current</th>
                  <th className="px-6 py-3.5 text-left font-medium">Post-Redesign</th>
                  <th className="px-6 py-3.5 text-left font-medium">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-[#b5bac1]">
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Average Booking Time</td>
                  <td className="px-6 py-3.5">5.5 Minutes</td>
                  <td className="px-6 py-3.5 text-white">2.1 Minutes</td>
                  <td className="px-6 py-3.5 text-[#57f287] font-semibold">-62%</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Error Recovery Rate</td>
                  <td className="px-6 py-3.5">0%</td>
                  <td className="px-6 py-3.5 text-white">92%</td>
                  <td className="px-6 py-3.5 text-[#57f287] font-semibold">+92%</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">Cognitive Load Score</td>
                  <td className="px-6 py-3.5">High</td>
                  <td className="px-6 py-3.5 text-white">Low</td>
                  <td className="px-6 py-3.5 text-[#57f287] font-semibold">Improved</td>
                </tr>
                <tr>
                  <td className="px-6 py-3.5 font-medium text-white">User Trust Index</td>
                  <td className="px-6 py-3.5">2.4/10</td>
                  <td className="px-6 py-3.5 text-white">8.8/10</td>
                  <td className="px-6 py-3.5 text-[#57f287] font-semibold">+266%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#0A1628] py-12 px-6 mt-16 text-center text-[#87898c] text-sm">
        <p>&copy; 2026 UX Portfolio Case Study — IRCTC Redesign</p>
      </footer>
    </div>
  );
}
