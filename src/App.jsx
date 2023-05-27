import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
