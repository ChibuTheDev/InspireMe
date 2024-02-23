import divide from "../src/assets/pattern-divider-desktop.svg";
import dice from "../src/assets/icon-dice.svg";
import { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAdvice(data.slip);
      })
      .catch((error) => {
        alert("Error fetching advice:", error);
      });
  }
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <>
      <main className="container">
        <section>
          <h3>Advice #{advice.id}</h3>
          <p>&quot;{advice.advice}&quot;</p>
          <img className="divide" src={divide} alt="A divider" />
        </section>
        <div className="dice" onClick={getAdvice}>
          <img src={dice} alt="dice to randomize advice" />
        </div>
      </main>
    </>
  );
}

export default App;
