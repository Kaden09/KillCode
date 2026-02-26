import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";
import { AdvantagesSection } from "@/features/adventages";
import { HeroSection } from "@/features/hero";
import InstructionSection from "@/features/instruction/components/InstructionSection";
// import { TechnologySection } from "@/features/technology";

function App() {
  return (
    <div className="flex flex-col items-center h-svh scroll-smooth">
      <Header />
      <HeroSection />
      <ProductSection />
      <AdvantagesSection />
      <InstructionSection />
      {/* <TechnologySection /> */}
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;
