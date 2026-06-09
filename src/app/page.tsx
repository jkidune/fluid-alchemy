import Hero from "./components/hero";
import Manifesto from "./components/Manifesto";
import SelectedWorks from "./components/SelectedWorks";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col gap-0">
      <Hero />
      <div className="px-4 md:px-6">
        <Manifesto />
        <SelectedWorks />
      </div>
    </div>
  );
}