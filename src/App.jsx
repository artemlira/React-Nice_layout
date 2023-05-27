import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefic from "./components/Benefic";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <Benefic />
      </main>
      <Footer />
    </>
  );
}

export default App;
