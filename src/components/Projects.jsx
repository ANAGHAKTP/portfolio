import Image from "next/image";
import { projectsData } from "@/data/portfolio";

export default function Projects() {
    return (
        <section className="py-28 px-8 lg:px-20 bg-cream text-black relative" id="projects">
            <div className="max-w-7xl mx-auto space-y-20">
                
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-4">
                        <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] opacity-40">Portfolio</p>
                        <h2 className="text-7xl lg:text-[8rem] font-serif font-medium leading-none tracking-tighter">
                            Selected <br /> Works
                        </h2>
                    </div>
                </div>

                {/* Grid of Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
                    {projectsData.map((project, index) => (
                        <div key={index} className="group flex flex-col space-y-6 cursor-pointer">
                            
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-[2.5rem] aspect-[16/10] bg-forest border border-black/5 shadow-lg">
                                {/* ⚡ Bolt: Fixed pixel cap in sizes prop to prevent Next.js from generating massively oversized images on 4K+ displays for this grid item (max ~640px) */}
                                <Image
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-[1000ms] ease-out group-hover:scale-105 grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0"
                                    src={project.image}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 640px"
                                />
                                <div className="absolute inset-0 bg-[#c86d44]/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-500"></div>
                            </div>

                            {/* Project Details Below Image */}
                            <div className="space-y-3 px-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-mustard font-sans text-xs font-bold uppercase tracking-[0.2em]">
                                        Project 0{index + 1}
                                    </span>
                                </div>

                                <h3 className="text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight group-hover:text-mustard transition-colors flex items-center gap-2">
                                    {project.title}
                                    <span className="inline-block transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-mustard">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </h3>

                                <p className="text-sm text-black/60 font-sans leading-relaxed max-w-xl">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-[9px] font-sans font-bold bg-forest text-cream px-4 py-1.5 rounded-full uppercase tracking-widest border border-forest/10 hover:bg-mustard hover:text-black transition-colors duration-300">
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
