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
                        <img
                            alt="Anagha K T P"
                            className="w-full h-full object-cover transition-all duration-700"
                            src={heroData.avatar}
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
                <div className="w-20 h-20 rounded-full bg-mustard flex items-center justify-center text-black font-sans text-[10px] font-bold text-center p-2 uppercase tracking-tighter">
                    Scroll down
                </div>
            </div>

            {/* Desktop Scroll Indicator */}
            <div className="absolute bottom-10 right-20 hidden lg:block">
                <div className="w-32 h-32 rounded-full border border-cream/20 flex items-center justify-center relative animate-spin-slow">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll down • Scroll down • </span>
                    </div>
                    <div className="w-1.5 h-1.5 bg-mustard rounded-full"></div>
                </div>
            </div>
        </section>
    );
}
