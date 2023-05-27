import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefic from "./components/Benefic";
import Contato from "./components/Contato";
import Ajudamos from "./components/Ajudamos";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Benefic />
        <Ajudamos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
