import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)",
        padding: "16px 0",
        borderRadius: "0 0 16px 16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "8px 18px",
          borderRadius: "6px",
          transition: "background 0.2s",
          textAlign: "center",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "transparent")}
      >
        🏠 Home
      </Link>
      <Link
        to="/add"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "8px 18px",
          borderRadius: "6px",
          transition: "background 0.2s",
          textAlign: "center",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "transparent")}
      >
        ➕ Tambah
      </Link>
      <Link
        to="/stats"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "8px 18px",
          borderRadius: "6px",
          transition: "background 0.2s",
          textAlign: "center",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "transparent")}
      >
        📊 Statistik
      </Link>
      <Link
        to="/about"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: "bold",
          padding: "8px 18px",
          borderRadius: "6px",
          transition: "background 0.2s",
          textAlign: "center",
        }}
        onMouseOver={(e) => (e.target.style.background = "#0056b3")}
        onMouseOut={(e) => (e.target.style.background = "transparent")}
      >
        ℹ️ Tentang
      </Link>
    </nav>
  );
}
