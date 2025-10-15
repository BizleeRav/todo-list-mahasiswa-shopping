import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Stats from "./pages/Status";
import About from "./pages/About";
import { useState } from "react";

function App() {
  const [barangList, setBarangList] = useState([
    { id: 1, nama: "Beras", jumlah: 2, harga: 50000, sudahDibeli: false },
    { id: 2, nama: "Telur", jumlah: 1, harga: 30000, sudahDibeli: true },
  ]);

  // Tambah barang baru
  const addBarang = (barang) => {
    setBarangList([...barangList, { ...barang, id: Date.now() }]);
  };

  // Edit barang
  const updateBarang = (id, updatedData) => {
    setBarangList(barangList.map((b) => (b.id === id ? updatedData : b)));
  };

  // Hapus barang
  const deleteBarang = (id) => {
    setBarangList(barangList.filter((b) => b.id !== id));
  };

  // Ubah status sudah dibeli
  const toggleStatus = (id) => {
    setBarangList(
      barangList.map((b) =>
        b.id === id ? { ...b, sudahDibeli: !b.sudahDibeli } : b
      )
    );
  };

  return (
    <Router>
      <Navbar />
      <div
        className="container"
        style={{
          padding: "20px",
          minHeight: "80vh",
          background: "linear-gradient(90deg, #e3f2fd 0%, #f9f9f9 100%)",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Home
                barangList={barangList}
                onDelete={deleteBarang}
                onToggleStatus={toggleStatus}
              />
            }
          />
          <Route path="/add" element={<AddItem onAdd={addBarang} />} />
          <Route
            path="/edit/:id"
            element={<EditItem barangList={barangList} onUpdate={updateBarang} />}
          />
          <Route path="/stats" element={<Stats barangList={barangList} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
