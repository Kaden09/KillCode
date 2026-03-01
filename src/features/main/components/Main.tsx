import { AdvantagesSection } from "@/features/adventages";
import { ContactsSection } from "@/features/contacts-section";
import { GrowthSection } from "@/features/growth";
import { HeroSection } from "@/features/hero";
import { InstructionSection } from "@/features/instruction";
import { ProductSection } from "@/features/products";

function Main() {
  return (
    <main>
      <HeroSection />
      <ProductSection />
      <AdvantagesSection />
      <GrowthSection />
      <InstructionSection />
      <ContactsSection />
    </main>
  );
}

export default Main;
