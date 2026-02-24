import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";
import { TechonolyItem } from "@/features/technology";
import { TelegramIcon } from "@/shared/assets";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <Header />
      <ProductSection />
      <ContactsSection />
      <TechonolyItem icon={<TelegramIcon />} />
      <Footer />
    </div>
  );
}

export default App;
