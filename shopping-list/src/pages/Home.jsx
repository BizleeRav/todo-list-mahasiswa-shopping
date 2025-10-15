import CardBarang from "../components/CardBarang";

export default function Home({ barangList, onDelete, onToggleStatus }) {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        marginTop: "32px",
        background: "linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%)",
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: "32px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#007bff", marginBottom: "18px", textAlign: "center" }}>
        🛍️ Daftar Belanja
      </h2>
      {barangList.length === 0 ? (
        <p style={{ color: "#888", textAlign: "center", fontSize: "1.2rem" }}>
          🎈 Belum ada barang yang ditambahkan.
        </p>
      ) : (
        barangList.map((b) => (
          <CardBarang
            key={b.id}
            nama={b.nama}
            jumlah={b.jumlah}
            harga={b.harga}
            sudahDibeli={b.sudahDibeli}
            onDelete={() => onDelete(b.id)}
            onToggleStatus={() => onToggleStatus(b.id)}
          />
        ))
      )}
    </div>
  );
}
