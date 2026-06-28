import Image from "next/image";
import { aboutData, heroData } from "@/data/portfolio";

export default function About() {
    return (
        <section className="py-24 px-8 lg:px-20 bg-cream text-black relative" id="about">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left side: Intro and Pill Labels */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <p className="font-sans text-xs font-bold uppercase tracking-[0.4em] opacity-40">Get to know me</p>
                        <h2 className="text-7xl lg:text-[7rem] font-serif font-medium leading-[0.9] tracking-tighter">
                            Hello, <br /> I&apos;m {heroData.name.split(" ")[0]} !
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <span className="bg-mustard text-black px-8 py-2.5 rounded-badge font-bold text-xs uppercase tracking-widest">
                            {aboutData.interest}
                        </span>
                        <span className="border border-black/10 text-black px-8 py-2.5 rounded-badge font-bold text-xs uppercase tracking-widest">
                            {aboutData.location.split(", ").pop()}
                        </span>
                    </div>

                    <div className="max-w-xl">
                        <p className="text-xl font-sans leading-relaxed opacity-70">
                            {aboutData.description}
                        </p>
                    </div>

                    <div className="pt-4">
                        <a
                            href={aboutData.linkedin || "#"}
                            className="bg-black text-white px-10 py-5 rounded-badge font-bold text-sm uppercase tracking-widest flex items-center space-x-4 w-fit hover:bg-forest transition-colors"
                        >
                            <span>Contact me</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right side: Profile Photo & Contact Stack */}
                <div className="flex flex-col items-center lg:items-end gap-8 w-full max-w-sm mx-auto lg:mr-0">
                    {/* Profile Photo in Frame */}
                    <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-forest p-3 border-4 border-forest">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                            {/* ⚡ Bolt: Capped sizes prop to 384px to prevent Next.js from generating oversized images on high-res displays */}
                            <Image
                                alt="Anagha Profile"
                                className="w-full h-full object-cover"
                                src={aboutData.image}
                                fill
                                sizes="(max-width: 768px) 100vw, 384px"
                            />
                            {/* Circle overlay as seen in mockup */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-[25px] border-cream/10 rounded-full"></div>
                        </div>

                    </div>

                    {/* Separate Contact Card below photo */}
                    <div className="w-full bg-black text-white p-8 rounded-3xl shadow-2xl space-y-6">
                        <h3 className="text-3xl font-serif italic border-b border-white/10 pb-4 tracking-tight">Contact</h3>
                        <div className="space-y-4 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                            <div className="flex items-center space-x-4">
                                <span className="w-2 h-2 rounded-full bg-mustard"></span>
                                <span>{aboutData.location}</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="w-2 h-2 rounded-full bg-mustard"></span>
                                <span className="break-all">{aboutData.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
