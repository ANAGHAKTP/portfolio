import { projectsData } from "@/data/portfolio";

export default function Projects() {
    const projects = projectsData;

    return (
        <section className="py-24 px-4 bg-slate-100 dark:bg-slate-900/40" id="projects">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-playful font-bold mb-16 text-right">
                    Latest <span className="bg-primary px-4 py-1 -rotate-2 inline-block text-white rounded-lg">Creations</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white dark:bg-slate-800 p-6 border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all transform hover:-translate-y-1 h-full flex flex-col">
                                <div className={`relative h-48 mb-6 rounded-2xl border-2 border-slate-900 overflow-hidden ${project.color}`}>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-3xl font-playful font-bold mb-3">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className={`px-3 py-1 rounded-full text-sm border border-slate-900 dark:text-slate-900 font-bold ${project.color}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
