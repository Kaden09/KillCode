import About from "./About";
import Code from "./Code";

function HeroSection() {
  return (
    <div className="flex items-center mt-20 min-[450px]:mt-0 min-[450px]:min-h-screen justify-between pb-35 relative">
      <About />
      <Code />
    </div>
  );
}

export default HeroSection;
