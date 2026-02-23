import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { ProductSection } from "@/features/products";

function App() {
  return (
    <div className="flex flex-col justify-between h-svh">
      <Header />
      <ProductSection />
      <Footer />
    </div>
  );
}

export default App;
