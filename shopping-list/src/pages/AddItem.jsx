import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";

export default function AddItem({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = (barang) => {
    onAdd(barang);
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
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
        ➕ Tambah Barang
      </h2>
      <FormInput onSubmit={handleAdd} />
    </div>
  );
}
