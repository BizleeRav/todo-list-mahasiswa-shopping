import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Menghandle perubahan input
  const handleInputChange = (e) => {
    const value = e.target.value;
    const validChars = /^[0-9+\-*/().\s]*$/; // regex untuk angka dan operator

    if (validChars.test(value)) {
      setInput(value);
      setErrorMessage("");
    } else {
      setErrorMessage(
        "Input tidak valid. Hanya angka dan operator +, -, *, /, (, ) yang diperbolehkan."
      );
    }
  };

  // Fungsi untuk melakukan perhitungan berdasarkan operator
  const calculate = () => {
    try {
      // Regex untuk mengekstrak angka dan operator (contoh: 3 + 5)
      const pattern = /(\d+)\s*([+\-*/])\s*(\d+)/;
      const match = input.match(pattern);

      if (match) {
        const operand1 = parseFloat(match[1]);
        const operator = match[2];
        const operand2 = parseFloat(match[3]);

        let calculationResult;

        // Gunakan switch case untuk menentukan operasi
        switch (operator) {
          case "+":
            calculationResult = operand1 + operand2;
            break;
          case "-":
            calculationResult = operand1 - operand2;
            break;
          case "*":
            calculationResult = operand1 * operand2;
            break;
          case "/":
            if (operand2 === 0) {
              throw new Error("Pembagian dengan nol tidak diperbolehkan.");
            }
            calculationResult = operand1 / operand2;
            break;
          default:
            throw new Error("Operator tidak valid.");
        }

        setResult(calculationResult);
        setErrorMessage("");
      } else {
        throw new Error(
          "Format input tidak valid. Gunakan format: angka operator angka (contoh: 3 + 5)."
        );
      }
    } catch (error) {
      setErrorMessage(error.message);
      setResult("");
    }
  };

  // Menghapus input dan hasil
  const clear = () => {
    setInput("");
    setResult("");
    setErrorMessage("");
  };

  return (
    <div className="card mx-auto mt-5 shadow-sm" style={{ maxWidth: "400px", padding: "20px" }}>
      <h4 className="text-center mb-3">Kalkulator Sederhana</h4>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Masukkan operasi (misal: 3 + 5)"
          value={input}
          onChange={handleInputChange}
        />
      </div>

      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          {errorMessage}
        </div>
      )}

      <div className="d-flex justify-content-between mb-3">
        <button
          className="btn btn-primary w-50 me-2"
          onClick={calculate}
          disabled={errorMessage !== "" || input.trim() === ""}
        >
          Hitung
        </button>
        <button className="btn btn-secondary w-50" onClick={clear}>
          Bersihkan
        </button>
      </div>

      {result !== null && (
        <div className="alert alert-info text-center">
          <strong>Hasil:</strong> {result}
        </div>
      )}
    </div>
  );
}

export default Calculator;
