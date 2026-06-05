import { heroData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="min-h-screen bg-forest text-cream overflow-hidden relative flex flex-col justify-between py-12" id="home">
            {/* Inner aligned container */}
            <div className="w-full max-w-7xl mx-auto px-8 lg:px-20 relative flex flex-col justify-between flex-grow">
                
                {/* Background Giant Text - aligned with grid left */}
                <div className="absolute inset-x-8 lg:inset-x-20 top-[10%] lg:top-[12%] pointer-events-none select-none z-0">
                    <h1 className="text-[17vw] lg:text-[13vw] font-serif font-bold uppercase tracking-tighter leading-none text-cream opacity-95">
                        Portfolio
                    </h1>
                    <div className="space-y-1 lg:space-y-3 mt-1 lg:mt-3">
                        <div className="text-[17vw] lg:text-[13vw] font-serif font-bold uppercase tracking-tighter leading-none text-outline opacity-25">PORTFOLIO</div>
                        <div className="text-[17vw] lg:text-[13vw] font-serif font-bold uppercase tracking-tighter leading-none text-outline opacity-15">PORTFOLIO</div>
                        <div className="text-[17vw] lg:text-[13vw] font-serif font-bold uppercase tracking-tighter leading-none text-outline opacity-10">PORTFOLIO</div>
                    </div>
                </div>

                {/* Floating Celestial Star Composition */}
                <div className="absolute right-[12%] top-[30%] hidden lg:flex items-center justify-center pointer-events-none select-none z-0">
                    {/* Spinning outer outline star */}
                    <div className="animate-spin-slow text-mustard opacity-20 hover:opacity-30 transition-opacity duration-500">
                        <svg width="280" height="280" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 0 L55 35 L90 10 L65 45 L100 50 L65 55 L90 90 L55 65 L50 100 L45 65 L10 90 L35 55 L0 50 L35 45 L10 10 L45 35 Z" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                    </div>
                    
                    {/* Floating inner solid star */}
                    <div className="absolute animate-float text-[#c86d44] opacity-25">
                        <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M50 5 L60 38 L95 50 L60 62 L50 95 L40 62 L5 50 L40 38 Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Tiny pulsing accent star */}
                    <div className="absolute -top-12 -right-6 animate-pulse-slow text-cream opacity-30">
                        <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
                            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                        </svg>
                    </div>

                    {/* Background Radial Glow */}
                    <div className="absolute w-[380px] h-[380px] rounded-full bg-[#c86d44]/5 blur-[90px] -z-10 animate-pulse-slow"></div>
                </div>

                {/* Content Grid overlaying background text */}
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end pt-[55vw] lg:pt-[18vw] flex-grow pb-8">
                    {/* Left Column: Name, Title & Bio */}
                    <div className="lg:col-span-7 flex flex-col justify-start pb-8 lg:pb-16 z-10">
                        {/* Status Badge */}
                        <div className="inline-flex items-center space-x-2 bg-cream/5 border border-cream/10 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 self-start hover:bg-cream/10 transition-colors">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-cream opacity-90 pl-1">Open for Internships & Projects</span>
                        </div>

                        {/* Name & Title */}
                        <h2 className="text-4xl lg:text-6xl font-serif font-bold text-cream tracking-tight leading-none mb-3">
                            {heroData.name}
                        </h2>
                        <p className="text-sm lg:text-base font-sans text-mustard font-semibold tracking-wider uppercase mb-6">
                            {heroData.title}
                        </p>

                        {/* Tagline */}
                        <div className="max-w-[480px]">
                            <p className="text-base lg:text-lg font-sans opacity-80 leading-relaxed italic">
                                {heroData.tagline}
                            </p>
                        </div>

                        {/* Quick Metrics */}
                        <div className="mt-10 grid grid-cols-3 gap-6 pt-6 border-t border-cream/15 max-w-md">
                            <div>
                                <div className="text-2xl lg:text-3xl font-serif font-bold text-mustard">03</div>
                                <div className="text-[9px] lg:text-[10px] uppercase tracking-wider opacity-60 mt-1 font-semibold">Internships</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-serif font-bold text-mustard">06</div>
                                <div className="text-[9px] lg:text-[10px] uppercase tracking-wider opacity-60 mt-1 font-semibold">Certificates</div>
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-serif font-bold text-mustard">05+</div>
                                <div className="text-[9px] lg:text-[10px] uppercase tracking-wider opacity-60 mt-1 font-semibold">AI/ML Projects</div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Right Column: Socials */}
                    <div className="lg:col-span-4 flex flex-col justify-end pb-8 lg:pb-16 z-10">
                        <div className="space-y-4 font-sans text-xs lg:text-sm font-bold tracking-widest uppercase opacity-80">
                            {heroData.socials.map((social) => (
                                <div key={social.platform} className="flex items-center space-x-4 group">
                                    <span className="w-8 h-[1px] bg-cream/30 group-hover:w-12 group-hover:bg-mustard transition-all duration-300"></span>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-mustard transition-colors">
                                        {social.platform}: {social.handle}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Row / Scroll down indicator */}
                <div className="relative w-full flex justify-between items-center z-20">
                    {/* Mobile Scroll Down */}
                    <div className="lg:hidden mx-auto mt-4">
                        <div className="w-20 h-20 rounded-full bg-mustard flex items-center justify-center text-black font-sans text-[10px] font-bold text-center p-2 uppercase tracking-tighter shadow-lg">
                            Scroll down
                        </div>
                    </div>

                    {/* Desktop Scroll Down */}
                    <div className="hidden lg:block ml-auto">
                        <div className="w-32 h-32 rounded-full border border-cream/20 flex items-center justify-center relative animate-spin-slow">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll down • Scroll down • </span>
                            </div>
                            <div className="w-1.5 h-1.5 bg-mustard rounded-full"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
