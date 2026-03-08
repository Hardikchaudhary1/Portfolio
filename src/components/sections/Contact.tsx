import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Mail, Phone, Linkedin, Copy, Check, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const copyToClipboard = (text: string, type: 'email' | 'phone') => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    return (
        <section id="contact" className="py-28 relative z-10 w-full">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <SectionHeading
                    title="Contact"
                    subtitle="Reach out directly."
                />

                <div className="flex flex-col items-center gap-4 mt-16 max-w-xl mx-auto">
                    {/* Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="group flex items-center gap-6 px-8 py-6 w-full bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/8 text-primary shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-[10px] uppercase tracking-widest text-muted font-medium mb-1">Email</p>
                            <p className="text-base text-foreground font-medium">writeto12345@gmail.com</p>
                        </div>
                        <button
                            onClick={() => copyToClipboard('writeto12345@gmail.com', 'email')}
                            className="p-2 text-muted hover:text-foreground transition-colors shrink-0"
                            title="Copy email"
                        >
                            {copiedEmail ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group flex items-center gap-6 px-8 py-6 w-full bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/8 text-primary shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-[10px] uppercase tracking-widest text-muted font-medium mb-1">Phone</p>
                            <p className="text-base text-foreground font-medium">+91 96905 70787</p>
                        </div>
                        <button
                            onClick={() => copyToClipboard('+919690570787', 'phone')}
                            className="p-2 text-muted hover:text-foreground transition-colors shrink-0"
                            title="Copy phone"
                        >
                            {copiedPhone ? <Check className="w-3.5 h-3.5 text-primary" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                    </motion.div>

                    {/* LinkedIn */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group flex items-center gap-6 px-8 py-6 w-full bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 cursor-pointer"
                        onClick={() => window.open('https://www.linkedin.com/in/hardik-chaudhary-89b962290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank')}
                    >
                        <div className="w-12 h-12 flex items-center justify-center bg-primary/8 text-primary shrink-0">
                            <Linkedin className="w-5 h-5" />
                        </div>
                        <div className="text-left flex-1">
                            <p className="text-[10px] uppercase tracking-widest text-muted font-medium mb-1">LinkedIn</p>
                            <p className="text-base text-foreground font-medium">Hardik Chaudhary</p>
                        </div>
                        <ExternalLink className="w-3.5 h-3.5 text-muted group-hover:text-primary transition-colors shrink-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
