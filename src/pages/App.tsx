import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";
import { AdvantagesSection } from "@/features/adventages";
import { HeroSection } from "@/features/hero";
import { TechnologySection } from "@/features/technology";

function App() {
  return (
    <div className="flex flex-col items-center h-svh">
      <Header />
      <HeroSection />
      <ProductSection />
      <AdvantagesSection />
      <TechnologySection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;
