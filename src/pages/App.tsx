import { Footer } from "@/features/footer";
import { Header } from "../features/header";
import { Main } from "@/features/main";

function App() {
  return (
    <div className="flex flex-col items-center h-svh scroll-smooth overflow-x-hidden px-2 sm:px-5 md:px-10 lg:px-19.5">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
