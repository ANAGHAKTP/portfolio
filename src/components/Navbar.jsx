import { heroData } from "@/data/portfolio";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center py-8 px-8 lg:px-20 text-cream mix-blend-difference">
            <div className="text-2xl font-serif font-bold tracking-tight">
                {heroData.name}
            </div>

            <div className="hidden md:flex items-center space-x-12 font-sans text-xs font-bold uppercase tracking-widest">
                <a href="#about" className="hover:opacity-60 focus-visible:opacity-60 focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4 rounded-sm transition-all">About me</a>
                <a href="#projects" className="hover:opacity-60 focus-visible:opacity-60 focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4 rounded-sm transition-all">Work</a>
                <a
                    href="#contact"
                    className="bg-mustard text-black px-8 py-3 rounded-badge hover:bg-orange-600 focus-visible:bg-orange-600 focus-visible:outline-2 focus-visible:outline-mustard focus-visible:outline-offset-4 transition-all font-bold"
                >
                    Get in touch!
                </a>
            </div>
        </nav>
    );
}
