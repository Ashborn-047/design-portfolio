import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function NotionShowcase() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [sliderPositions, setSliderPositions] = useState({
    onboarding: 50,
    empty: 50,
    gallery: 50,
  });

  const handleSliderChange = (section: string, value: number) => {
    setSliderPositions((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/assets/notion/Notion_UX_CaseStudy.pdf';
    link.download = 'Notion_UX_CaseStudy_Onboarding_Redesign.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 text-slate-800 font-sans pb-16">
      
      {/* HEADER BAR WITH BACK TO HOME */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group font-medium">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </button>
          </Link>
          
          <Button variant="outline" size="sm" onClick={downloadPDF} className="rounded-full gap-2 text-xs border-slate-200 bg-white hover:bg-slate-50 text-slate-700">
            <Download className="w-3.5 h-3.5" />
            Download PDF Report
          </Button>
        </div>
      </div>

      {/* Hero Header */}
      <header className="px-6 py-16 sm:py-24 border-b border-slate-200/30 bg-slate-50/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-600 uppercase tracking-wider">UX Case Study</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 leading-tight">
            Notion Onboarding Redesign
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bridging the Activation Gap: From Blank Canvas to Meaningful Productivity
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Executive Summary */}
        <section className="mb-12">
          <Card className="border-slate-200 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 p-6 sm:p-8 shadow-sm">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 font-display">
              Executive Summary
            </h2>
            <p className="mb-4 text-base sm:text-lg text-slate-700">
              Notion is a powerhouse of flexibility, but for new users, that flexibility often manifests as{" "}
              <strong>"Notion Paralysis."</strong> This case study identifies three critical friction points:
            </p>
            <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span><strong>Vague Onboarding Flow:</strong> Users are categorized but not guided toward meaningful goals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span><strong>Blank Canvas Paralysis:</strong> The empty state is intimidating and lacks scaffolding for beginners.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 inline-block h-2 w-2 rounded-full bg-blue-600 flex-shrink-0"></span>
                <span><strong>Template Overload:</strong> 70,000+ templates with weak filtering lead to analysis paralysis.</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Section 1: First-Run Onboarding */}
        <section className="mb-12 border border-slate-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              01. First-Run Onboarding Flow
            </h2>
            <Button
              variant="outline"
              onClick={() => toggleSection("onboarding")}
              className="gap-2 text-xs"
            >
              {activeSection === "onboarding" ? (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4" />
                  Expand
                </>
              )}
            </Button>
          </div>

          {activeSection === "onboarding" && (
            <div className="space-y-8 animate-fade-in">
              {/* Problem Statement */}
              <Card className="border-red-200 bg-red-50/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-red-900">
                  The Problem
                </h3>
                <p className="text-red-800 text-sm leading-relaxed">
                  The current onboarding asks "How will you use Notion?" but fails to provide a meaningful payoff. Users are categorized but not guided. There's no progress bar, questions are vague, and the personalization payoff is minimal.
                </p>
              </Card>

              {/* Before/After Comparison Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Visual Comparison (Drag to Compare)
                </h3>
                <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-inner">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    {/* Before Image */}
                    <div className="absolute inset-0">
                      <img
                        src="/manus-storage/Notion/notion_onboarding_before.png"
                        alt="Current Onboarding"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        CURRENT STATE
                      </div>
                    </div>

                    {/* After Image with Slider */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPositions.onboarding}%` }}
                    >
                      <img
                        src="/manus-storage/Notion/notion_onboarding_after.png"
                        alt="Redesigned Onboarding"
                        className="h-full w-full object-cover"
                        style={{ width: "100%", maxWidth: "none" }}
                      />
                      <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        PROPOSED REDESIGN
                      </div>
                    </div>

                    {/* Slider Handle */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions.onboarding}
                      onChange={(e) =>
                        handleSliderChange("onboarding", parseInt(e.target.value))
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                    />
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                      style={{ left: `${sliderPositions.onboarding}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-slate-200 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  💡 Drag the slider to compare before and after. Notice the progress bar, goal-oriented questions, and visual clarity in the redesign.
                </p>
              </div>

              {/* Pain Points */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-orange-200 bg-orange-50/50 p-6">
                  <h4 className="mb-2 text-sm font-semibold text-orange-900 uppercase tracking-wide">
                    Conscious Pain Point
                  </h4>
                  <p className="text-sm text-orange-800 mb-2 font-medium">
                    Lack of Transparency
                  </p>
                  <p className="text-sm text-orange-700 italic">
                    "They ask who you are — after you've already signed up... This question appears during onboarding."
                  </p>
                </Card>

                <Card className="border-purple-200 bg-purple-50/50 p-6">
                  <h4 className="mb-2 text-sm font-semibold text-purple-900 uppercase tracking-wide">
                    Subconscious Pain Point
                  </h4>
                  <p className="text-sm text-purple-800 mb-2 font-medium">
                    The Activation Gap
                  </p>
                  <p className="text-sm text-purple-700">
                    Users invest time answering questions but land in a generic empty workspace, creating immediate cognitive dissonance.
                  </p>
                </Card>
              </div>

              {/* Root Cause & Solution */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-slate-200 p-6">
                  <h4 className="mb-3 text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    Root Cause Analysis
                  </h4>
                  <p className="text-sm text-slate-700">
                    Notion tries to be "everything for everyone" but fails to provide a specific on-ramp for high-value tasks immediately. The onboarding questions focus on demographic categorization rather than intent or action.
                  </p>
                </Card>

                <Card className="border-green-200 bg-green-50/50 p-6">
                  <h4 className="mb-3 text-sm font-semibold text-green-900 uppercase tracking-wide">
                    Proposed Fixes
                  </h4>
                  <ul className="space-y-1.5 text-sm text-green-800">
                    <li>✓ Add a clear progress bar (Step 1 of 4)</li>
                    <li>✓ Use goal-oriented questions</li>
                    <li>✓ Provide meaningful personalization payoff</li>
                  </ul>
                </Card>
              </div>

              {/* UX Principles */}
              <Card className="border-indigo-200 bg-indigo-50/30 p-6">
                <h4 className="mb-3 text-sm font-semibold text-indigo-900 uppercase tracking-wide">
                  UX Principles Applied
                </h4>
                <div className="space-y-2 text-sm text-indigo-800">
                  <p>
                    <strong>Progressive Disclosure:</strong> Breaking onboarding into clear, numbered steps prevents cognitive overload.
                  </p>
                  <p>
                    <strong>Jobs to be Done (JTBD):</strong> Aligning questions with immediate user goals ensures the resulting workspace is relevant and actionable.
                  </p>
                </div>
              </Card>
            </div>
          )}
        </section>

        {/* Section 2: Empty State Problem */}
        <section className="mb-12 border border-slate-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              02. The Blank Canvas Problem
            </h2>
            <Button
              variant="outline"
              onClick={() => toggleSection("empty")}
              className="gap-2 text-xs"
            >
              {activeSection === "empty" ? (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4" />
                  Expand
                </>
              )}
            </Button>
          </div>

          {activeSection === "empty" && (
            <div className="space-y-8 animate-fade-in">
              {/* Problem Statement */}
              <Card className="border-red-200 bg-red-50/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-red-900">
                  The Problem: "Notion Paralysis"
                </h3>
                <p className="text-red-800 text-sm leading-relaxed">
                  After onboarding, users are dropped into a completely empty page with only a blinking cursor. The prompt "Type / for commands" is too technical for beginners and assumes prior knowledge.
                </p>
              </Card>

              {/* Before/After Comparison Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Visual Comparison (Drag to Compare)
                </h3>
                <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-inner">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    {/* Before Image */}
                    <div className="absolute inset-0">
                      <img
                        src="/manus-storage/Notion/notion_empty_state_before.png"
                        alt="Current Empty State"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        CURRENT STATE
                      </div>
                    </div>

                    {/* After Image with Slider */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPositions.empty}%` }}
                    >
                      <img
                        src="/manus-storage/Notion/notion_empty_state_after.png"
                        alt="Redesigned Empty State"
                        className="h-full w-full object-cover"
                        style={{ width: "100%", maxWidth: "none" }}
                      />
                      <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        PROPOSED REDESIGN
                      </div>
                    </div>

                    {/* Slider Handle */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions.empty}
                      onChange={(e) =>
                        handleSliderChange("empty", parseInt(e.target.value))
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                    />
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                      style={{ left: `${sliderPositions.empty}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-slate-200 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  💡 Drag the slider to compare. Notice how the redesign replaces the blank page with guided choices and a quick-start checklist.
                </p>
              </div>

              {/* User Quote */}
              <Card className="border-l-4 border-blue-500 bg-blue-50/50 p-6">
                <p className="italic text-slate-700 text-sm">
                  "You're dropped into a blank canvas with infinite possibilities... can be super overwhelming to the novice notion user."
                </p>
                <p className="mt-2 text-xs text-slate-500">— Capterra Review</p>
              </Card>

              {/* Pain Points */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-orange-200 bg-orange-50/50 p-6">
                  <h4 className="mb-3 text-sm font-semibold text-orange-900 uppercase tracking-wide">
                    Conscious Pain Point
                  </h4>
                  <p className="text-sm text-orange-800">
                    <strong>"I don't know where to start."</strong> The sheer flexibility becomes a barrier, not a feature.
                  </p>
                </Card>

                <Card className="border-purple-200 bg-purple-50/50 p-6">
                  <h4 className="mb-3 text-sm font-semibold text-purple-900 uppercase tracking-wide">
                    Subconscious Pain Point
                  </h4>
                  <p className="text-sm text-purple-800">
                    <strong>Decision Fatigue & Fear.</strong> Users worry about "messing up" the structure and feel unproductive while configuring.
                  </p>
                </Card>
              </div>

              {/* Root Cause & Solution */}
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-slate-200 p-6">
                  <h4 className="mb-3 text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    Root Cause Analysis
                  </h4>
                  <p className="text-sm text-slate-700">
                    Extreme flexibility without scaffolding. Notion relies on users having prior knowledge of database architecture and information design.
                  </p>
                </Card>

                <Card className="border-green-200 bg-green-50/50 p-6">
                  <h4 className="mb-3 text-sm font-semibold text-green-900 uppercase tracking-wide">
                    Proposed Fixes
                  </h4>
                  <ul className="space-y-1.5 text-sm text-green-800">
                    <li>✓ Introduce "Starter Kits"</li>
                    <li>✓ Implement Quick Start Checklist</li>
                    <li>✓ Add contextual tooltips</li>
                  </ul>
                </Card>
              </div>
            </div>
          )}
        </section>

        {/* Section 3: Template Gallery */}
        <section className="mb-12 border border-slate-200 rounded-xl p-6 sm:p-8 bg-white shadow-sm">
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-slate-900 font-display">
              03. Template Gallery Discovery
            </h2>
            <Button
              variant="outline"
              onClick={() => toggleSection("gallery")}
              className="gap-2 text-xs"
            >
              {activeSection === "gallery" ? (
                <>
                  <ChevronDown className="h-4 w-4" />
                  Collapse
                </>
              ) : (
                <>
                  <ChevronRight className="h-4 w-4" />
                  Expand
                </>
              )}
            </Button>
          </div>

          {activeSection === "gallery" && (
            <div className="space-y-8 animate-fade-in">
              {/* Problem Statement */}
              <Card className="border-red-200 bg-red-50/50 p-6">
                <h3 className="mb-3 text-lg font-semibold text-red-900">
                  The Problem: Template Overload
                </h3>
                <p className="text-red-800 text-sm leading-relaxed">
                  The current gallery houses 70,000+ templates with weak filtering. Users experience analysis paralysis and struggle to distinguish between high-quality and low-effort templates.
                </p>
              </Card>

              {/* Before/After Comparison Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">
                  Visual Comparison (Drag to Compare)
                </h3>
                <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-inner">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    {/* Before Image */}
                    <div className="absolute inset-0">
                      <img
                        src="/manus-storage/Notion/notion_template_gallery_before.png"
                        alt="Current Gallery"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        CURRENT STATE
                      </div>
                    </div>

                    {/* After Image with Slider */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ width: `${sliderPositions.gallery}%` }}
                    >
                      <img
                        src="/manus-storage/Notion/notion_template_gallery_after.png"
                        alt="Redesigned Gallery"
                        className="h-full w-full object-cover"
                        style={{ width: "100%", maxWidth: "none" }}
                      />
                      <div className="absolute top-3 left-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        PROPOSED REDESIGN
                      </div>
                    </div>

                    {/* Slider Handle */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPositions.gallery}
                      onChange={(e) =>
                        handleSliderChange("gallery", parseInt(e.target.value))
                      }
                      className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-10"
                    />
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                      style={{ left: `${sliderPositions.gallery}%` }}
                    >
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-slate-200 flex items-center justify-center">
                        <ChevronRight className="h-4 w-4 text-slate-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  💡 Drag the slider to compare. Notice the Template Matchmaker quiz, Goal-First navigation, and verified creator badges.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Flow Diagram */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 font-display">
            Onboarding Flow Architecture
          </h2>
          <Card className="border-slate-200 p-8 shadow-sm bg-white overflow-x-auto">
            {/* Custom SVG flow diagram representation */}
            <svg viewBox="0 0 800 240" className="w-full min-w-[600px] h-auto text-slate-700 font-sans">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
                </marker>
              </defs>
              
              {/* Step 1 */}
              <rect x="10" y="70" width="160" height="70" rx="8" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1.5" />
              <text x="90" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">1. Welcome Gate</text>
              <text x="90" y="115" textAnchor="middle" fontSize="10" fill="#64748B">Demographic Questions</text>
              <path d="M 170 105 L 210 105" fill="none" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* Step 2 */}
              <rect x="220" y="70" width="160" height="70" rx="8" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
              <text x="300" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E40AF">2. Goal Alignment</text>
              <text x="300" y="115" textAnchor="middle" fontSize="10" fill="#3B82F6">Intent / JTBD Selection</text>
              <path d="M 380 105 L 420 105" fill="none" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* Step 3 */}
              <rect x="430" y="70" width="160" height="70" rx="8" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1.5" />
              <text x="510" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">3. Starter Kit Loading</text>
              <text x="510" y="115" textAnchor="middle" fontSize="10" fill="#22C55E">Personalized Scaffolding</text>
              <path d="M 590 105 L 630 105" fill="none" stroke="#2563EB" strokeWidth="2" markerEnd="url(#arrow)" />
              
              {/* Step 4 */}
              <rect x="640" y="70" width="150" height="70" rx="8" fill="#FAF5FF" stroke="#E9D5FF" strokeWidth="1.5" />
              <text x="715" y="95" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6B21A8">4. Core Value Page</text>
              <text x="715" y="115" textAnchor="middle" fontSize="10" fill="#A855F7">Guided Setup checklist</text>
            </svg>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed text-center">
              Our proposed flow structure mapping how goal-oriented alignment seamlessly triggers personalized setup pages and empty-state checklists.
            </p>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 text-center text-slate-500 text-sm mt-12">
        <p>&copy; 2026 Notion Onboarding Redesign Case Study • Portfolio Showcase</p>
      </footer>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
