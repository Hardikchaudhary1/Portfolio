import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Layout, Code2, Cpu, Zap } from 'lucide-react';

const highlights = [
    {
        icon: <Layout className="w-5 h-5" />,
        title: "SaaS Products",
        description: "Scalable interfaces for complex business workflows."
    },
    {
        icon: <Code2 className="w-5 h-5" />,
        title: "MERN Stack",
        description: "Full-stack JavaScript from database to deployment."
    },
    {
        icon: <Cpu className="w-5 h-5" />,
        title: "AI Integration",
        description: "LLMs and AI APIs woven into user experiences."
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: "Performance",
        description: "Optimized for speed, accessibility, and scale."
    }
];

const About = () => {
    return (
        <section id="about" className="py-28 relative z-10 w-full">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    title="About"
                    subtitle="My approach to building software."
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start mt-16">
                    {/* Text — takes 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <p className="text-lg text-muted leading-relaxed">
                            I'm a Computer Science (AI) student who bridges the gap between design and engineering.
                            Building SaaS products taught me that great software must be{' '}
                            <span className="text-foreground">intuitive</span>,{' '}
                            <span className="text-foreground">fast</span>, and{' '}
                            <span className="text-foreground">beautiful</span>.
                        </p>
                        <p className="text-lg text-muted leading-relaxed">
                            Whether it's architecting complex state management, integrating AI into
                            production workflows, or refining micro-interactions — I obsess over the
                            details that separate good software from great software.
                        </p>

                        {/* Stats row */}
                        <div className="flex gap-12 pt-6 border-t border-white/[0.04]">
                            <div>
                                <p className="text-3xl font-bold text-foreground">2+</p>
                                <p className="text-xs uppercase tracking-widest text-muted mt-1">Projects Shipped</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-foreground">8</p>
                                <p className="text-xs uppercase tracking-widest text-muted mt-1">Months Experience</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-foreground">15+</p>
                                <p className="text-xs uppercase tracking-widest text-muted mt-1">Technologies</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Cards — takes 2 cols */}
                    <div className="lg:col-span-2 grid grid-cols-1 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                                className="group flex items-start gap-4 p-5 bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-primary/8 text-primary shrink-0 mt-0.5">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground mb-1">{item.title}</h4>
                                    <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
