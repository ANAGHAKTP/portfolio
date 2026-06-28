import { heroData } from "@/data/portfolio";

// ⚡ Bolt: Hoisted static socials formatting to prevent reallocation on every render
const FORMATTED_SOCIALS = heroData.socials.map((social) => {
    let prefix = "BE: ";
    let handle = "/ANAGHAKTP";
    const platformLower = social.platform.toLowerCase();

    if (platformLower === "behance") {
        prefix = "BE: ";
        handle = "/ANAGHAKTP";
    } else if (platformLower === "instagram") {
        prefix = "IG: ";
        handle = "@ANAGHA.KTP";
    } else if (platformLower === "linkedin") {
        prefix = "LI: ";
        handle = "/ANAGHAKTP";
    } else if (platformLower === "github") {
        prefix = "GH: ";
        handle = "/ANAGHAKTP";
    } else {
        prefix = `${social.platform.toUpperCase().substring(0, 2)}: `;
        handle = social.handle || handle;
    }

    return { ...social, prefix, handle };
});

export default function Hero() {
    return (
        <section className="min-h-screen bg-forest text-cream overflow-hidden relative flex flex-col justify-center py-20 lg:py-28" id="home">
            {/* Main Content Container */}
            <div className="w-full max-w-7xl mx-auto px-8 lg:px-20 relative z-10 flex flex-col justify-center flex-grow">
                
                {/* Giant Title: PORTFOLIO with Star in O */}
                <div className="relative mb-12 select-none">
                    <h1 className="text-[12vw] lg:text-[9.5vw] font-serif font-bold uppercase tracking-tight leading-none text-cream flex items-center relative">
                        PORTF
                        <span className="relative inline-block">
                            O
                            <span className="absolute left-[38%] top-[32%] text-cream/40">
                                <svg width="20" height="20" viewBox="0 0 100 100" className="w-[1.8vw] h-[1.8vw]">
                                    <path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z" fill="currentColor" />
                                </svg>
                            </span>
                        </span>
                        LI
                        <span className="relative inline-block">
                            O
                            <span className="absolute left-[38%] top-[32%] text-cream/40">
                                <svg width="20" height="20" viewBox="0 0 100 100" className="w-[1.8vw] h-[1.8vw]">
                                    <path d="M50 0 L58 42 L100 50 L58 58 L50 100 L42 58 L0 50 L42 42 Z" fill="currentColor" />
                                </svg>
                            </span>
                        </span>
                    </h1>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
                    
                    {/* Left Column: Status, Name, Tagline & Metrics */}
                    <div className="lg:col-span-7 flex flex-col space-y-6">
                        {/* Status Badge */}
                        <div className="inline-flex items-center space-x-2 bg-transparent border border-cream/20 px-4 py-1.5 rounded-full text-[9px] font-sans font-bold tracking-widest uppercase self-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            <span className="text-cream opacity-80">Open for Internships & Projects</span>
                        </div>

                        {/* Name & Title */}
                        <div className="space-y-1">
                            <h2 className="text-5xl lg:text-[4.5rem] font-serif font-medium text-cream tracking-tight leading-none">
                                {heroData.name}
                            </h2>
                            <p className="text-xs lg:text-sm font-sans text-mustard font-bold tracking-[0.2em] uppercase pt-1">
                                {heroData.title}
                            </p>
                        </div>

                        {/* Tagline */}
                        <p className="text-base lg:text-[1.1rem] font-serif italic text-cream/80 leading-relaxed max-w-xl pt-2">
                            {heroData.tagline}
                        </p>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-cream/10 max-w-md">
                            <div>
                                <div className="text-3xl lg:text-4xl font-serif font-bold text-mustard">03</div>
                                <div className="text-[9px] lg:text-[10px] font-sans uppercase tracking-widest text-cream/40 mt-1.5 font-bold">Internships</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-serif font-bold text-mustard">06</div>
                                <div className="text-[9px] lg:text-[10px] font-sans uppercase tracking-widest text-cream/40 mt-1.5 font-bold">Certificates</div>
                            </div>
                            <div>
                                <div className="text-3xl lg:text-4xl font-serif font-bold text-mustard">05+</div>
                                <div className="text-[9px] lg:text-[10px] font-sans uppercase tracking-widest text-cream/40 mt-1.5 font-bold">AI/ML Projects</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Decorative Star & Social Links */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-12 lg:space-y-16">
                        
                        {/* Custom multi-pointed background star shape */}
                        <div className="relative w-56 h-56 lg:w-72 lg:h-72 flex items-center justify-center select-none pointer-events-none pr-0 lg:pr-12">
                            {/* Spinning outer outline star */}
                            <div className="text-[#8e8568]/30 animate-spin-slow">
                                <svg width="260" height="260" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M50 0 L55 35 L90 10 L65 45 L100 50 L65 55 L90 90 L55 65 L50 100 L45 65 L10 90 L35 55 L0 50 L35 45 L10 10 L45 35 Z" />
                                </svg>
                            </div>
                            {/* Solid terracotta inner star */}
                            <div className="absolute text-[#c86d44]/35 animate-pulse-slow">
                                <svg width="90" height="90" viewBox="0 0 100 100">
                                    <path d="M50 5 L60 38 L95 50 L60 62 L50 95 L40 62 L5 50 L40 38 Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        {/* Social Links block */}
                        <div className="space-y-4 font-sans text-xs lg:text-sm font-bold tracking-widest uppercase self-start lg:self-end">
                            {FORMATTED_SOCIALS.map((social) => (
                                <div key={social.platform} className="flex items-center space-x-6 group">
                                    <span className="w-8 h-[1px] bg-cream/20 group-hover:w-12 group-hover:bg-mustard group-focus-within:w-12 group-focus-within:bg-mustard transition-all duration-300"></span>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="hover:text-mustard focus-visible:text-mustard focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4 rounded-sm transition-colors flex items-center">
                                        <span className="opacity-40 mr-1.5">{social.prefix}</span>
                                        <span>{social.handle}</span>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-4 lg:hidden">
                <a aria-label="Scroll down to about section" href="#about" className="w-24 h-24 rounded-full border border-cream/20 flex items-center justify-center relative group active:border-mustard/30 focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4">
                    <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none">
                        <path id="circlePathMobile" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                        <text className="text-[8px] uppercase font-sans font-bold tracking-[0.18em] fill-cream">
                            <textPath href="#circlePathMobile" startOffset="0%">
                                Scroll down • Scroll down • 
                            </textPath>
                        </text>
                    </svg>
                    <div className="w-7 h-7 rounded-full bg-mustard/10 flex items-center justify-center">
                        <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-mustard">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </a>
            </div>

            {/* Desktop Scroll Indicator */}
            <div className="absolute bottom-10 right-20 hidden lg:block z-20">
                <a aria-label="Scroll down to about section" href="#about" className="w-32 h-32 rounded-full border border-cream/10 flex items-center justify-center relative group hover:border-mustard/30 focus-visible:border-mustard/30 focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4 transition-all duration-300">
                    <svg aria-hidden="true" viewBox="0 0 100 100" className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none">
                        <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="transparent" />
                        <text className="text-[7.5px] uppercase font-sans font-bold tracking-[0.2em] fill-cream group-hover:fill-mustard transition-colors duration-300">
                            <textPath href="#circlePath" startOffset="0%">
                                Scroll down • Scroll down • Scroll down • 
                            </textPath>
                        </text>
                    </svg>
                    <div className="w-8 h-8 rounded-full bg-mustard/10 group-hover:bg-mustard/20 flex items-center justify-center transition-all duration-300">
                        <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-mustard group-hover:translate-y-0.5 transition-transform duration-300">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </a>
            </div>
        </section>
    );
}
