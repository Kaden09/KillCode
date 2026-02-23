import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { LargeContactsList } from "@/features/contacts";
import { TrustItem } from "@/features/contacts-section";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <Header />
      <ProductSection />
      <TrustItem title="Оперативный ответ" />
      <LargeContactsList />
      <Footer />
    </div>
  );
}

export default App;
