import { experienceData, educationData, certificationsData } from "@/data/portfolio";

export default function Experience() {
    return (
        <section className="py-24 px-4 relative overflow-hidden" id="experience">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-playful font-bold text-center mb-16">
                    My <span className="text-primary underline decoration-wavy decoration-accent-yellow">Journey</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Experience Section */}
                    <div>
                        <h3 className="text-3xl font-handwriting font-bold mb-8 flex items-center gap-2">
                            <span className="material-icons text-accent-pink">work</span> Experience
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                            {experienceData.map((exp, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${exp.color} border-2 border-slate-900`}></div>
                                    <h4 className="text-xl font-bold">{exp.title}</h4>
                                    <p className="text-slate-500 text-sm">{exp.company} | {exp.period}</p>
                                    <ul className="list-disc list-outside ml-4 mt-2 text-slate-600 dark:text-slate-400 text-sm">
                                        {exp.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education Section */}
                    <div>
                        <h3 className="text-3xl font-handwriting font-bold mb-8 flex items-center gap-2">
                            <span className="material-icons text-accent-mint">school</span> Education
                        </h3>
                        <div className="space-y-8 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                            {educationData.map((edu, index) => (
                                <div key={index} className="relative pl-8">
                                    <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full ${edu.color} border-2 border-slate-900`}></div>
                                    <h4 className="text-xl font-bold">{edu.title}</h4>
                                    <p className="text-slate-500 text-sm">{edu.institution} | {edu.year}</p>
                                </div>
                            ))}
                        </div>

                        {/* Certifications Section */}
                        <div className="mt-12">
                            <h3 className="text-3xl font-handwriting font-bold mb-6 flex items-center gap-2">
                                <span className="material-icons text-accent-yellow">verified</span> Certifications
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {certificationsData.map((cert, index) => (
                                    <span key={index} className="px-4 py-2 bg-white dark:bg-slate-800 border-2 border-slate-900 rounded-lg text-sm font-bold shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-y-1 hover:shadow-none transition-all cursor-default">
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
