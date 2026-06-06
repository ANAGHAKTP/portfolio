import { skillsData, certificationsData } from "@/data/portfolio";

export default function Skills() {
    // Map tool names to visual abbreviations
    const toolAbbreviations = {
        "Python": "Py",
        "TensorFlow": "Tf",
        "Scikit-learn": "Sk",
        "VS Code": "Vs",
        "Jupyter": "Jp",
        "SQL": "Sql",
        "MongoDB": "Db",
        "Power BI": "Bi",
        "Tableau": "Tb",
        "Git": "Gt",
        "Anaconda": "Ac",
        "Excel": "Xl",
        "Matplotlib": "Mp",
        "Seaborn": "Sn",
        "React": "Re",
        "Node.js": "Nd",
        "NumPy": "Np",
        "Pandas": "Pd"
    };

    // Flatten databases, tools & platforms, and data & analytics for the visual grid
    const visualTools = [];
    skillsData.forEach(category => {
        if (["Tools & Platforms", "Databases", "Data & Analytics"].includes(category.title)) {
            category.skills.forEach(skill => {
                if (toolAbbreviations[skill]) {
                    visualTools.push({ name: skill, abbr: toolAbbreviations[skill] });
                }
            });
        }
    });

    // Fallbacks if data doesn't match
    if (visualTools.length === 0) {
        visualTools.push(
            { name: "TensorFlow", abbr: "Tf" },
            { name: "VS Code", abbr: "Vs" },
            { name: "Jupyter", abbr: "Jp" },
            { name: "SQL", abbr: "Sql" },
            { name: "MongoDB", abbr: "Db" },
            { name: "Power BI", abbr: "Bi" }
        );
    }

    // Languages and Frameworks categories for the list view
    const codingCategories = skillsData.filter(cat => 
        ["Languages", "Frameworks & Libs"].includes(cat.title)
    );

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
                            <h3 className="text-xl font-sans font-bold uppercase tracking-widest opacity-40 mb-10">Tools & Analytics</h3>
                            <div className="grid grid-cols-3 gap-6">
                                {visualTools.slice(0, 9).map((tool) => (
                                    <div key={tool.name} className="aspect-square border border-black/10 flex flex-col items-center justify-center rounded-2xl group bg-white hover:bg-forest hover:-translate-y-1 hover:border-forest/20 hover:shadow-md transition-all duration-500 cursor-default p-2">
                                        <span className="text-4xl font-serif font-bold text-black group-hover:text-mustard transition-colors duration-300">{tool.abbr}</span>
                                        <span className="text-[9px] font-sans font-bold uppercase tracking-widest mt-2 opacity-40 group-hover:opacity-85 group-hover:text-cream transition-colors duration-300 text-center px-1 truncate max-w-full">{tool.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-sans font-bold uppercase tracking-widest opacity-40 mb-10">Domains & Methodologies</h3>
                            <div className="flex flex-wrap gap-3">
                                {["AI & Machine Learning", "Data Analytics", "Full-Stack Dev", "Computer Vision", "Model Deployment"].map((pill) => (
                                    <span key={pill} className="border border-black/10 px-8 py-3 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-mustard hover:border-mustard transition-colors cursor-default">
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
                                    Skills
                                </div>
                            </div>

                            <div className="relative z-10 space-y-12">
                                <div>
                                    <h3 className="text-4xl font-serif italic text-mustard border-b border-cream/10 pb-8 mb-8">Languages & Frameworks</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                                        {codingCategories.flatMap(cat => cat.skills).map((skill) => (
                                            <div key={skill} className="flex justify-between items-end border-b border-cream/5 pb-4 group/item">
                                                <span className="text-lg font-serif font-medium group-hover/item:text-mustard transition-colors">{skill}</span>
                                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-40">Proficient</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-cream/10">
                                    <h3 className="text-4xl font-serif italic text-mustard border-b border-cream/10 pb-8 mb-8">Certifications</h3>
                                    <div className="space-y-6">
                                        {certificationsData.map((cert) => {
                                            const parts = cert.split(" – ");
                                            const name = parts[0];
                                            const issuer = parts[1];
                                            return (
                                                <div key={cert} className="flex flex-col md:flex-row md:justify-between md:items-center border-b border-cream/5 pb-4 group/item">
                                                    <span className="text-lg font-serif font-medium group-hover/item:text-mustard transition-colors">{name}</span>
                                                    {issuer && (
                                                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-40 mt-1 md:mt-0">{issuer}</span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="mt-16 pt-12 border-t border-cream/10">
                                    <h3 className="text-xl font-sans font-bold uppercase tracking-widest opacity-40 mb-10 text-center">Interests & Hobbies</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                                        {[
                                            { icon: "analytics", label: "Analytics" },
                                            { icon: "psychology", label: "Cognition" },
                                            { icon: "brush", label: "Art" },
                                            { icon: "pets", label: "Cats" }
                                        ].map((hobby) => (
                                            <div key={hobby.label} className="flex flex-col items-center space-y-4">
                                                <div className="w-16 h-16 rounded-full border border-cream/10 flex items-center justify-center hover:border-mustard transition-colors">
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
            </div>
        </section>
    );
}
