import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";
import { TechonolyItem } from "@/features/technology";
import { TelegramIcon } from "@/shared/assets";
import { AdvantagesSection } from "@/features/adventages";
import { HeroSection } from "@/features/hero";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh max-w-340">
      <Header />
      <HeroSection />
      <ProductSection />
      <AdvantagesSection />
      <ContactsSection />
      <TechonolyItem icon={<TelegramIcon />} />
      <Footer />
    </div>
  );
}

export default App;
