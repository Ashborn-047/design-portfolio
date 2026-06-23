import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Menu, X, ExternalLink, Award, Cpu } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import {
  WebtoonAnimation,
  SilverWallAnimation,
  TerminalAnimation,
  EvolutionAtlasAnimation,
  SVGForgeAnimation,
  SolarCoreAnimation,
  DiscordAnimation,
  NotionAnimation,
  IRCTCAnimation,
} from "@/components/ProjectAnimations";

interface Project {
  id: string;
  title: string;
  category: string;
  type: "ui-ux" | "fullstack";
  status: string;
  statusColor: string;
  description: string;
  details: string[];
  tags: string[];
  year: string;
  metrics: string[];
  animation: React.ComponentType;
  github?: string;
  liveUrl?: string;
  isCaseStudy?: boolean;
}

const projects: Project[] = [
  // --- UI/UX CASE STUDIES ---
  {
    id: "discord",
    title: "Discord Onboarding",
    category: "UX Research & Redesign",
    type: "ui-ux",
    status: "Case Study",
    statusColor: "#5865F2",
    description:
      "Transforming the new member experience from disorienting to welcoming. A research-driven progressive disclosure onboarding flow to solve channel overload.",
    details: [
      "Progressive Disclosure: Starts with 3-5 channels, gradually revealing the rest.",
      "Spotlight Welcomes: Automatic member validation with instant wave reactions.",
      "Information Architecture: Consistent category icons and scannable channel structure."
    ],
    tags: ["UX Research", "IA", "Figma", "Behavioral Design"],
    year: "2026",
    metrics: ["Drop-off: -67%", "Time-to-act: -83%", "Belonging: +172%"],
    animation: DiscordAnimation,
    isCaseStudy: true,
  },
  {
    id: "notion",
    title: "Notion Onboarding",
    category: "Product Design Case Study",
    type: "ui-ux",
    status: "Case Study",
    statusColor: "#111111",
    description:
      "Bridging the activation gap for beginners. A structured onboarding redesign featuring Starter Kits and dynamic empty-state checklists to eliminate 'Notion Paralysis'.",
    details: [
      "Guided Starter Kits: Replaces intimidating blank screens with templates.",
      "Checklists & Progress Bars: Tracks first-run actions with immediate visual reward.",
      "Template Matchmaker: Hick's Law filtering to reduce template overload from 70k+ options."
    ],
    tags: ["Product Design", "Empty States", "Onboarding", "Hick's Law"],
    year: "2026",
    metrics: ["Completion: +48%", "Scaffolding: Guided", "Friction: Low"],
    animation: NotionAnimation,
    isCaseStudy: true,
  },
  {
    id: "irctc",
    title: "IRCTC Redesign",
    category: "Heuristic Utility Redesign",
    type: "ui-ux",
    status: "Case Study",
    statusColor: "#F5A623",
    description:
      "Optimizing India's largest ticketing platform for speed, clarity, and trust. Redesigning high-stakes passenger flows using Nielsen's usability heuristics.",
    details: [
      "Search-First Access: Bypasses the mandatory login barrier during initial query.",
      "Spatial Seat Mapping: Visual coach layout aligning digital booking with physical trains.",
      "Graceful Error Recovery: Informative plain-language alerts preserving transaction states."
    ],
    tags: ["Usability Heuristics", "Spatial Mapping", "Error Recovery", "Accessibility"],
    year: "2026",
    metrics: ["Booking Time: -62%", "Trust: +266%", "Error Recovery: +92%"],
    animation: IRCTCAnimation,
    isCaseStudy: true,
  },
  {
    id: "webtoon-redesign",
    title: "Webtoon Redesign",
    category: "UI/UX Transformation",
    type: "ui-ux",
    status: "Case Study",
    statusColor: "#00DC64",
    description:
      "Webtoon's interface suffered from jarring horizontal overflow issues and clunky navigation. This high-fidelity Next.js prototype addresses these flaws with a collapsible navigation rail and strict layout boundaries.",
    details: [
      "Collapsible Navigation Rail: A smooth navigation rail with sleek transitions.",
      "Strict Layout Boundaries: Eliminates annoying horizontal overflow bugs.",
      "Modernized Profile Tabs: Intuitive scroll-navigation and optimized profile tabs."
    ],
    tags: ["Next.js", "Radix UI", "Zustand", "UI Design"],
    year: "2025",
    metrics: ["Speed: Next 14", "Scale: Radix UI", "Uptime: Zustand"],
    animation: WebtoonAnimation,
    github: "https://github.com/Ashborn-047/Webtoon-Ecosystem-Platform-Redesign-",
    liveUrl: "https://ashborn-047.github.io/Webtoon-Ecosystem-Platform-Redesign-/",
  },
  // --- FULLSTACK & SYSTEMS ---
  {
    id: "silverwall-telemetry",
    title: "SilverWall Telemetry",
    category: "Data & Analytics",
    type: "fullstack",
    status: "In Progress",
    statusColor: "#E10600",
    description:
      "A high-performance Formula 1 telemetry engine that bridges the gap between raw track data and professional race strategy. Built with a custom UI inspired by the Mercedes-AMG SilverWall.",
    details: [
      "SpacetimeDB Backend: Ultra-low latency distributed state management.",
      "WebSocket Ingestion: Real-time speed, throttle, and braking data using OpenF1 streams.",
      "AI Strategy Analysis: Performance analysis engine powered by Google Gemini."
    ],
    tags: ["SpacetimeDB", "WebSocket", "Google Gemini", "Real-time Data"],
    year: "2025",
    metrics: ["Latency: 20ms", "Scale: 20+ Drivers", "Uptime: 99.9%"],
    animation: SilverWallAnimation,
    github: "https://github.com/Ashborn-047/silverwall",
    liveUrl: "https://ashborn-047.github.io/silverwall/",
  },
  {
    id: "the-terminal",
    title: "The Terminal",
    category: "Systems",
    type: "fullstack",
    status: "Live",
    statusColor: "#28CA41",
    description:
      "A fully-realized Linux-inspired browser operating system. Features a custom in-memory virtual file system, real-time signal propagation, and a sophisticated gamification engine.",
    details: [
      "Boot-Sequence Architecture: Authentic cryptographic loading animations and memory allocation.",
      "Deep Gamification Engine: Reward system featuring Daily Quests and XP multipliers.",
      "Custom VFS (Virtual File System): In-memory terminal storage supporting file navigation."
    ],
    tags: ["Browser OS", "Gamification", "VFS", "Systems"],
    year: "2026",
    metrics: ["Speed: 50+ Commands", "Scale: 1M+ XP", "Users: 1.2k+"],
    animation: TerminalAnimation,
    github: "https://github.com/Ashborn-047/the-terminal",
    liveUrl: "https://ashborn-047.github.io/the-terminal/",
  },
  {
    id: "evolution-atlas",
    title: "Evolution Atlas",
    category: "Creative Computation",
    type: "fullstack",
    status: "Live",
    statusColor: "#7C3AED",
    description:
      "An interactive journey through the history of digital design. Features curated exhibits tracing interface evolution using liquid GLSL shaders and procedural rendering.",
    details: [
      "Kinetic Typography: Interactive text particles reacting to mouse proximity.",
      "Liquid GLSL Shaders: Shaders simulating tangible liquid-like UI surfaces.",
      "Shader Vault: Library showcasing 30+ highly-optimized GLSL experiments."
    ],
    tags: ["GLSL", "WebGL", "Procedural", "Creative Coding"],
    year: "2026",
    metrics: ["Speed: 60fps", "Scale: 30+ Shaders", "Exhibits: 7"],
    animation: EvolutionAtlasAnimation,
    github: "https://github.com/Ashborn-047/evolution-atlas",
    liveUrl: "https://ashborn-047.github.io/evolution-atlas/",
  },
  {
    id: "svg-forge",
    title: "SVG Forge",
    category: "Developer Tooling",
    type: "fullstack",
    status: "Live",
    statusColor: "#00D4FF",
    description:
      "An interactive sandbox dedicated to the art of vector motion. Serves as a visual playground for mastering pure SVG animation techniques.",
    details: [
      "Real-time Template Engine: Dynamic parameters controlling geometry and timing of inline SVGs.",
      "Integrated Code Editor: Sandbox module for manipulating inline SMIL animations.",
      "Native Filter Laboratory: Visual manipulation of displacement mapping and turbulence."
    ],
    tags: ["SVG", "SMIL", "Animation", "Developer Tool"],
    year: "2026",
    metrics: ["Speed: 60fps", "Scale: 100% Native", "Deps: 0"],
    animation: SVGForgeAnimation,
    github: "https://github.com/Ashborn-047/svg-forge",
    liveUrl: "https://ashborn-047.github.io/svg-forge/",
  },
  {
    id: "solar-core",
    title: "Solar Core",
    category: "Physics Simulation",
    type: "fullstack",
    status: "Live",
    statusColor: "#EAB308",
    description:
      "A photorealistic WebGL planetary simulator. Models celestial bodies using high-resolution NASA imagery, custom procedural noise, atmospheric scattering, and gravity equations.",
    details: [
      "Procedural Noise Engine: Real-time generation of terrain maps and textures for planet surfaces.",
      "Optimized WebGL Pipeline: Shaders and geometry configurations optimized to run at locked 60fps.",
      "Telemetry HUD: Synchronizes raw WebGL matrix state with React-driven charts and panels."
    ],
    tags: ["WebGL", "Physics", "3D Graphics", "NASA Data"],
    year: "2026",
    metrics: ["Speed: 60fps", "Scale: NASA Textures", "Engine: Custom Physics"],
    animation: SolarCoreAnimation,
    github: "https://github.com/Ashborn-047/Solar-Core-Explorer",
    liveUrl: "https://ashborn-047.github.io/Solar-Core-Explorer/",
  }
];

const skills = [
  "UI/UX Design",
  "Interaction Design",
  "Design Systems",
  "Data Visualization",
  "Creative Coding",
  "WebGL & GLSL",
  "Full-Stack Development",
  "AI Integration",
];

const experience = [
  {
    role: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    period: "2024 - Present",
    description:
      "Providing critical infrastructure support and monitoring IT operations, acting as a vital liaison between Infrastructure, Development, and Application teams. Optimizing service delivery and ensuring seamless operations through the application of ITIL practices, including incident and change management.",
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectClick = (project: Project) => {
    if (project.isCaseStudy) {
      setLocation(`/project/${project.id}`);
      window.scrollTo(0, 0);
    } else if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  const uiProjects = projects.filter((p) => p.type === "ui-ux");
  const fullstackProjects = projects.filter((p) => p.type === "fullstack");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/20 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="font-display text-2xl font-bold tracking-tight">PB</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Desktop CTA */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex rounded-full px-5 font-semibold border-primary/20 hover:bg-primary/5 hover:border-primary/40 cursor-pointer"
          >
            Let's Connect
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 bg-background/95 backdrop-blur-sm animate-fade-in">
            <div className="container py-6 space-y-4">
              <button
                onClick={() => scrollToSection("work")}
                className="block w-full text-left px-4 py-2.5 hover:bg-accent rounded-lg transition-colors text-sm font-medium cursor-pointer"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2.5 hover:bg-accent rounded-lg transition-colors text-sm font-medium cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2.5 hover:bg-accent rounded-lg transition-colors text-sm font-medium cursor-pointer"
              >
                Contact
              </button>
              <Button
                size="sm"
                className="w-full rounded-full mt-2 cursor-pointer"
                onClick={() => scrollToSection("contact")}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-24 sm:py-32">
        {/* Layered animated backdrop blobs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-5%] top-[10%] w-72 h-72 sm:w-[550px] sm:h-[550px] bg-gradient-to-tr from-primary/15 via-indigo-400/10 to-violet-500/15 opacity-50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[5%] bottom-[5%] w-80 h-80 sm:w-[400px] sm:h-[400px] bg-gradient-to-br from-purple-400/10 via-pink-300/5 to-primary/10 opacity-40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute left-[40%] top-[15%] w-40 h-40 bg-gradient-to-r from-indigo-300/8 to-primary/8 opacity-30 rounded-full blur-2xl"
        />

        {/* Dot grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left column — Text content */}
          <div className="space-y-8 lg:col-span-7">
            {/* Tagline with animated entrance */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Creative Technologist
              </span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
            </motion.div>

            {/* Main title with gradient accent */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight">
                <span className="text-foreground">Pushan</span>
                <br />
                <span className="hero-gradient-text">Bhattacharyya</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed font-light"
            >
              I craft digital experiences at the intersection of <span className="text-foreground font-medium">design</span>, <span className="text-foreground font-medium">technology</span>, and <span className="text-foreground font-medium">human behavior</span>. Translating complex system requirements into premium, high-performance interfaces.
            </motion.p>

            {/* CTA Buttons with staggered entrance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="rounded-full group w-full sm:w-auto justify-center px-8 font-semibold cursor-pointer shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                onClick={() => scrollToSection("work")}
              >
                View Selected Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full w-full sm:w-auto justify-center px-8 font-semibold border-primary/20 hover:bg-primary/5 hover:border-primary/40 cursor-pointer transition-all"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </motion.div>

            {/* Scrolling ticker of capabilities */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-4 pt-4 text-xs text-muted-foreground/70 font-mono"
            >
              <span className="hidden sm:inline">→</span>
              <span>React</span>
              <span className="text-primary/30">·</span>
              <span>WebGL</span>
              <span className="text-primary/30">·</span>
              <span>GLSL</span>
              <span className="text-primary/30">·</span>
              <span>Figma</span>
              <span className="text-primary/30">·</span>
              <span>Systems Design</span>
            </motion.div>
          </div>

          {/* Right column — Enhanced stats card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, type: "spring", stiffness: 100 }}
            className="block lg:col-span-5 w-full mt-10 lg:mt-0"
          >
            <div className="relative">
              {/* Glow ring behind card */}
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 via-transparent to-indigo-400/10 rounded-3xl blur-xl opacity-60" />
              
              <div className="relative glass p-8 space-y-8 shadow-2xl max-w-md mx-auto lg:ml-auto lg:mr-0 border-white/40 bg-white/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-mono text-primary uppercase tracking-widest font-bold">PORTFOLIO FOCUS</p>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Aesthetic Engineering</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/50">
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary flex items-center gap-1.5"><Award className="w-5 h-5" /> 4</p>
                    <p className="text-xs text-muted-foreground font-medium">UI/UX Case Studies</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold text-primary flex items-center gap-1.5"><Cpu className="w-5 h-5" /> 5</p>
                    <p className="text-xs text-muted-foreground font-medium">Fullstack Systems</p>
                  </div>
                </div>
                
                <div className="rounded-xl bg-gradient-to-r from-primary/5 to-indigo-500/5 p-4 border border-primary/10">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    "Good design is not just what it looks like and feels like. Design is how it works."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 sm:py-32 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container space-y-20">
          
          {/* Section header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                Showcase
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Selected Projects</h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg leading-relaxed">
              Curated experiments and high-fidelity case studies bridging human experience and clean computational execution.
            </p>
          </div>

          {/* SUBSECTION 1: UI/UX CASE STUDIES (Full width cards for editorial depth) */}
          <div className="space-y-12">
            <div className="space-y-2 border-b border-border/40 pb-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">UI/UX Case Studies</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">In-depth research-backed transformations prioritizing usability and validation</p>
            </div>

            <div className="grid gap-8 sm:gap-12">
              {uiProjects.map((project, index) => {
                const AnimationComponent = project.animation;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project)}
                    className={`group glass p-6 sm:p-8 md:p-12 transition-all duration-300 cursor-pointer rounded-2xl ${
                      hoveredProject === project.id ? "shadow-2xl scale-[1.015]" : "shadow-md"
                    } bg-white/50 border-white/20`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      {/* Project info */}
                      <div className="lg:col-span-8 space-y-6">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <p className="text-xs font-mono tracking-widest text-primary uppercase">
                              {project.category}
                            </p>
                            <span
                              className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white whitespace-nowrap"
                              style={{ backgroundColor: project.statusColor }}
                            >
                              {project.status}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              {project.github && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.github, "_blank", "noopener,noreferrer");
                                  }}
                                  className="p-1.5 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer animate-pulse-slow"
                                  title="View Repository"
                                >
                                  <Github className="w-4 h-4" />
                                </button>
                              )}
                              {project.liveUrl && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                                  }}
                                  className="p-1.5 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                                  title="View Live Demo"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-xs sm:text-sm text-muted-foreground font-semibold">{project.year}</p>
                        </div>

                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
                          {project.description}
                        </p>

                        {/* Key details */}
                        <div className="space-y-2.5 pt-2">
                          {project.details.map((detail, idx) => (
                            <div key={idx} className="flex gap-3 text-xs sm:text-sm text-foreground/70 leading-relaxed">
                              <span className="text-primary flex-shrink-0">•</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-muted/80 text-muted-foreground text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Metrics */}
                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="text-xs bg-primary/5 px-2.5 py-1 rounded border border-primary/10">
                              <p className="text-primary font-mono font-medium">{metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Interactive SVG Animation placeholder */}
                      <div className="lg:col-span-4 flex items-center justify-center">
                        <div className="w-full h-44 sm:h-52 glass p-4 rounded-xl group-hover:scale-105 transition-transform duration-300 max-w-sm border-white/40 bg-white/60">
                          <AnimationComponent />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* SUBSECTION 2: FULLSTACK & COMPUTATIONAL PROJECTS (Responsive grid cards) */}
          <div className="space-y-12">
            <div className="space-y-2 border-b border-border/40 pb-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">Fullstack & Computational Projects</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">High-performance backends, custom rendering, and systems code architectures</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fullstackProjects.map((project) => {
                const AnimationComponent = project.animation;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                    onClick={() => handleProjectClick(project)}
                    className={`group glass p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer rounded-2xl ${
                      hoveredProject === project.id ? "shadow-2xl scale-[1.02]" : "shadow-md"
                    } bg-white/40 border-white/20`}
                  >
                    <div className="space-y-5">
                      {/* Interactive Visual Placeholder */}
                      <div className="w-full h-40 glass p-4 rounded-xl flex items-center justify-center border-white/30 bg-white/50">
                        <div className="w-full h-full max-w-[150px]">
                          <AnimationComponent />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
                            {project.category}
                          </p>
                          <span
                            className="px-2 py-0.5 rounded-full text-[9px] font-bold text-white"
                            style={{ backgroundColor: project.statusColor }}
                          >
                            {project.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <h4 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {project.title}
                          </h4>
                          <div className="flex items-center gap-1.5">
                            {project.github && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.github, "_blank", "noopener,noreferrer");
                                }}
                                className="p-1 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                                title="View Repository"
                              >
                                <Github className="w-3.5 h-3.5" />
                              </button>
                            )}
                            {project.liveUrl && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                                }}
                                className="p-1 bg-muted rounded-full hover:bg-primary hover:text-white transition-colors cursor-pointer"
                                title="View Live Demo"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-muted-foreground">{project.year}</p>
                      </div>

                      <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key details list */}
                      <div className="space-y-1.5 pt-2">
                        {project.details.map((detail, idx) => (
                          <div key={idx} className="flex gap-2 text-xs text-foreground/70">
                            <span className="text-primary">•</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-5 mt-5 border-t border-border/40">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 bg-muted/60 text-muted-foreground text-[10px] font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-2.5">
                        {project.metrics.map((metric, idx) => (
                          <span key={idx} className="text-[10px] font-mono text-primary bg-primary/5 px-2 py-0.5 rounded border border-primary/10">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  About Me
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Skills & Expertise</h2>
            </div>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed font-light">
              I apply systematic thinking to digital experiences, translating complex requirements into intuitive, human-centered interfaces. Combining clean engineering logic with modern aesthetics to craft interactive platforms that deliver value.
            </p>

            {/* Skills grid with ample padding and layout */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {skills.map((skill) => (
                <div key={skill} className="glass px-4 py-4 text-center rounded-xl border-white/30 bg-white/40 shadow-sm">
                  <p className="text-xs sm:text-sm font-semibold text-foreground">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Experience */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                <span className="text-xs font-semibold tracking-widest text-primary uppercase">
                  Experience
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold">Professional Journey</h2>
            </div>

            {/* Experience cards with spacious design */}
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="glass p-6 sm:p-8 rounded-xl border-l-4 border-primary bg-white/40 shadow-sm space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.role}</h3>
                    <p className="text-sm text-primary font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">{exp.period}</p>
                  <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Personal Projects Note */}
            <div className="glass p-6 rounded-xl border-l-4 border-accent bg-white/30 shadow-sm">
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                All projects showcased in this portfolio are <span className="font-semibold text-foreground">personal projects</span> developed to explore creative computation, advanced UI/UX patterns, and experimental technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-4xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-4xl sm:text-5xl font-bold">Let's Build Something</h2>
            <p className="text-base sm:text-lg text-foreground/80 max-w-lg mx-auto leading-relaxed font-light">
              I'm always open to discussing new projects, design systems, or creative collaborations. Let's create something meaningful together.
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:bhattacharyyapushan@gmail.com">
              <Button size="lg" className="rounded-full px-8 font-semibold cursor-pointer">
                <Mail className="mr-2.5 w-4 h-4" />
                Send Email
              </Button>
            </a>
            <a href="https://github.com/Ashborn-047" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full px-8 font-semibold border-primary/20 hover:bg-primary/5 cursor-pointer">
                <Github className="mr-2.5 w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/pushan-bhattacharyya-40b718287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="rounded-full px-8 font-semibold border-primary/20 hover:bg-primary/5 cursor-pointer">
                <Linkedin className="mr-2.5 w-4 h-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          <p>© 2026 Pushan Bhattacharyya. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="mailto:bhattacharyyapushan@gmail.com" className="hover:text-foreground transition-colors" title="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href="https://github.com/Ashborn-047" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/in/pushan-bhattacharyya-40b718287/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
