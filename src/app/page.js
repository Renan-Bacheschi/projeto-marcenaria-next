import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
    <main className="container mx-auto p-8 bg-amber-900">
      <h1 className="text-4xl font-bold">Página Inicial da Marcenaria</h1>
      <p className="mt-4">Marcenaria</p>
    </main>
    <Footer/>
    </>
  );
}

