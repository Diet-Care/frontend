import React, { useState, useRef } from "react";
import "../style/input-form.css";
import Button from "../../Button";

function InputForm() {
  const [kategori, setKategori] = useState("");
  const [judul, setJudul] = useState("");
  const [deskripsiSingkat, setDeskripsiSingkat] = useState("");
  const [deskripsiLengkap, setDeskripsiLengkap] = useState("");
  const [tips, setTips] = useState("");
  const [img, setImg] = useState(null);
  const [jumlahKalori, setJumlahKalori] = useState("");
  const [level, setLevel] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Indikator loading
  const inputFileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (kategori === "") {
      setErrorMessage("Pilih kategori terlebih dahulu");
      return;
    }

    if (
      judul === "" ||
      deskripsiSingkat === "" ||
      deskripsiLengkap === "" ||
      tips === "" ||
      img === null ||
      jumlahKalori === "" ||
      level === ""
    ) {
      setErrorMessage("Isi semua field yang diperlukan");
      return;
    }

    // Menentukan URL berdasarkan kategori yang dipilih
    let url = "";
    if (kategori === "makanan") {
      url = "https://backend-production-2c47.up.railway.app/makanan";
    } else if (kategori === "olahraga") {
      url = "https://backend-production-2c47.up.railway.app/olahraga";
    }

    // Membuat objek data yang akan dikirim ke API
    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsi_singkat", deskripsiSingkat);
    formData.append("deskripsi_lengkap", deskripsiLengkap);
    formData.append("tips", tips);
    formData.append("img", img);
    formData.append("jumlah_kalori", jumlahKalori);
    formData.append("level", level);
    // mengambil token dari localstorage
    const token = localStorage.getItem("token");

    setIsLoading(true); // Menandakan sedang dalam proses pengiriman data

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      // Tampilkan respon dari API

      // Mengosongkan semua input setelah submit
      setJudul("");
      setDeskripsiSingkat("");
      setDeskripsiLengkap("");
      setTips("");
      setImg(null);
      setJumlahKalori("");
      setLevel("");
      setIsSuccess(true);

      // Mengosongkan kategori setelah submit
      setKategori("");

      // Mengosongkan teks pada input img setelah submit
      inputFileRef.current.value = "";
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat mengirim data");
    } finally {
      setIsLoading(false); // Menghentikan indikator loading setelah selesai mengirim data
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleKategoriChange = (e) => {
    setKategori(e.target.value);
    setErrorMessage(""); // Menghapus pesan error jika ada perubahan kategori
  };

  return (
    <div className="input-form">
      <form onSubmit={handleSubmit}>
 <div className="form-wrapper">
          <div className="col-4">
            <div className="form-group">
              <label htmlFor="kategori">Kategori:</label>
              <select
                id="kategori"
                value={kategori}
                onChange={handleKategoriChange}
              >
                <option value="">Pilih Kategori</option>
                <option value="makanan">Makanan</option>
                <option value="olahraga">Olahraga</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="judul">Judul:</label>
              <input
                type="text"
                id="judul"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="img-upload">Gambar (JPG atau WebP):</label>
              <input
                type="file"
                accept=".jpg, .webp"
                id="img-upload"
                onChange={handleImageChange}
                ref={inputFileRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="jumlah-kalori">Jumlah Kalori:</label>
              <input
                type="text"
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
                value={deskripsiSingkat}
                onChange={(e) => setDeskripsiSingkat(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="deskripsi-lengkap">Deskripsi Lengkap:</label>
              <textarea
                id="deskripsi-lengkap"
                value={deskripsiLengkap}
                onChange={(e) => setDeskripsiLengkap(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="tips">Tips:</label>
              <textarea
                type="text"
                id="tips"
                value={tips}
                onChange={(e) => setTips(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Mengirim..." : "Kirim Data"}
          </Button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {isSuccess && (
            <p className="success-message">Data berhasil dikirim</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default InputForm;
