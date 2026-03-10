import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { Main } from "@/features/main";
import Seo from "@/shared/utils/Seo";

function App() {
  return (
    <div className="flex flex-col items-center h-svh scroll-smooth overflow-x-hidden px-2 sm:px-5 md:px-10 lg:px-19.5">
      <Seo
        title="KillCode Studio"
        description="Разрабатываем надежные и современные цифровые решения. Активно поддерживаем рост и стабильность вашего бизнеса."
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
