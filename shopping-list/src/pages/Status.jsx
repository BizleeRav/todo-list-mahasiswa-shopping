export default function Status({ barangList }) {
  const totalHarga = barangList.reduce((sum, b) => sum + b.harga * b.jumlah, 0);
  const totalBarang = barangList.length;
  const sudahDibeli = barangList.filter((b) => b.sudahDibeli).length;

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "32px auto",
        background: "linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%)",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: "28px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#007bff", marginBottom: "18px", textAlign: "center" }}>
        📊 Statistik Belanja
      </h2>
      <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
        <span style={{ fontWeight: "bold" }}>🛒 Total Barang:</span> {totalBarang}
      </p>
      <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
        <span style={{ fontWeight: "bold", color: "#009688" }}>✅ Sudah Dibeli:</span> {sudahDibeli}
      </p>
      <p style={{ fontSize: "1.1rem", textAlign: "center" }}>
        <span style={{ fontWeight: "bold", color: "#ff9800" }}>💸 Total Pengeluaran:</span> Rp {totalHarga.toLocaleString()}
      </p>
    </div>
  );
}
