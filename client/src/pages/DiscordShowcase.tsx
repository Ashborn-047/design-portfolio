import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChevronDown, Download, ArrowLeft } from 'lucide-react';
import AnnotatedMockup from '@/components/AnnotatedMockup';
import DesignSystemShowcase from '@/components/DesignSystemShowcase';
import { Link } from 'wouter';

export default function DiscordShowcase() {
  const [activeSection, setActiveSection] = useState('onboarding');

  const downloadPDF = () => {
    // Directly download the copied high-quality PDF case study from the public assets folder
    const link = document.createElement('a');
    link.href = '/assets/discord/Discord_UX_CaseStudy.pdf';
    link.download = 'Discord_UX_CaseStudy_Onboarding_Redesign.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      
      {/* HEADER BAR WITH BACK TO HOME */}
      <div className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors cursor-pointer group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </button>
          </Link>
          
          <Button variant="outline" size="sm" onClick={downloadPDF} className="rounded-full gap-2 text-xs border-white/10 hover:bg-white/5 text-slate-200">
            <Download className="w-3.5 h-3.5" />
            Download PDF Report
          </Button>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className="relative overflow-hidden px-6 py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">UX Case Study</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text text-transparent leading-tight">
            Discord <span className="text-blue-400">Onboarding</span> Redesign
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming the new member experience from disorienting to welcoming. A human-centered approach to community belonging.
          </p>

          <div className="flex flex-wrap gap-2.5 justify-center mb-8">
            <span className="px-3 py-1 text-xs font-mono bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300">INFORMATION ARCHITECTURE</span>
            <span className="px-3 py-1 text-xs font-mono bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300">ONBOARDING FLOW</span>
            <span className="px-3 py-1 text-xs font-mono bg-pink-500/10 border border-pink-500/30 rounded-full text-pink-300">SOCIAL DESIGN</span>
          </div>

          <div className="flex justify-center">
            <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce" />
          </div>
        </div>
      </header>

      {/* STICKY NAV */}
      <nav className="sticky top-[73px] z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex overflow-x-auto gap-1">
          {[
            { id: 'onboarding', label: 'Onboarding Flow', num: '01' },
            { id: 'channel-discovery', label: 'Channel Discovery', num: '02' },
            { id: 'social-validation', label: 'Social Validation', num: '03' },
            { id: 'design-system', label: 'Design System', num: '04' },
            { id: 'impact', label: 'Impact', num: '05' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                activeSection === item.id
                  ? 'border-blue-400 text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-xs text-blue-400 font-mono mr-2">{item.num}</span>
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* SECTION 1: ONBOARDING FLOW */}
        {activeSection === 'onboarding' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded text-xs font-mono text-blue-300">01</div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-display">The Onboarding Journey</h2>
                <p className="text-slate-400">From confusion to clarity: guiding new members through their first session</p>
              </div>
            </div>

            <Tabs defaultValue="before" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2 bg-slate-800/50 border border-white/10 rounded-lg">
                <TabsTrigger value="before" className="data-[state=active]:bg-slate-700 text-xs">BEFORE</TabsTrigger>
                <TabsTrigger value="after" className="data-[state=active]:bg-blue-600 text-xs">AFTER</TabsTrigger>
              </TabsList>

              <TabsContent value="before" className="mt-6 space-y-6">
                <div className="bg-slate-800/30 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                  <img src="/manus-storage/Discord/discord_onboarding_before-JGtiS6Mh656rnVYpRdJjqN.png" alt="Discord Onboarding Before" className="w-full h-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                    <p className="text-xs font-mono text-red-400 uppercase tracking-wide mb-2">PROBLEM: Channel Overload</p>
                    <p className="text-sm text-red-200">Users land in a server with 50+ channels and zero context about where to start.</p>
                  </div>
                  <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                    <p className="text-xs font-mono text-red-400 uppercase tracking-wide mb-2">PROBLEM: Social Ghosting</p>
                    <p className="text-sm text-red-200">New members post introductions but receive no response, feeling ignored and disconnected.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="after" className="mt-6 space-y-6">
                <AnnotatedMockup
                  imageSrc="/manus-storage/Discord/discord_onboarding_after-FYsxTKR2VwVbvhh3sZTRgz.png"
                  imageAlt="Discord Onboarding After"
                  hotspots={[
                    { id: 'progressive', x: 20, y: 25, label: 'Progressive Disclosure', description: 'Only 3-5 starter channels shown initially, reducing cognitive load', color: 'green' },
                    { id: 'spotlight', x: 50, y: 50, label: 'New Member Spotlight', description: 'Automated welcome feature with community reactions', color: 'green' },
                    { id: 'guided', x: 75, y: 35, label: 'Guided Onboarding', description: 'Step-by-step flow to help users find their place', color: 'blue' },
                  ]}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                    <p className="text-xs font-mono text-green-400 uppercase tracking-wide mb-2">SOLUTION: Progressive Disclosure</p>
                    <p className="text-sm text-green-200">Show only 3-5 starter channels initially, unlocking more as users explore.</p>
                  </div>
                  <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                    <p className="text-xs font-mono text-green-400 uppercase tracking-wide mb-2">SOLUTION: Immediate Validation</p>
                    <p className="text-sm text-green-200">New member spotlight with one-click "Wave" reactions from community.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {/* SECTION 2: CHANNEL DISCOVERY */}
        {activeSection === 'channel-discovery' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs font-mono text-purple-300">02</div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-display">Channel Discovery & Organization</h2>
                <p className="text-slate-400">Making information architecture intuitive, readable, and scannable</p>
              </div>
            </div>

            <Tabs defaultValue="before" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2 bg-slate-800/50 border border-white/10 rounded-lg">
                <TabsTrigger value="before" className="data-[state=active]:bg-slate-700 text-xs">BEFORE</TabsTrigger>
                <TabsTrigger value="after" className="data-[state=active]:bg-blue-600 text-xs">AFTER</TabsTrigger>
              </TabsList>

              <TabsContent value="before" className="mt-6 space-y-6">
                <div className="bg-slate-800/30 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                  <img src="/manus-storage/Discord/discord_channel_discovery_before-cCcSrbETgnucE8qpsaoMAE.png" alt="Channel Discovery Before" className="w-full h-auto" />
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <p className="text-xs font-mono text-red-400 uppercase tracking-wide mb-2">PROBLEM: Information Architecture Fatigue</p>
                  <p className="text-sm text-red-200">Non-standardized channel names, cryptic emojis, and chaotic categorization create immediate cognitive overload.</p>
                </div>
              </TabsContent>

              <TabsContent value="after" className="mt-6 space-y-6">
                <div className="bg-slate-800/30 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                  <img src="/manus-storage/Discord/discord_channel_discovery_after-mSwXe9DjEQSKhGs4qbgG4r.png" alt="Channel Discovery After" className="w-full h-auto" />
                </div>

                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <p className="text-xs font-mono text-green-400 uppercase tracking-wide mb-2">SOLUTION: Semantic Channel Organization</p>
                  <p className="text-sm text-green-200">Clear categories (Welcome, Community, Resources, Off-Topic) with descriptive channel names and consistent emoji usage.</p>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {/* SECTION 3: SOCIAL VALIDATION */}
        {activeSection === 'social-validation' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-xs font-mono text-pink-300">03</div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-display">Social Validation & Belonging</h2>
                <p className="text-slate-400">Designing for immediate community connection and low-stakes interactions</p>
              </div>
            </div>

            <Tabs defaultValue="before" className="w-full">
              <TabsList className="grid w-full max-w-xs grid-cols-2 bg-slate-800/50 border border-white/10 rounded-lg">
                <TabsTrigger value="before" className="data-[state=active]:bg-slate-700 text-xs">BEFORE</TabsTrigger>
                <TabsTrigger value="after" className="data-[state=active]:bg-blue-600 text-xs">AFTER</TabsTrigger>
              </TabsList>

              <TabsContent value="before" className="mt-6 space-y-6">
                <div className="bg-slate-800/30 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                  <img src="/manus-storage/Discord/discord_social_validation_before-mfXK5KRhLVhuF9JiXsUFW6.png" alt="Social Validation Before" className="w-full h-auto" />
                </div>

                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-5">
                  <p className="text-xs font-mono text-red-400 uppercase tracking-wide mb-2">PROBLEM: The Lurker Default</p>
                  <p className="text-sm text-red-200">Without clear calls to action, users default to passive observation and never transition to active participation.</p>
                </div>
              </TabsContent>

              <TabsContent value="after" className="mt-6 space-y-6">
                <div className="bg-slate-800/30 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                  <img src="/manus-storage/Discord/discord_social_validation_after-BykikknysoTkLCPeKz6MjQ.png" alt="Social Validation After" className="w-full h-auto" />
                </div>

                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-5">
                  <p className="text-xs font-mono text-green-400 uppercase tracking-wide mb-2">SOLUTION: New Member Spotlight</p>
                  <p className="text-sm text-green-200">Automated welcome feature that encourages existing members to react with a "Wave," providing immediate social validation.</p>
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {/* SECTION 4: DESIGN SYSTEM */}
        {activeSection === 'design-system' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded text-xs font-mono text-yellow-300">04</div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-display">Design System Elements</h2>
                <p className="text-slate-400">Standardized components and UI tokens created for the redesign</p>
              </div>
            </div>

            <DesignSystemShowcase />
          </section>
        )}

        {/* SECTION 5: IMPACT */}
        {activeSection === 'impact' && (
          <section className="space-y-8 animate-fade-in">
            <div className="flex items-start gap-4">
              <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs font-mono text-emerald-300">05</div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2 font-display">Overall Impact Metrics</h2>
                <p className="text-slate-400">Measured performance improvements showing substantial reduction in drop-off</p>
              </div>
            </div>

            <div className="bg-slate-900/60 border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-slate-800/40">
                    <th className="px-6 py-4 text-left text-xs font-mono text-blue-300 uppercase">UX Metric</th>
                    <th className="px-6 py-4 text-left text-xs font-mono text-slate-400 uppercase">Current State</th>
                    <th className="px-6 py-4 text-left text-xs font-mono text-emerald-300 uppercase">Post-Redesign</th>
                    <th className="px-6 py-4 text-left text-xs font-mono text-green-300 uppercase">Change</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-6 py-4 text-slate-300 font-medium">New Member Drop-off Rate</td>
                    <td className="px-6 py-4 text-slate-400">68%</td>
                    <td className="px-6 py-4 text-emerald-300 font-semibold">22%</td>
                    <td className="px-6 py-4 text-green-400 font-semibold">-67%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-300 font-medium">Time to First Interaction</td>
                    <td className="px-6 py-4 text-slate-400">12.3 min</td>
                    <td className="px-6 py-4 text-emerald-300 font-semibold">2.1 min</td>
                    <td className="px-6 py-4 text-green-400 font-semibold">-83%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-300 font-medium">Member Belonging Score</td>
                    <td className="px-6 py-4 text-slate-400">3.2/10</td>
                    <td className="px-6 py-4 text-emerald-300 font-semibold">8.7/10</td>
                    <td className="px-6 py-4 text-green-400 font-semibold">+172%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-slate-300 font-medium">7-Day Active Rate</td>
                    <td className="px-6 py-4 text-slate-400">24%</td>
                    <td className="px-6 py-4 text-emerald-300 font-semibold">71%</td>
                    <td className="px-6 py-4 text-green-400 font-semibold">+196%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-slate-950 py-12 px-6 mt-12 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto space-y-2">
          <p>&copy; 2026 Discord UX Research & Redesign — Portfolio Case Study</p>
          <p className="text-xs text-slate-600">Designed to demonstrate complex interactive UI workflows and onboarding design patterns.</p>
        </div>
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
