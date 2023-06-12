import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../../Button";

function EditMakanan() {
  const { uuid } = useParams();
  const [data, setData] = useState({});
  const [judul, setJudul] = useState("");
  const [deskripsi_singkat, setDeskripsiSingkat] = useState("");
  const [deskripsi_lengkap, setDeskripsiLengkap] = useState("");
  const [tips, setTips] = useState("");
  const [img, setImg] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const [jumlahKalori, setJumlahKalori] = useState("");
  const [level, setLevel] = useState("");

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
      console.log(item);
      setData(item);
      setJudul(item.judul);
      setDeskripsiSingkat(item.deskripsi_singkat);
      setDeskripsiLengkap(item.deskripsi_lengkap);
      setTips(item.tips);
      setImg(item.img);
      setPreviewImg(item.img);
      setJumlahKalori(item.jumlah_kalori);
      setLevel(item.level);
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
      formData.append("tips", tips);
      formData.append("img", img);
      formData.append("jumlah_kalori", jumlahKalori);
      formData.append("level", level);

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
    setPreviewImg(URL.createObjectURL(file));
  };

  const handleCancel = () => {
    window.history.back(); // Kembali ke halaman sebelumnya
  };

  return (
    <div className="input-form container">
      <h1>Edit Data Makanan</h1>
      <div className="form-wrapper">
        <div className="col=4">
          <div className="form-group">
            <label htmlFor="judul">Judul:</label>
            <input
              type="text"
              id="judul"
              value={judul}
              onChange={(e) => setJudul(e.target.value)}
            />
          </div>
          <div className="form-group d-flex flex-column">
            <label htmlFor="img-upload">Gambar (JPG atau WebP):</label>
            <input
              type="file"
              accept=".jpg, .webp"
              id="img-upload"
              onChange={handleImageChange}
              />
              {previewImg && <img src={previewImg} className="mt-2 img-preview" alt="Gambar" width="100%" />}
          </div>
          <div className="form-group">
            <label htmlFor="jumlah-kalori">Jumlah Kalori:</label>
            <input
              type="number"
              id="jumlah-kalori"
              value={jumlahKalori}
              onChange={(e) => setJumlahKalori(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="level">Level:</label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="">Pilih Level</option>
              <option value="rendah">Rendah</option>
              <option value="normal">Normal</option>
              <option value="tinggi">Tinggi</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="deskripsi-singkat">Deskripsi Singkat:</label>
            <textarea
              id="deskripsi-singkat"
              value={deskripsi_singkat}
              onChange={(e) => setDeskripsiSingkat(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="deskripsi-lengkap">Deskripsi Lengkap:</label>
            <textarea
              id="deskripsi-lengkap"
              value={deskripsi_lengkap}
              onChange={(e) => setDeskripsiLengkap(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="tips">Tips:</label>
            <textarea
              id="tips"
              value={tips}
              onChange={(e) => setTips(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
        <div className="button d-flex gap-3 justify-content-center mt-4">
          <Button variant="primary" onClick={handleSave}>
            Simpan
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Batal
          </Button>
        </div>
    </div>
  );
}

export default EditMakanan;
