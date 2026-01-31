import { heroData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center font-playful opacity-60">
            <p>© {new Date().getFullYear()} {heroData.name} • Built with caffeine and code</p>
        </footer>
    );
}
