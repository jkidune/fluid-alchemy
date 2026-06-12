import Image from "next/image";
import RollingButton from "./RollingButton";

export default function Footer() {
    return (
        <footer id="contact" className="w-full bg-studio-bg border-t arch-grid-line pt-16 pb-8 px-6 md:px-12 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 items-start">

                {/* Column 1: Monolithic Branding & Visual (Inspired by image_357365.jpg left edge) */}
                <div className="flex flex-col gap-6">
                    <div className="relative w-full h-48 bg-studio-surface overflow-hidden">
                        <Image
                            src="/images/Iced Coffee Close-Up.png"
                            alt="Lab R&D Focus Visual"
                            fill
                            className="object-cover grayscale contrast-110"
                        />
                    </div>
                    <h2 className="text-7xl font-bold tracking-tighter leading-none select-none text-studio-text">
                        FLUID
                    </h2>
                </div>

                {/* Column 2: Structural Link Array Navigation Registry */}
                <div className="flex flex-col gap-4">
                    <span className="font-mono text-[10px] text-studio-muted tracking-widest uppercase">[NAVIGATION]</span>
                    <nav className="flex flex-col gap-2 text-2xl font-normal tracking-tight text-studio-text">
                        <a href="#" className="hover:text-studio-accent transition-colors">Home</a>
                        <a href="#index" className="hover:text-studio-accent transition-colors">Menu Index</a>
                        <a href="#lab" className="hover:text-studio-accent transition-colors">The Lab</a>
                        <a href="#journal" className="hover:text-studio-accent transition-colors">R&D Journal</a>
                    </nav>
                </div>

                {/* Column 3: Manifesto / Studio Focus Context */}
                <div className="flex flex-col gap-4 max-w-xs">
                    <span className="font-mono text-[10px] text-studio-muted tracking-widest uppercase">[ACKNOWLEDGEMENT]</span>
                    <p className="text-xs tracking-wide text-studio-muted leading-relaxed">
                        We respectfully conduct liquid design research worldwide. We acknowledge traditional flavor extraction roots and historical craft methods, paying homage to past alchemists while engineering modern beverage balance.
                    </p>
                </div>

                {/* Column 4: Concrete Studio Coordinates & Contact Interactions */}
                <div className="flex flex-col gap-4 md:items-end md:text-right">
                    <span className="font-mono text-[10px] text-studio-muted tracking-widest uppercase self-start md:self-end">[INFO]</span>
                    <div className="text-xs font-mono text-studio-muted space-y-1.5 tracking-tight">
                        <p><span className="text-studio-text font-bold">A:</span> Masaki District, Dar es Salaam</p>
                        <p><span className="text-studio-text font-bold">E:</span> studio@fluidalchemy.com</p>
                        <p><span className="text-studio-text font-bold">H:</span> Available for Global Activations</p>
                    </div>
                    <div className="pt-4 self-start md:self-end">
                        <RollingButton text="Initiate Consult" href="mailto:studio@fluidalchemy.com" />
                    </div>
                </div>

            </div>

            {/* Global Meta Metric Legal Baseline */}
            <div className="border-t arch-grid-line mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] text-studio-muted tracking-wider uppercase">
                <div>© 2026 FLUID ALCHEMY — BRAND ARCHITECTURE BY NEXT / SANITY</div>
                <div className="flex gap-8">
                    <a href="#privacy" className="hover:text-studio-text">[PRIVACY POLICY]</a>
                    <a href="#terms" className="hover:text-studio-text">[TERMS & CONDITIONS]</a>
                </div>
            </div>
        </footer>
    );
}