import React from "react";
import Calculator from "./components/calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center">
          <h1 className="mt-4 mb-4">Aplikasi Kalkulator Sederhana</h1>
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default App;
