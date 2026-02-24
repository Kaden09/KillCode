import About from "./About";
import Code from "./Code";

function HeroSection() {
  return (
    <div className="flex gap-10 items-center min-h-screen justify-between pb-35">
      <About />
      <Code />
    </div>
  );
}

export default HeroSection;
