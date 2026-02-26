import About from "./About";
import Code from "./Code";

function HeroSection() {
  return (
    <div className="flex items-center min-h-screen justify-between pb-35 relative">
      <About />
      <Code />
      <div
        className="bg-white/10 w-100 h-100 rounded-full absolute right-100 top-30 blur-[100px] opacity-0 animate-fade-in-bottom-100"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  );
}

export default HeroSection;
