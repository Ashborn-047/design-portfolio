import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Minimalist Glassmorphism with Editorial Elegance
 * 
 * This portfolio showcases Pushan's work through a refined, content-first aesthetic.
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
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "evolution-atlas",
    title: "Evolution Atlas",
    subtitle: "Interactive Digital Experience",
    description:
      "An interactive digital experience exploring the journey of life on Earth through time, data, and beautiful visual storytelling. Engineered a modular, preference-driven discovery system replacing static feeds.",
    tags: ["UI/UX Design", "Interaction Design", "Data Visualization"],
    year: "2024",
    featured: true,
  },
  {
    id: "webtoon-redesign",
    subtitle: "Platform Redesign",
    title: "Webtoon Redesign",
    description:
      "Engineered a modular, preference-driven discovery system replacing static feeds, improving navigation by 35% and user engagement through consistent spacing and typography tokens.",
    tags: ["UX Research", "Prototyping", "Figma"],
    year: "2024",
  },
  {
    id: "revolution-atlas",
    title: "Revolution Atlas",
    subtitle: "Digital Interface Design",
    description:
      "An effective dashboard of interface design exploring the evolution of UI/UX typography and shelters from print era constraints to ambient computing.",
    tags: ["Design Systems", "Typography", "Interaction"],
    year: "2023",
    featured: true,
  },
  {
    id: "silverwail-telemetry",
    title: "SilverWail Telemetry",
    subtitle: "Real-time Data Tracking",
    description:
      "Drew visual direction from the Mercedes AMG Petronas F1 livery — translating the team's iconic silver-green palette into a high-performance telemetry interface.",
    tags: ["Data Visualization", "Real-time Systems", "Design"],
    year: "2023",
  },
  {
    id: "the-terminal",
    title: "The Terminal",
    subtitle: "Creative Coding Project",
    description:
      "Crafted a Neo-Brutalist UI aesthetic, embracing raw typography, deliberate contrast, and exposed structure to create an interface that feels uncompromising and direct.",
    tags: ["Creative Coding", "UI Design", "Brutalism"],
    year: "2023",
  },
];

const skills = [
  "UI/UX Design",
  "Interaction Design",
  "Design Systems",
  "Data Visualization",
  "Prototyping",
  "Figma",
  "Creative Coding",
  "Typography",
];

const experience = [
  {
    role: "UI/UX Designer & Creative Technologist",
    company: "Freelance",
    period: "2023 - Present",
    description:
      "Designing and building digital experiences at the intersection of design, technology, and human behavior.",
  },
  {
    role: "Design Intern",
    company: "Academy of Technology",
    period: "2022 - 2023",
    description: "Learned systems thinking, attention to detail, and stakeholder communication.",
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
              I craft meaningful digital experiences at the intersection of design, technology, and human behavior.
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

          {/* Hero visual - using the generated mockup */}
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
                        <p className="text-xs font-medium tracking-widest text-primary uppercase mb-2">
                          {project.year}
                        </p>
                        <h3 className="font-display text-3xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                      </div>
                      {project.featured && (
                        <div className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          Featured
                        </div>
                      )}
                    </div>

                    <p className="text-base text-foreground/80 leading-relaxed max-w-xl">
                      {project.description}
                    </p>

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
                  </div>

                  {/* Project visual */}
                  <div className="hidden md:block">
                    <img
                      src={project.id === "evolution-atlas" ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/project-evolution-emzAkeWZVtNgngyuPSMryS.webp" : project.id === "silverwail-telemetry" ? "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/project-telemetry-Xnd25PiXqbCcvf2KT2XGZf.webp" : "https://d2xsxph8kpxj0f.cloudfront.net/310519663672682582/hBo9Gfa8vpL3cyneHnmG6T/project-webtoon-3gn9LQpGv6f7ad8yXapmSG.webp"}
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
              I started as a mechanical engineer, fascinated by how things work. But I found my true calling not in gears and pistons, but in pixels and logic. Today, I apply systems thinking to digital experiences, translating complex requirements into intuitive, human-centered interfaces.
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
              I'm always interested in hearing about new projects and opportunities.
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
