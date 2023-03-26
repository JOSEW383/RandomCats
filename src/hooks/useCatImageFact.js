import { useState, useEffect } from "react";
import {getCatFact, getCatImage } from "../services/apis.js";

export function useCatImageFact() {
    const [catFact, setcatFact] = useState(null);
    const [catImage, setcatImage] = useState(null);
    const [factError, setFactError] = useState(false);
  
    async function generateFact() {
      setcatFact(null);
      setcatImage(null);
      setFactError(false);
      try {
        const catFact = await getCatFact();
        const catImage = await getCatImage(catFact);
        setcatFact(catFact);
        setcatImage(catImage);
      } catch (error) {
        setFactError(true);
      }
    }
  
    useEffect(() => {
      generateFact();
    }, []);

  return {catFact, catImage, factError, generateFact};
}
