import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [empresa, setEmpresa] = useState("Segredo");
  return (
    <>
      <h1>Olá, esta aplicação foi subida no netlify - {empresa}</h1>
      <button
        type="button"
        onClick={() => setEmpresa("Avariti - Tecnologia e Negócios")}
      >
        Clique aqui para ver a empresa
      </button>
    </>
  );
}

export default App;
