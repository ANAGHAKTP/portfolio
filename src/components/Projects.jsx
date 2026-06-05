import { projectsData } from "@/data/portfolio";

export default function Projects() {
    return (
        <section className="py-24 px-8 lg:px-20 bg-cream text-black relative" id="projects">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] opacity-40">Portfolio</p>
                        <h2 className="text-7xl lg:text-[8rem] font-serif font-medium leading-none tracking-tighter">
                            Selected <br /> Works
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projectsData.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[16/10] bg-forest">
                            <img
                                alt={project.title}
                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0"
                                src={project.image}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                                <span className="text-mustard font-sans text-xs font-bold uppercase tracking-widest mb-4">Project {index + 1}</span>
                                <h3 className="text-4xl lg:text-5xl font-serif font-bold text-cream tracking-tight">{project.title}</h3>
                                <p className="text-sm text-cream/60 mt-4 font-sans leading-relaxed max-w-md line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[10px] font-bold bg-white text-black px-4 py-1.5 rounded-full uppercase tracking-widest">
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
