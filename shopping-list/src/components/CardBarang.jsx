export default function CardBarang({ nama, jumlah, harga, sudahDibeli, onDelete, onToggleStatus }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        margin: "14px 0",
        padding: "18px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
    >
      <h3
        style={{
          textDecoration: sudahDibeli ? "line-through" : "none",
          color: sudahDibeli ? "#888" : "#007bff",
          marginBottom: "6px",
          textAlign: "center",
        }}
      >
        🛒 {nama}
      </h3>
      <p>Jumlah: <span style={{ fontWeight: "bold" }}>{jumlah}</span></p>
      <p>Harga: <span style={{ color: "#009688", fontWeight: "bold" }}>Rp {harga.toLocaleString()}</span></p>
      <label style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px", justifyContent: "center" }}>
        <input type="checkbox" checked={sudahDibeli} onChange={onToggleStatus} />
        <span style={{ color: sudahDibeli ? "#009688" : "#555" }}>Sudah Dibeli</span>
      </label>
      <button
        style={{
          marginTop: "10px",
          background: "#ff5252",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "7px 16px",
          cursor: "pointer",
          fontWeight: "bold",
          boxShadow: "0 1px 4px rgba(255,82,82,0.12)",
          transition: "background 0.2s",
        }}
        onClick={onDelete}
        onMouseOver={e => e.target.style.background = "#d32f2f"}
        onMouseOut={e => e.target.style.background = "#ff5252"}
      >
        🗑️ Hapus
      </button>
    </div>
  );
}
