// page.js

import Footer from "./components/Footer";
// A importação do FirstComponent não está sendo usada, pode remover se quiser
// import FirstComponent from "./components/FirstComponent"; 

export default function Home() {
  return (
    // Trocamos a tag <main> por uma <div>
    <div className="container mx-auto p-8 bg-amber-900">
      <h1 className="text-4xl font-bold">Página Inicial da Marcenaria</h1>
      <p className="mt-4">Marcenaria</p>
    </div>
    // O <Footer /> já está no layout, então não precisa dele aqui também
  );
};