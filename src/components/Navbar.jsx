export default function Navbar() {

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-8 py-3 rounded-full border-2 border-slate-900 dark:border-slate-100 flex gap-8 font-playful text-lg shadow-lg">
            <a className="hover:text-primary transition-colors" href="#about">
                About
            </a>
            <a className="hover:text-primary transition-colors" href="#skills">
                Stack
            </a>
            <a className="hover:text-primary transition-colors" href="#projects">
                Work
            </a>
            <a className="hover:text-primary transition-colors" href="#contact">
                Hello!
            </a>
            {/* Theme toggle removed */}
        </nav>
    );
}
