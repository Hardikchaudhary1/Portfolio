import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background z-0 overflow-hidden">
                {/* Vine-Red Glowing Orbs */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#4a0e1a] opacity-[0.06] rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-[#5c1424] opacity-[0.08] rounded-full blur-[60px] pointer-events-none"></div>
                <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[80px] h-[80px] bg-[#6b1a2a] opacity-[0.12] rounded-full blur-[30px] pointer-events-none"></div>

                {/* Ambient */}
                <div className="absolute top-[40%] left-[15%] w-[500px] h-[400px] bg-[#2a0a12]/15 rounded-[100%] filter blur-[160px] animate-pulse-slow pointer-events-none"></div>
                <div className="absolute bottom-[5%] right-[15%] w-[500px] h-[400px] bg-[#2a0a12]/12 rounded-[100%] filter blur-[160px] animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        {/* Status badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/[0.03] border border-white/[0.06] text-xs tracking-widest uppercase text-muted mx-auto"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/60"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary/80"></span>
                            </span>
                            Available for opportunities
                        </motion.div>

                        {/* Name */}
                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground leading-[0.9]">
                            Hardik
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#c4566a] to-primary/40">Chaudhary</span>
                        </h1>

                        {/* Role */}
                        <p className="text-lg md:text-xl text-muted font-light max-w-xl mx-auto leading-relaxed">
                            Frontend developer crafting <span className="text-foreground/90 font-normal">SaaS platforms</span> and{' '}
                            <span className="text-foreground/90 font-normal">AI-powered web applications</span> with precision and care.
                        </p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap items-center justify-center gap-4 pt-4"
                        >
                            <a
                                href="#projects"
                                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.04] border border-white/[0.08] hover:border-primary/30 text-sm font-medium text-foreground hover:bg-white/[0.06] transition-all duration-300"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <a
                                href="https://github.com/Hardikchaudhary1"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-muted hover:text-foreground transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 hidden md:flex"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
