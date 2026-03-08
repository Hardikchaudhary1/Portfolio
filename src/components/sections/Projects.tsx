import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { ExternalLink, Github, Sparkles, Layers } from 'lucide-react';

const projects = [
    {
        title: "TrigType",
        subtitle: "AI-Powered Typing Platform",
        description: "Gamified typing platform with real-time multiplayer battles, adaptive difficulty, AI-generated content and comprehensive analytics dashboard.",
        tech: ["React.js", "Supabase", "Vercel", "AI APIs"],
        link: "https://trigtype.vercel.app/",
        github: "https://github.com/Hardikchaudhary1/trigtype",
        icon: <Sparkles className="w-5 h-5" />,
    },
    {
        title: "Easeflo",
        subtitle: "SaaS Workflow Manager",
        description: "Content workflow management platform for agencies — managing projects, clients, deadlines and content production pipelines at scale.",
        tech: ["React", "Tailwind CSS", "REST APIs", "State Management"],
        link: "https://easeflo.com/",
        github: "",
        icon: <Layers className="w-5 h-5" />,
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-28 relative z-10">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    title="Projects"
                    subtitle="Things I've built."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden"
                        >
                            {/* Top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="p-8 flex flex-col h-full">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-11 h-11 flex items-center justify-center bg-white/[0.03] border border-white/[0.06] text-primary group-hover:bg-primary/10 transition-colors duration-300">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="p-2 text-muted/50 hover:text-foreground transition-colors">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-muted/50 hover:text-foreground transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary/90 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-xs uppercase tracking-widest text-muted mb-4">{project.subtitle}</p>
                                <p className="text-sm text-muted leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech */}
                                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/[0.04]">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-[11px] font-medium tracking-wide bg-white/[0.03] border border-white/[0.06] text-muted">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
