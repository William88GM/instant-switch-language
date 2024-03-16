import { useState } from "react";
import "./App.css";
import es from "./assets/es.json";
import en from "./assets/en.json";
import de from "./assets/de.json";

function App() {
  const [idioma, setIdioma] = useState(es);

  const selectIdiomas = {
    de,
    es,
    en,
  };
  function handleChange(e) {
    console.log(e.target);
    setIdioma(selectIdiomas[e.target.value]);
  }

  return (
    <>
      <article>
        <h1>{idioma.title}</h1>

        <p>{idioma.description}</p>

        <select onChange={handleChange}>
          <option value={"es"}>Español</option>
          <option value={"en"}>Ingles</option>
          <option value={"de"}>Nazi</option>
        </select>
      </article>
    </>
  );
}

export default App;
