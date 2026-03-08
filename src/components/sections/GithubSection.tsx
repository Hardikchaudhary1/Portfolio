
import SectionHeading from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Github, ExternalLink } from 'lucide-react';

const GithubSection = () => {
    // Generate a mock green-dot contribution graph for aesthetic purposes
    const generateContributionGraph = () => {
        const weeks = 20;
        const days = 7;
        const graph = [];

        for (let w = 0; w < weeks; w++) {
            const weekCol = [];
            for (let d = 0; d < days; d++) {
                // Randomly assign activity level 0-4
                // Higher probability for active days to look busy
                const level = Math.random() > 0.4 ? Math.floor(Math.random() * 4) + 1 : 0;
                weekCol.push(level);
            }
            graph.push(weekCol);
        }
        return graph;
    };

    const graph = generateContributionGraph();

    const getColor = (level: number) => {
        switch (level) {
            case 1: return 'bg-red-900/40';
            case 2: return 'bg-red-700/60';
            case 3: return 'bg-red-500/80';
            case 4: return 'bg-red-400';
            default: return 'bg-white/5';
        }
    };

    return (
        <section id="github" className="py-24 relative z-10">
            <SectionHeading
                title="Open Source"
                subtitle="My GitHub contributions and open source activity."
            />

            <div className="max-w-4xl mx-auto">
                <Card className="p-8">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 border-b border-white/10 pb-8 mb-8">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                    <Github className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold">Hardikchaudhary1</h3>
                                <p className="text-gray-400">Building and collaborating.</p>
                            </div>
                        </div>

                        <a
                            href="https://github.com/Hardikchaudhary1"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center rounded-lg font-medium bg-white/5 hover:bg-white/10 border border-white/10 transition-colors h-10 px-6 max-w-fit"
                        >
                            <Github className="w-4 h-4 mr-2" />
                            View Profile
                            <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                    </div>

                    <div className="overflow-x-auto pb-4">
                        <div className="min-w-[600px] flex gap-1 justify-center">
                            {graph.map((week, wIdx) => (
                                <div key={wIdx} className="flex flex-col gap-1">
                                    {week.map((level, dIdx) => (
                                        <div
                                            key={`${wIdx}-${dIdx}`}
                                            className={`w-3 h-3 md:w-4 md:h-4 rounded-sm ${getColor(level)} transition-colors hover:ring-1 hover:ring-white`}
                                            title={`Contribution activity level ${level}`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 mt-4 text-xs text-gray-400">
                        <span>Less</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-sm bg-white/5" />
                            <div className="w-3 h-3 rounded-sm bg-red-900/40" />
                            <div className="w-3 h-3 rounded-sm bg-red-700/60" />
                            <div className="w-3 h-3 rounded-sm bg-red-500/80" />
                            <div className="w-3 h-3 rounded-sm bg-red-400" />
                        </div>
                        <span>More</span>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default GithubSection;
