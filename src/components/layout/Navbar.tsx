import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeHash, setActiveHash] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Check if we are at the bottom of the page
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300;

            if (isAtBottom) {
                setActiveHash('#contact');
                return;
            }

            const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement);
            const scrollPosition = window.scrollY + 250;

            let currentSection = '';
            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = `#${section.id}`;
                }
            }

            if (currentSection) {
                setActiveHash(currentSection);
            } else if (window.scrollY < 100) {
                setActiveHash('');
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Run once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setActiveHash(href);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 border-b border-primary/10' : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" onClick={(e) => scrollToSection(e, '#hero')} className="group flex items-center gap-0.5 cursor-pointer select-none">
                    <span className="text-sm font-bold tracking-[0.2em] text-foreground uppercase">hardik</span>
                    <span className="text-sm font-bold text-primary">.</span>
                    <span className="text-[10px] font-bold tracking-[0.1em] text-foreground/40 uppercase">dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 cursor-pointer ${activeHash === item.href ? 'text-foreground' : 'text-muted hover:text-foreground'
                                }`}
                        >
                            {item.name}
                            {activeHash === item.href ? (
                                <motion.div
                                    layoutId="nav-active"
                                    className="absolute inset-0 bg-primary/[0.06] border border-primary/[0.12] -z-10"
                                    initial={false}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                >
                                    <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-primary/50"></div>
                                </motion.div>
                            ) : (
                                <span className="absolute bottom-0 left-1/4 right-1/4 h-px bg-primary/0 hover:bg-primary/30 transition-colors duration-300"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground/70 hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden border-t border-white/5"
                    >
                        <div className="flex flex-col px-6 py-6 gap-1" style={{ backgroundColor: 'rgba(8, 8, 8, 0.95)' }}>
                            {navLinks.map((item, i) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`py-3 px-4 text-sm font-medium transition-all cursor-pointer ${activeHash === item.href ? 'text-primary bg-primary/[0.04] border-l-2 border-primary' : 'text-muted hover:text-foreground border-l-2 border-transparent hover:border-primary/20'
                                        }`}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
