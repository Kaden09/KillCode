import About from "./About";
import Code from "./Code";

function HeroSection() {
  return (
    <div className="flex items-center min-h-screen justify-between pb-35 relative">
      <About />
      <Code />
    </div>
  );
}

export default HeroSection;
