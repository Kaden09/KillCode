import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";
import { TechonolyItem } from "@/features/technology";
import { TelegramIcon } from "@/shared/assets";
import { AdvantageItem } from "@/features/adventages";
import { Shield } from "lucide-react";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <Header />
      <AdvantageItem
        icon={<Shield width={44} height={44} strokeWidth={2} />}
        title="Скорость"
        description="Мы не затягиваем с разработкой - первые результаты видны уже на старте.  Сдаём в срок, даже когда задача сложнее, чем казалось."
      />
      <ProductSection />
      <ContactsSection />
      <TechonolyItem icon={<TelegramIcon />} />
      <Footer />
    </div>
  );
}

export default App;
