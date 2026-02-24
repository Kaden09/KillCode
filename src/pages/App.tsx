import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";
import { ContactsSection } from "@/features/contacts-section";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <Header />
      <ProductSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}

export default App;
