import React, { useState } from "react";

const DiskonNama1 = () => {
  const [harga, setHarga] = useState("");
  const [nama, setNama] = useState("");
  const [hasil, setHasil] = useState(null);

  const hitungDiskon = () => {
    // hapus spasi, lalu hitung panjang nama
    const panjangNama = nama.replace(/\s/g, "").length;
    const totalDiskon = panjangNama; // 1% per huruf
    const hargaSetelahDiskon = harga - (harga * totalDiskon) / 100;

    setHasil({
      panjangNama,
      totalDiskon,
      hargaSetelahDiskon,
    });
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px", margin: "20px" }}>
      <h2>Program Diskon Berdasarkan Panjang Nama</h2>
      <div>
        <label>Harga Total Pembelian: </label>
        <input
          type="number"
          value={harga}
          onChange={(e) => setHarga(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Nama Pelanggan: </label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
      </div>
      <button onClick={hitungDiskon}>Hitung</button>

      {hasil && (
        <div style={{ marginTop: "15px" }}>
          <p>Panjang Nama: {hasil.panjangNama}</p>
          <p>Total Diskon: {hasil.totalDiskon}%</p>
          <p>Harga Setelah Diskon: Rp {hasil.hargaSetelahDiskon}</p>
        </div>
      )}
    </div>
  );
};

export default DiskonNama1;
