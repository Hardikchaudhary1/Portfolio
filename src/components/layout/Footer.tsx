import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
    { icon: <Github className="w-4 h-4" />, href: 'https://github.com/Hardikchaudhary1', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com/', label: 'Twitter' },
];

const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-white/[0.04]">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-sm text-muted">
                    <span>© {new Date().getFullYear()}</span>
                    <span className="text-foreground/60 font-medium">hardik.dev</span>
                </div>

                <div className="flex items-center gap-1">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-muted/40 hover:text-foreground transition-colors"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
