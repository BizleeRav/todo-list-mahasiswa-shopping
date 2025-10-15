import { useState } from "react";

export default function FormInput({ onSubmit, initialData }) {
  const [nama, setNama] = useState(initialData?.nama || "");
  const [jumlah, setJumlah] = useState(initialData?.jumlah || "");
  const [harga, setHarga] = useState(initialData?.harga || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || jumlah <= 0 || harga <= 0) {
      alert("Semua field wajib diisi dengan benar!");
      return;
    }
    onSubmit({ nama, jumlah: Number(jumlah), harga: Number(harga), sudahDibeli: false });
    setNama("");
    setJumlah("");
    setHarga("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%)",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        maxWidth: "400px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <label style={{ fontWeight: "bold" }}>Nama Barang:</label><br />
        <input
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "4px",
          }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <label style={{ fontWeight: "bold" }}>Jumlah:</label><br />
        <input
          type="number"
          value={jumlah}
          onChange={(e) => setJumlah(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "4px",
          }}
        />
      </div>
      <div style={{ width: "100%" }}>
        <label style={{ fontWeight: "bold" }}>Harga:</label><br />
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(e.target.value)}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginTop: "4px",
          }}
        />
      </div>
      <button
        type="submit"
        style={{
          marginTop: "10px",
          background: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "10px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 1px 4px rgba(0,123,255,0.12)",
          transition: "background 0.2s",
        }}
        onMouseOver={e => e.target.style.background = "#0056b3"}
        onMouseOut={e => e.target.style.background = "#007bff"}
      >
        Simpan
      </button>
    </form>
  );
}
