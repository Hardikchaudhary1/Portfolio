import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const Experience = () => {
    return (
        <section id="experience" className="py-28 relative z-10">
            <div className="max-w-4xl mx-auto px-6">
                <SectionHeading
                    title="Experience"
                    subtitle="Where I've worked."
                />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 relative"
                >
                    {/* Timeline line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/[0.06] to-transparent"></div>

                    <div className="pl-10 relative">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-1 w-[7px] h-[7px] -translate-x-[3px] bg-primary rounded-full">
                            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-foreground">Frontend Developer</h3>
                                <p className="text-sm text-primary font-medium mt-1">Easeflo Softwares Pvt Ltd</p>
                            </div>
                            <span className="text-xs uppercase tracking-widest text-muted bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 w-fit shrink-0">
                                8 months
                            </span>
                        </div>

                        <p className="text-sm text-muted leading-relaxed max-w-2xl">
                            Built and maintained scalable frontend interfaces for a SaaS content workflow management
                            platform. Implemented complex client and project management features, optimized rendering
                            performance, and established clean component architecture patterns used across the product.
                        </p>

                        {/* Skills used */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {['React', 'Tailwind CSS', 'REST APIs', 'State Management', 'UI/UX'].map(skill => (
                                <span key={skill} className="px-2.5 py-1 text-[10px] uppercase tracking-widest text-muted bg-white/[0.02] border border-white/[0.04]">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
