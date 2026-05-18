import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Minimalist Glassmorphism with Editorial Elegance
 * 
 * This portfolio showcases Pushan's actual work through a refined, content-first aesthetic.
 * Key elements:
 * - Glassmorphic cards with frosted backgrounds and soft shadows
 * - Serif typography (Playfair Display) for headings, sans-serif (Inter) for body
 * - Light pastel colors (off-white, soft lavender) with deep charcoal accents
 * - Asymmetric layouts that feel spacious and premium
 * - Subtle animations that guide attention without distraction
 */

interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  statusColor: string;
  description: string;
  details: string[];
  tags: string[];
  year: string;
  metrics: string[];
  links?: { label: string; url: string }[];
  image: string;
}

const projects: Project[] = [
  {
    id: "webtoon-redesign",
    title: "Webtoon Redesign",
    category: "UI/UX Transformation",
    status: "Case Study",
    statusColor: "#00DC64",
    description:
      "Webtoon's interface suffered from jarring horizontal overflow issues and clunky navigation. This high-fidelity Next.js prototype addresses these flaws with a collapsible navigation rail and strict layout boundaries, emphasizing a premium 'Webtoon Green' aesthetic.",
    details: [
      "Collapsible Navigation Rail: A smooth, fully collapsible navigation rail with sleek 300ms transitions.",
      "Strict Layout Boundaries: Eliminates annoying horizontal overflow bugs present in the original web app.",
      "Modernized Profile Tabs: Intuitive scroll-navigation and optimized profile tabs.",
      "Webtoon Design System: A standardized, premium UI theme centered around the signature 'Webtoon Green' brand token.",
    ],
    tags: ["Next.js", "Radix UI", "Zustand", "UI Design"],
    year: "2024",
    metrics: ["Speed: Next 14", "Scale: Radix UI", "Uptime: Zustand"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/webtoon-redesign-NiCCpvMSHyA49ugKgG4PHo.webp",
  },
  {
    id: "silverwall-telemetry",
    title: "SilverWall Telemetry",
    category: "Data & Analytics",
    status: "In Progress",
    statusColor: "#E10600",
    description:
      "SilverWall is a high-performance Formula 1 telemetry engine that bridges the gap between raw track data and professional race strategy. Built with a custom UI inspired by the Mercedes-AMG SilverWall, it provides a real-time pit-wall experience.",
    details: [
      "SpacetimeDB Backend: A distributed backend for ultra-low latency state management.",
      "Real-time Telemetry Ingestion: Processes live speed, throttle, and braking data using OpenF1 WebSocket streams.",
      "AI Driver Analysis: Custom Driver Performance Analysis engine with real-time race strategy commentary by Google Gemini.",
      "High-Fidelity Telemetry UI: Sleek, premium pit-wall interface design system inspired by official Mercedes-AMG dashboards.",
    ],
    tags: ["SpacetimeDB", "WebSocket", "Google Gemini", "Real-time Data"],
    year: "2024",
    metrics: ["Speed: 20ms latency", "Scale: 20+ Drivers", "Uptime: 99.9%"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/silverwall-telemetry-UqT6C2gLwVdCZ7y6fSCsmZ.webp",
  },
  {
    id: "the-terminal",
    title: "The Terminal",
    category: "Systems",
    status: "Live",
    statusColor: "#28CA41",
    description:
      "The Terminal is more than a simple shell simulator—it's a fully-realized Linux-inspired browser operating system. It features a custom in-memory virtual file system, real-time signal propagation, and a sophisticated gamification engine.",
    details: [
      "Boot-Sequence Architecture: Authentic system initialization with identity verification, cryptographic loading animations, and memory allocation.",
      "Deep Gamification Engine: Fully custom reward system featuring Daily Quests, Streak Freezes, and XP multipliers.",
      "Custom VFS (Virtual File System): In-memory terminal storage supporting file navigation and text editing.",
      "Terminal Labs: Interactive assessment modules for structured educational tracks with automated scripting evaluations.",
    ],
    tags: ["Browser OS", "Gamification", "VFS", "Education"],
    year: "2023",
    metrics: ["Speed: 50+ Built-ins", "Scale: 1M+ XP Points", "Uptime: 1.2k+ Users"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/the-terminal-CgULrdTbgxWFBn4wLNvom.webp",
  },
  {
    id: "evolution-atlas",
    title: "Evolution Atlas",
    category: "Creative Computation",
    status: "Live",
    statusColor: "#7C3AED",
    description:
      "Evolution Atlas is an interactive journey through the history of digital design. It features meticulously curated experiments tracing the evolution of interfaces from static tools to ambient computing, utilizing liquid GLSL shaders and procedural rendering.",
    details: [
      "Kinetic Typography: Custom interactive text particles that react organically to mouse hover proximity and cursor acceleration.",
      "Liquid GLSL Shaders: Advanced shaders simulating tangible, liquid-like UI surfaces that deform upon touch.",
      "Aether Sync: Implements interactive noise fields to visualize asynchronous data streams as flow fields.",
      "Shader Vault: An embeddable library showcasing 30+ highly-optimized GLSL rendering experiments.",
    ],
    tags: ["GLSL", "WebGL", "Procedural", "Creative Coding"],
    year: "2023",
    metrics: ["Speed: 60fps", "Scale: 30+ Shaders", "Uptime: 7 Exhibits"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/evolution-atlas-RDbAF37N83bbqcAD3NUi63.webp",
  },
  {
    id: "svg-forge",
    title: "SVG Forge",
    category: "Developer Tooling",
    status: "Live",
    statusColor: "#00D4FF",
    description:
      "SVG Forge is an interactive sandbox dedicated to the art of vector motion. It serves as a comprehensive visual playground and reference for mastering pure SVG animation techniques—from complex SMIL motion paths to hardware-accelerated filter distortions.",
    details: [
      "Real-time Template Engine: Live interactive parameters control the geometry, scale, and timing of inline SVGs.",
      "Integrated Code Editor: Sandbox module for directly manipulating inline SMIL animations and sophisticated <filter> markup.",
      "Command Palette: Fuzzy-searchable control center enabling developers to navigate between animation categories.",
      "Native Filter Laboratory: Real-time visual manipulation of complex SVG filters like displacement mapping and turbulence.",
    ],
    tags: ["SVG", "SMIL", "Animation", "Developer Tool"],
    year: "2023",
    metrics: ["Speed: 60fps", "Scale: 100% Native", "Uptime: 0 Dependencies"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/svg-forge-CKm4cMcnuTDEd4TWnQK4Db.webp",
  },
  {
    id: "solar-core",
    title: "Solar Core",
    category: "Physics Simulation",
    status: "Live",
    statusColor: "#EAB308",
    description:
      "Solar Core Explorer is a photorealistic WebGL planetary simulator. It models celestial bodies using high-resolution NASA imagery, custom procedural noise, atmospheric scattering shaders, and gravity equations.",
    details: [
      "Procedural Noise Engine: Generates highly-detailed terrain maps and procedural textures for fictional planet surfaces in real-time.",
      "Optimized WebGL Pipeline: Custom shaders and geometry configurations optimized to run at locked 60fps on mobile and desktop.",
      "Interactive Orbital Camera: A dual-mode camera enabling seamless planetary traversal and cinematic orbital paths.",
      "Telemetry HUD: Synchronizes the raw WebGL rendering matrix state with React-driven charts and stats panels.",
    ],
    tags: ["WebGL", "Physics", "3D Graphics", "NASA Data"],
    year: "2023",
    metrics: ["Speed: 60fps", "Scale: NASA Textures", "Uptime: Custom Physics Engine"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/solar-core-LruAkiNNEDPk2GHhTsxXog.webp",
  },
  {
    id: "lifesync",
    title: "LifeSync",
    category: "AI & Systems",
    status: "In Progress",
    statusColor: "#A78BFA",
    description:
      "LifeSync is an ambitious personal orchestration system designed to unify behavioral analytics, adaptive AI personas, and seamless smart automation. It uses an active vector-based personality engine to map abstract life goals directly to actionable habits.",
    details: [
      "Adaptive Persona Engine: Personalized, context-aware AI assistant leveraging OpenAI embeddings to act as a focused digital twin.",
      "Vector Behavioral Scoring: Low-latency vector database tracking routines and optimizing habits based on mathematical vectors.",
      "Cross-Platform Event Bus: Ultra-fast data synchronization across web and native mobile application interfaces.",
      "MindMesh Integration: Features a visual canvas mapping cognitive focus, mood flows, and mindfulness trends.",
    ],
    tags: ["AI", "Vector DB", "OpenAI", "Wellness Tech"],
    year: "2024",
    metrics: ["Speed: Real-time sync", "Scale: 1M+ Vector DB Vectors", "Uptime: 94% Accuracy"],
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/lifesync-oCn4nMbmjxkNpcbD8UR7aN.webp",
  },
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
    role: "UI/UX Designer & Creative Technologist",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Designing and building digital experiences at the intersection of design, technology, and human behavior. Specializing in high-performance web applications and creative computational projects.",
  },
  {
    role: "Systems Engineer",
    company: "Cognizant Technology Solutions",
    period: "2022 - 2023",
    description:
      "Provided infrastructure support and service management across cross-functional teams. Specialized in visualization, Linux administration, and network monitoring tools.",
  },
];

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/20 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="font-display text-2xl font-bold tracking-tight">PB</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#work" className="text-sm hover:text-primary transition-colors">
              Work
            </a>
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <Button variant="outline" size="sm" className="rounded-full">
            Let's Connect
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Decorative glass shape */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 glass-subtle opacity-30 rounded-full blur-3xl" />

        <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Accent line */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Creative Technologist
              </span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="font-display text-6xl md:text-7xl font-bold leading-tight tracking-tight">
                Pushan
                <br />
                Bhattacharyya
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              I craft meaningful digital experiences at the intersection of design, technology, and human behavior. Specializing in high-performance web applications and creative computational projects.
            </p>

            {/* CTA Button */}
            <div className="flex gap-4 pt-4">
              <Button size="lg" className="rounded-full group">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden md:block">
            <div className="glass p-0 overflow-hidden rounded-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/hero-abstract-figQxjaTgy3QfXBihAomnJ.webp"
                alt="Abstract hero visual"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-gradient-to-b from-background via-accent/5 to-background">
        <div className="container space-y-16">
          {/* Section header */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
              <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Featured Work
              </span>
            </div>
            <h2 className="font-display text-5xl font-semibold">Selected Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group glass p-8 md:p-12 transition-all duration-300 cursor-pointer ${
                  hoveredProject === project.id ? "shadow-2xl scale-[1.02]" : "shadow-lg"
                } ${index % 2 === 1 ? "md:ml-12" : ""}`}
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Project info */}
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                            {project.category}
                          </p>
                          <span
                            className="px-2 py-1 rounded-full text-xs font-semibold text-white"
                            style={{ backgroundColor: project.statusColor }}
                          >
                            {project.status}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{project.year}</p>
                      </div>
                    </div>

                    <p className="text-base text-foreground/80 leading-relaxed max-w-xl">
                      {project.description}
                    </p>

                    {/* Key details */}
                    <div className="space-y-2 pt-4">
                      {project.details.slice(0, 2).map((detail, idx) => (
                        <div key={idx} className="flex gap-2 text-sm text-foreground/70">
                          <span className="text-primary">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="text-xs">
                          <p className="text-muted-foreground">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project visual */}
                  <div className="hidden md:block">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24">
        <div className="container grid md:grid-cols-2 gap-16">
          {/* Left column - Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  About Me
                </span>
              </div>
              <h2 className="font-display text-4xl font-semibold">Skills & Expertise</h2>
            </div>

            <p className="text-base text-foreground/80 leading-relaxed">
              I started as a mechanical engineer, fascinated by how things work. But I found my true calling not in gears and pistons, but in pixels and logic. Today, I apply systems thinking to digital experiences, translating complex requirements into intuitive, human-centered interfaces. I don't just build; I craft universes where ideas can live.
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {skills.map((skill) => (
                <div key={skill} className="glass p-4 text-center rounded-lg">
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Experience */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Experience
                </span>
              </div>
              <h2 className="font-display text-4xl font-semibold">Professional Journey</h2>
            </div>

            {/* Experience cards */}
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="glass p-6 rounded-lg space-y-3 border-l-4 border-primary">
                  <div>
                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                    <p className="text-sm text-primary font-medium">{exp.company}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-foreground/80">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-background to-accent/10">
        <div className="container max-w-3xl text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-5xl font-semibold">Let's Build Something</h2>
            <p className="text-lg text-foreground/80">
              I'm always interested in hearing about new projects and opportunities. Let's collaborate and create something meaningful.
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:bhattacharyyapushan2@gmail.com">
              <Button size="lg" className="rounded-full w-full sm:w-auto">
                <Mail className="mr-2 w-4 h-4" />
                Send Email
              </Button>
            </a>
            <a href="https://github.com/Ashborn-047" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                <Github className="mr-2 w-4 h-4" />
                GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/pushan-bhattacharyya-40b718287/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                <Linkedin className="mr-2 w-4 h-4" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 bg-background/50 backdrop-blur-sm">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Pushan Bhattacharyya. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
