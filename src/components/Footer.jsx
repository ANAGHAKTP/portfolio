import { heroData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-20 bg-cream text-black/40 text-center font-sans">
            <div className="max-w-7xl mx-auto border-t border-black/5 pt-10">
                <p className="text-sm font-bold uppercase tracking-widest">
                    © {new Date().getFullYear()} {heroData.name} • Built with passion and code
                </p>
            </div>
        </footer>
    );
}
