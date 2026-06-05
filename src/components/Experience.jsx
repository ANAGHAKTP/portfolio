import { experienceData, educationData } from "@/data/portfolio";

const StarIcon = () => (
    <svg width="24" height="24" viewBox="0 0 100 100" className="text-mustard" aria-hidden="true">
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
                {/* Left Side: Timeline (Education) */}
                <div className="lg:col-span-7 space-y-16">
                    {/* Education Header */}
                    <div className="flex items-center space-x-6">
                        <span className="w-12 h-[1px] bg-mustard"></span>
                        <h2 className="text-6xl font-serif font-medium uppercase tracking-tight animate-fade-in">Education</h2>
                    </div>
                    {/* Education Timeline */}
                    <div className="border-l border-cream/10 ml-3 space-y-16">
                        {educationData.map((edu, index) => (
                            <div key={index} className="relative pl-12 group">
                                <div className="absolute -left-[12px] top-1 transition-transform group-hover:scale-125">
                                    <StarIcon />
                                </div>
                                <div>
                                    <span className="text-2xl font-serif font-bold italic text-mustard">{edu.year}</span>
                                    <h3 className="text-3xl font-serif font-medium mt-2 group-hover:text-mustard transition-colors duration-300">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-sm font-sans font-bold uppercase tracking-widest opacity-40 mt-1">
                                        {edu.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Redesigned Experience Column */}
                <div className="lg:col-span-5 space-y-12">
                    {/* Experience Header */}
                    <div className="flex items-center space-x-6">
                        <span className="w-12 h-[1px] bg-mustard"></span>
                        <h2 className="text-6xl font-serif font-medium uppercase tracking-tight">Experience</h2>
                    </div>

                    {/* Experience Cards Stack */}
                    <div className="space-y-8">
                        {experienceData.map((exp, index) => (
                            <div 
                                key={index} 
                                className={`${exp.color} p-8 lg:p-10 rounded-[2rem] text-black space-y-6 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between relative group`}
                            >
                                <div className="space-y-3">
                                    {/* Period Duration */}
                                    <div className="inline-flex px-4 py-1.5 rounded-full border border-black/10 text-xs font-sans font-bold uppercase tracking-wider">
                                        {exp.period}
                                    </div>
                                    
                                    {/* Title & Company */}
                                    <h3 className="text-3xl font-serif font-bold leading-tight pt-2">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm font-sans font-extrabold uppercase tracking-widest opacity-60">
                                        {exp.company}
                                    </p>
                                </div>

                                {/* Experience Bullet Points */}
                                <ul className="space-y-3 pt-4 border-t border-black/15">
                                    {exp.points.map((point, pIndex) => (
                                        <li key={pIndex} className="text-sm font-sans font-semibold leading-relaxed flex items-start space-x-3 text-black/85">
                                            <span className="text-black/80 mt-1.5">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
