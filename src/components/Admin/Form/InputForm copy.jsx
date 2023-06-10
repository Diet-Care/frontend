import React, { useState, useRef } from "react";

function InputFormc() {
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
  const inputFileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (kategori === "") {
      setErrorMessage("Pilih kategori terlebih dahulu");
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

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log(result); // Tampilkan respon dari API

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
    <div>
      <h1>Form Input Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Kategori:
          <select value={kategori} onChange={handleKategoriChange}>
            <option value="">Pilih Kategori</option>
            <option value="makanan">Makanan</option>
            <option value="olahraga">Olahraga</option>
          </select>
        </label>
        <br />
        <label>
          Judul:
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </label>
        <br />
        <label>
          Deskripsi Singkat:
          <input
            type="text"
            value={deskripsiSingkat}
            onChange={(e) => setDeskripsiSingkat(e.target.value)}
          />
        </label>
        <br />
        <label>
          Deskripsi Lengkap:
          <input
            type="text"
            value={deskripsiLengkap}
            onChange={(e) => setDeskripsiLengkap(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tips:
          <input
            type="text"
            value={tips}
            onChange={(e) => setTips(e.target.value)}
          />
        </label>
        <br />
        <label>
          Gambar (JPG atau WebP):
          <input
            type="file"
            accept=".jpg, .webp"
            onChange={handleImageChange}
            ref={inputFileRef}
          />
        </label>
        <br />
        <label>
          Jumlah Kalori:
          <input
            type="number"
            value={jumlahKalori}
            onChange={(e) => setJumlahKalori(e.target.value)}
          />
        </label>
        <br />
        <label>
          Level:
          <input
            type="text"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
        </label>
        <br />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        {isSuccess && <p style={{ color: "red" }}>Data berhasil dikirim</p>}
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default InputFormc;
