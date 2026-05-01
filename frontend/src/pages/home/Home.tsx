import { Header } from "../../components/layout/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Service/Service";
import { Experts } from "./components/Experts/Experts";
import { Footer } from "../../components/layout/Footer";

 function HomePage() {
  return (
    <div className="min-h-screen font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Experts />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
