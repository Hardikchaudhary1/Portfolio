
import SectionHeading from '../ui/SectionHeading';
import { Card } from '../ui/Card';

const technologies = [
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
    { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invert: true },
    { name: 'Drupal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/drupal/drupal-original.svg' },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className="py-24 relative z-10">
            <SectionHeading
                title="Tech Stack"
                subtitle="The tools, languages, and frameworks I use to build robust and scalable applications."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {technologies.map((tech, index) => (
                    <Card
                        key={tech.name}
                        delay={index * 0.05}
                        className="flex flex-col items-center justify-center p-6 gap-4 hover:bg-white/5 transition-colors group cursor-pointer"
                    >
                        <div className="w-12 h-12 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                className={`w-full h-full object-contain ${tech.invert ? 'filter invert opacity-80 group-hover:opacity-100' : ''}`}
                            />
                        </div>
                        <span className="text-xs font-medium text-gray-400 group-hover:text-primary transition-colors text-center">
                            {tech.name}
                        </span>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
