import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditMakanan() {
  const { uuid } = useParams();
  const [data, setData] = useState({});
  const [judul, setJudul] = useState("");
  const [deskripsi_singkat, setDeskripsiSingkat] = useState("");
  const [deskripsi_lengkap, setDeskripsiLengkap] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://backend-production-2c47.up.railway.app/makanan/${uuid}`
      );
      const result = await response.json();
      const item = result.data;

      setData(item);
      setJudul(item.judul);
      setDeskripsiSingkat(item.deskripsi_singkat);
      setDeskripsiLengkap(item.deskripsi_lengkap);
      setImg(item.img);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("judul", judul);
      formData.append("deskripsi_singkat", deskripsi_singkat);
      formData.append("deskripsi_lengkap", deskripsi_lengkap);
      formData.append("img", img);

      const response = await fetch(
        `https://backend-production-2c47.up.railway.app/makanan/${uuid}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (response.ok) {
        // Ganti dengan logika yang sesuai untuk mengarahkan pengguna ke halaman yang diinginkan
        window.location.href = "/"; // Contoh pengarahan ke halaman "/"
      } else {
        console.error("Gagal menyimpan perubahan data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  return (
    <div>
      <h1>Edit Data</h1>

      <div className="edit-form">
        <label htmlFor="judul">Judul:</label>
        <input
          type="text"
          id="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
        <label htmlFor="deskripsi-singkat">Deskripsi Singkat</label>
        <textarea
          type="text"
          id="deskripsi-singkat"
          value={deskripsi_singkat}
          onChange={(e) => setDeskripsiSingkat(e.target.value)}
        />
        <label htmlFor="deskripsi-lengkap">Deskripsi lengkap</label>
        <textarea
          type="text"
          id="deskripsi-lengkap"
          value={deskripsi_lengkap}
          onChange={(e) => setDeskripsiLengkap(e.target.value)}
        />
        <label htmlFor="img-upload">Gambar (JPG atau WebP):</label>
        {img && <img src={img} alt="Gambar" width="100%" />}
        <input
          type="file"
          accept=".jpg, .webp"
          id="img-upload"
          onChange={handleImageChange}
        />

        <button className="save-button" onClick={handleSave}>
          Simpan
        </button>
      </div>
    </div>
  );
}

export default EditMakanan;
