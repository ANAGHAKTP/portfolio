import { experienceData, educationData } from "@/data/portfolio";

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 100 100" className="text-mustard">
        <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" />
    </svg>
);

export default function Experience() {
    return (
        <section className="py-24 px-8 lg:px-20 bg-forest text-cream relative overflow-hidden" id="experience">
            {/* Background echo text */}
            <div className="absolute top-40 left-[-5rem] rotate-90 pointer-events-none select-none">
                <div className="text-[12rem] font-serif font-bold uppercase tracking-tighter text-outline opacity-10">
                    Resume
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 relative z-10">
                {/* Left Side: Timeline (Education & Experience) */}
                <div className="lg:col-span-7 space-y-24">
                    {/* Education */}
                    <div className="space-y-16">
                        <div className="flex items-center space-x-6">
                            <span className="w-12 h-[1px] bg-mustard"></span>
                            <h2 className="text-6xl font-serif font-medium uppercase tracking-tight">Education</h2>
                        </div>
                        <div className="border-l border-cream/10 ml-3 space-y-16">
                            {educationData.map((edu, index) => (
                                <div key={index} className="relative pl-12 group">
                                    <div className="absolute -left-[12px] top-1 transition-transform group-hover:scale-125">
                                        <StarIcon />
                                    </div>
                                    <div>
                                        <span className="text-2xl font-serif font-bold italic text-mustard">{edu.year}</span>
                                        <h3 className="text-3xl font-serif font-medium mt-2">{edu.institution}</h3>
                                        <p className="text-sm font-sans font-bold uppercase tracking-widest opacity-40 mt-1">{edu.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="space-y-16">
                        <div className="flex items-center space-x-6">
                            <span className="w-12 h-[1px] bg-mustard"></span>
                            <h2 className="text-6xl font-serif font-medium uppercase tracking-tight">Experience</h2>
                        </div>
                        <div className="border-l border-cream/10 ml-3 space-y-16">
                            {experienceData.map((exp, index) => (
                                <div key={index} className="relative pl-12 group">
                                    <div className="absolute -left-[12px] top-1 transition-transform group-hover:scale-125">
                                        <StarIcon />
                                    </div>
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                                        <div>
                                            <span className="text-2xl font-serif font-bold italic text-mustard">{exp.period.split(" – ")[0]}</span>
                                            <h3 className="text-3xl font-serif font-medium mt-2">{exp.title}</h3>
                                            <p className="text-base font-sans font-bold uppercase tracking-widest opacity-40 mt-1">{exp.company}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Extra Content (Mustard UI Elements) */}
                <div className="lg:col-span-5 space-y-12">
                    <div className="bg-mustard p-12 rounded-3xl text-black space-y-10 group hover:-translate-y-2 transition-transform duration-500">
                        <div className="space-y-4">
                            <p className="font-sans text-xs font-extrabold uppercase tracking-[0.3em] opacity-40">Extra Curriculum</p>
                            <h2 className="text-5xl font-serif font-bold uppercase tracking-tighter leading-none">Soft Skills</h2>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {["#Creativity", "#Communication", "#Detail-oriented", "#Adaptability"].map((tag) => (
                                <span key={tag} className="bg-black text-white px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="h-40 relative overflow-hidden rounded-2xl">
                            <Image
                                src="/projects/vision.png"
                                className="w-full h-full object-cover grayscale opacity-20 group-hover:scale-110 transition-transform duration-1000"
                                alt="Decorative"
                                fill
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 border-[2px] border-black/5 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
