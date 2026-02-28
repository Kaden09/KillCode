import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";
import { AdvantagesSection } from "@/features/adventages";
import { HeroSection } from "@/features/hero";
import InstructionSection from "@/features/instruction/components/InstructionSection";

function App() {
  return (
    <div className="flex flex-col items-center h-svh scroll-smooth overflow-x-hidden px-2 sm:px-5 md:px-10 lg:px-19.5">
      <Header />
      <HeroSection />
      <ProductSection />
      <AdvantagesSection />
      <InstructionSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;
