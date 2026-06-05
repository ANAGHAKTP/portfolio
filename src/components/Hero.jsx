import Image from "next/image";
import { heroData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-forest text-cream overflow-hidden relative">
            {/* Left side: Photo with overlay */}
            <div className="relative flex items-center justify-center p-8 lg:p-20 order-2 lg:order-1">
                <div className="relative w-full aspect-[4/5] max-w-sm">
                    {/* Artistic Star shapes */}
                    <div className="absolute -top-8 -left-8 text-mustard animate-pulse z-10">
                        <svg width="60" height="60" viewBox="0 0 100 100">
                            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="currentColor" />
                        </svg>
                    </div>

                    <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                        <Image
                            alt="Anagha K T P"
                            className="w-full h-full object-cover transition-all duration-700"
                            src={heroData.avatar}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-orange-500/30 mix-blend-overlay"></div>
                    </div>

                    {/* Intro text on left side as seen in mockup */}
                    <div className="absolute -bottom-16 -left-8 max-w-[280px] hidden lg:block">
                        <p className="text-sm font-sans opacity-70 leading-relaxed italic">
                            {heroData.tagline}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right side: Layered Typography */}
            <div className="relative flex flex-col justify-center p-8 lg:p-20 order-1 lg:order-2">
                <div className="relative">
                    {/* Layered Echo effect */}
                    <div className="absolute inset-0 top-[-4rem] lg:top-[-8rem] pointer-events-none select-none">
                        <div className="text-[10rem] lg:text-[16rem] font-serif font-bold uppercase tracking-tighter leading-none text-outline opacity-10 translate-y-4">
                            Portfolio
                        </div>
                        <div className="text-[10rem] lg:text-[16rem] font-serif font-bold uppercase tracking-tighter leading-none text-outline opacity-20 translate-y-8">
                            Portfolio
                        </div>
                    </div>

                    <h1 className="text-[10rem] lg:text-[16rem] font-serif font-bold uppercase tracking-tighter leading-none relative z-10">
                        Portfolio
                    </h1>
                </div>

                <div className="mt-20 space-y-3 font-sans text-sm font-bold tracking-widest uppercase opacity-80">
                    {heroData.socials.map((social) => (
                        <div key={social.platform} className="flex items-center space-x-4">
                            <span className="w-8 h-[1px] bg-cream/30"></span>
                            <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors">
                                {social.platform}: {social.handle}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4 lg:hidden">
                <a href="#about" className="w-24 h-24 rounded-full border border-cream/20 flex items-center justify-center relative group active:border-mustard/30">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none">
                        <path id="circlePathMobile" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                        <text className="text-[8px] uppercase font-sans font-bold tracking-[0.18em] fill-cream">
                            <textPath href="#circlePathMobile" startOffset="0%">
                                Scroll down • Scroll down • 
                            </textPath>
                        </text>
                    </svg>
                    <div className="w-7 h-7 rounded-full bg-mustard/10 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-mustard">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Desktop Scroll Indicator */}
            <div className="absolute bottom-10 right-20 hidden lg:block z-20">
                <a href="#about" className="w-32 h-32 rounded-full border border-cream/10 flex items-center justify-center relative group hover:border-mustard/30 transition-all duration-300">
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none">
                        <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                        <text className="text-[7.5px] uppercase font-sans font-bold tracking-[0.2em] fill-cream group-hover:fill-mustard transition-colors duration-300">
                            <textPath href="#circlePath" startOffset="0%">
                                Scroll down • Scroll down • Scroll down • 
                            </textPath>
                        </text>
                    </svg>
                    <div className="w-8 h-8 rounded-full bg-mustard/10 group-hover:bg-mustard/20 flex items-center justify-center transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-mustard group-hover:translate-y-0.5 transition-transform duration-300">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    );
}
