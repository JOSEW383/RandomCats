// import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import CatCard from "./components/CatCard";
// import { getCatFact, getCatImage } from "./services/apis.js";
import { useCatImageFact } from "./hooks/useCatImageFact.js";

function App() {
  const { catFact, catImage, factError, generateFact } = useCatImageFact();

  function refreshFact() {
    generateFact();
  }

  return (
    <>
      <div className="app">
        <h1 className="tittle gradient-text">Random Cats</h1>
        <CatCard image={catImage} text={catFact} error={factError}></CatCard>
        <button className="main_button" onClick={refreshFact}>
          Next Fact
        </button>
      </div>
      <Footer />
    </>
  );
}

export default App;
