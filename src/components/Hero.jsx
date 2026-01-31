import { heroData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 px-4">
            <div className="absolute top-20 left-10 animate-bounce opacity-20 dark:opacity-40">
                <span className="material-icons text-6xl rotate-12">terminal</span>
            </div>
            <div className="absolute bottom-20 right-10 animate-pulse opacity-20 dark:opacity-40">
                <span className="material-icons text-6xl -rotate-12">code</span>
            </div>
            <div className="relative z-10 text-center max-w-4xl">
                <div className="relative inline-block mb-8">
                    <div className="absolute -inset-4 bg-accent-mint dark:bg-emerald-900/30 organic-shape animate-pulse"></div>
                    <img
                        alt="Tech Student Avatar"
                        className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                        src={heroData.avatar}
                    />
                    <div className={`absolute ${heroData.floatingBadges[0].position} ${heroData.floatingBadges[0].color} font-handwriting text-3xl ${heroData.floatingBadges[0].rotate}`}>
                        {heroData.floatingBadges[0].text}
                    </div>
                    <div className={`absolute ${heroData.floatingBadges[1].position} ${heroData.floatingBadges[1].color} font-handwriting text-3xl ${heroData.floatingBadges[1].rotate}`}>
                        {heroData.floatingBadges[1].text}
                    </div>
                </div>
                <h1 className="text-6xl md:text-8xl font-playful font-bold mb-4 tracking-tighter">
                    {heroData.name.split(" ")[0]}{" "}
                    <span className="text-primary">
                        {heroData.name.split(" ").slice(1).join(" ")}
                    </span>
                </h1>
                <p className="text-2xl font-handwriting max-w-lg mx-auto leading-relaxed">
                    {heroData.tagline}
                </p>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="material-icons text-4xl">expand_more</span>
            </div>
        </section>
    );
}
