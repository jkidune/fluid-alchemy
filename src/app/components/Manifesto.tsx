export default function Manifesto() {
    return (
        <section className="w-full min-h-[60vh] border-b arch-grid-line grid grid-cols-1 md:grid-cols-3 items-center p-6 md:p-12 gap-8 bg-studio-bg">
            <div className="font-mono text-xs text-studio-muted uppercase tracking-widest self-start md:pt-4">
                [THE PHILOSOPHY]
            </div>
            <div className="md:col-span-2 max-w-4xl">
                <p className="font-sans text-2xl sm:text-3xl md:text-4xl font-light tracking-tight leading-relaxed text-studio-text">
                    Treating liquids as volatile raw elements. We study density shifts, thermal dissipation, and optical refractions across glass vessels. Every creation maps a distinct structural volume designed to balance taste, texture, and physical geometry.
                </p>
                <div className="mt-8 font-mono text-xs text-studio-accent uppercase tracking-wider">
                    → Beyond Mixology. Spatial Flavor Architecture.
                </div>
            </div>
        </section>
    );
}