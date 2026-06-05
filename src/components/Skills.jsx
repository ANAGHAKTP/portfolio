import { skillsData } from "@/data/portfolio";

export default function Skills() {
    return (
        <section className="bg-cream text-black py-24 px-8 lg:px-20 relative overflow-hidden" id="skills">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
                    {/* Software Skills - Left Side */}
                    <div className="lg:col-span-12 mb-12">
                        <div className="space-y-4">
                            <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] opacity-40">My toolkit</p>
                            <h2 className="text-6xl lg:text-[6rem] font-serif font-medium leading-none tracking-tighter">Software & Skills</h2>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-20">
                        <div>
                            <h3 className="text-xl font-sans font-bold uppercase tracking-widest opacity-40 mb-10">Software Expertise</h3>
                            <div className="grid grid-cols-3 gap-6">
                                {["Ps", "Ai", "Id", "Xd", "Pr", "Ae"].map((skill) => (
                                    <div key={skill} className="aspect-square border border-black/10 flex flex-col items-center justify-center rounded-2xl group hover:bg-black transition-all duration-500">
                                        <span className="text-4xl font-serif font-bold group-hover:text-white transition-colors">{skill}</span>
                                        <span className="text-[10px] font-sans font-bold uppercase tracking-widest mt-2 opacity-0 group-hover:opacity-40 transition-opacity text-white">Advanced</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-sans font-bold uppercase tracking-widest opacity-40 mb-10">Design Disciplines</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Packaging", "Visual design", "UI/UX design", "User Research", "Data Viz"].map((pill) => (
                                    <span key={pill} className="border border-black/10 px-8 py-3 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-mustard hover:border-mustard transition-colors">
                                        {pill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Coding skills - Right Side */}
                    <div className="lg:col-span-7">
                        <div className="bg-forest text-cream p-12 lg:p-20 rounded-[3rem] space-y-12 relative overflow-hidden group">
                            {/* Background Resume text */}
                            <div className="absolute top-0 right-[-14rem] pointer-events-none select-none rotate-90 opacity-10">
                                <div className="text-[15rem] font-serif font-bold uppercase tracking-tighter text-outline">
                                    Resume
                                </div>
                            </div>

                            <h3 className="text-4xl font-serif italic text-mustard border-b border-cream/10 pb-8 relative z-10">Coding Skills</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10 relative z-10">
                                {["Python", "Java", "C / C++", "JavaScript", "React.js", "Next.js", "Node.js", "SQL", "Tailwind CSS", "TensorFlow"].map((skill) => (
                                    <div key={skill} className="flex justify-between items-end border-b border-cream/5 pb-4 group/item">
                                        <span className="text-xl font-serif font-medium group-hover/item:text-mustard transition-colors">{skill}</span>
                                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-40">Proficient</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-12 border-t border-cream/10 relative z-10">
                                <h3 className="text-xl font-sans font-bold uppercase tracking-widest opacity-40 mb-10 text-center">Interests & Hobbies</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                                    {[
                                        { icon: "piano", label: "Music" },
                                        { icon: "palette", label: "Craft" },
                                        { icon: "brush", label: "Art" },
                                        { icon: "pets", label: "Cats" }
                                    ].map((hobby) => (
                                        <div key={hobby.label} className="flex flex-col items-center space-y-4">
                                            <div className="w-16 h-16 rounded-full border border-cream/10 flex items-center justify-center group-hover:border-mustard transition-colors">
                                                <span className="material-icons text-mustard">{hobby.icon}</span>
                                            </div>
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest">{hobby.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
