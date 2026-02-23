import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import LargeContact from "@/features/contacts/components/LargeContact";
import { TelegramIcon } from "@/shared/assets";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <Header />
      <ProductSection />
      <LargeContact
        icon={<TelegramIcon />}
        title="Наш Telegram"
        value="@killcodeteam"
        link="#"
      />
      <Footer />
    </div>
  );
}

export default App;
