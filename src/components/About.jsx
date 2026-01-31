import { aboutData } from "@/data/portfolio";

export default function About() {
    return (
        <section className="py-24 px-4 bg-accent-yellow/30 dark:bg-amber-900/10" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="polaroid dark:bg-slate-800 inline-block mx-auto md:mx-0">
                        <div className="tape"></div>
                        <img
                            alt="Work Desk"
                            className="w-full max-w-md aspect-square object-cover mb-4"
                            src={aboutData.image}
                        />
                        <p className="font-handwriting text-2xl text-center text-slate-600 dark:text-slate-300">
                            {aboutData.polaroidText}
                        </p>
                    </div>
                    <div className="absolute -bottom-8 -right-4 bg-white dark:bg-slate-700 p-4 scribble-border shadow-lg rotate-3 font-handwriting text-xl border-2 border-slate-900">
                        AI & ML Engineer
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-5xl font-playful font-bold mb-8">
                        About <span className="italic underline decoration-accent-pink">Me</span>
                    </h2>
                    <div className="prose prose-lg dark:prose-invert">
                        <p className="font-display">
                            {aboutData.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                                <h3 className="font-bold text-primary mb-2">Location</h3>
                                <p>{aboutData.location}</p>
                            </div>
                            <div className="p-6 bg-white dark:bg-slate-800 rounded-2xl border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                                <h3 className="font-bold text-primary mb-2">Interest</h3>
                                <p>{aboutData.interest}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
