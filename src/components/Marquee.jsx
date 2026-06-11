// ⚡ Bolt: Hoisted static items array outside component to prevent re-allocation on every render
const ITEMS = [
    "AI & Machine Learning",
    "Data Analytics",
    "Creative Design",
    "Model Optimization",
    "Computer Vision",
    "Data Engineering",
    "Research & Analysis"
];

// Double wrapping list to guarantee content covers screen width
const LIST = [...ITEMS, ...ITEMS];

export default function Marquee() {
    return (
        <div className="w-full overflow-hidden bg-forest text-cream border-y border-cream/10 py-6 relative z-10 select-none flex flex-row">
            <div className="flex whitespace-nowrap animate-marquee flex-row flex-shrink-0">
                {LIST.map((item, index) => (
                    <div key={index} className="flex items-center mx-6 lg:mx-8">
                        <span className="text-2xl lg:text-3xl font-serif uppercase tracking-wider">{item}</span>
                        <span className="ml-12 lg:ml-16 text-mustard text-xl">✦</span>
                    </div>
                ))}
            </div>
            <div className="flex whitespace-nowrap animate-marquee flex-row flex-shrink-0">
                {LIST.map((item, index) => (
                    <div key={`dup-${index}`} className="flex items-center mx-6 lg:mx-8">
                        <span className="text-2xl lg:text-3xl font-serif uppercase tracking-wider">{item}</span>
                        <span className="ml-12 lg:ml-16 text-mustard text-xl">✦</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
