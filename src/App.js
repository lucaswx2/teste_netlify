import React, { useState } from "react";
import "./App.css";

function App() {
  const [empresa, setEmpresa] = useState("Segredo");
  return (
    <div class="bg-testamos">
      <h1>Olá, esta aplicação foi subida no netlify - {empresa}</h1>
      <button
        type="button"
        onClick={() => setEmpresa("Avariti - Tecnologia e Negócios")}
      >
        Clique aqui para ver a empresa
      </button>
    </div>
  );
}

export default App;
