"use client";

import { skillsData } from "@/data/portfolio";

export default function Skills() {
    const skillCategories = skillsData;

    return (
        <section className="py-32 px-4 bg-slate-50 dark:bg-slate-900/20 overflow-hidden" id="skills">
            <div className="max-w-6xl mx-auto relative">
                {/* Background decorative doodles */}
                <div className="absolute top-0 left-0 text-slate-200 dark:text-slate-800 transform -rotate-12 select-none pointer-events-none">
                    <span className="material-icons text-9xl">auto_fix_high</span>
                </div>

                <h2 className="text-6xl font-playful font-bold text-center mb-20 relative z-10">
                    My <span className="inline-block transform -rotate-2 bg-slate-900 text-white px-4 py-1 skew-x-[-10deg]">Tech</span> Toolkit
                </h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`relative group ${category.rotate} hover:z-20 hover:scale-105 transition-all duration-300 ease-spring`}
                        >
                            {/* Tape Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 backdrop-blur-sm transform rotate-1 shadow-sm z-10"></div>

                            {/* Card Body */}
                            <div className={`p-6 rounded-2xl ${category.color} border-2 border-slate-900 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] min-w-[280px] max-w-xs`}>
                                <h3 className="text-3xl font-handwriting font-bold mb-6 text-center border-b-2 border-slate-900/20 pb-2">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {category.skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-block bg-white dark:bg-slate-800 px-3 py-1.5 rounded-full text-base font-playful font-bold border-2 border-slate-900 shadow-sm transform hover:-translate-y-1 transition-transform cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <p className="font-handwriting text-3xl text-slate-500 inline-block relative">
                        ...constantly upgrading!
                        <span className="absolute -right-8 -top-8 text-5xl animate-bounce">🚀</span>
                    </p>
                </div>
            </div>
            <style jsx>{`
        .ease-spring {
            transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
        </section>
    );
}
