export default function About() {
  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "32px auto",
        background: "linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%)",
        borderRadius: "12px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#007bff", marginBottom: "18px", textAlign: "center" }}>
        ℹ️ Tentang Aplikasi
      </h2>
      <p style={{ marginBottom: "10px", textAlign: "center" }}>
        📋 Aplikasi ini dibuat untuk membantu mencatat daftar belanja harian.
      </p>
      <p style={{ color: "#009688", textAlign: "center" }}>
        👨‍💻 Dikembangkan oleh Kelompok 5 - Mata Kuliah Pemrograman 4.
      </p>
    </div>
  );
}
