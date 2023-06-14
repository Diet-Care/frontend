import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/hitung-kalori.css";
const FormHitungKalori = () => {
  const [usia, setUsia] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [tinggiBadan, setTinggiBadan] = useState("");
  const [beratBadan, setBeratBadan] = useState("");
  const [errorText, setErrorText] = useState("");
  const [hasil, setHasil] = useState("");
  const [rekomendasiDiet, setRekomendasiDiet] = useState("");

  const handleHitung = () => {
    if (
      usia.trim() === "" ||
      jenisKelamin.trim() === "" ||
      tinggiBadan.trim() === "" ||
      beratBadan.trim() === ""
    ) {
      setErrorText("Semua form harus diisi!");
      return;
    }

    setErrorText("");

    const kalori =
      jenisKelamin === "laki-laki"
        ? 88.36 + 13.4 * beratBadan + 4.8 * tinggiBadan - 5.7 * usia
        : 447.6 + 9.2 * beratBadan + 3.1 * tinggiBadan - 4.3 * usia;

    let jenisKalori;
    if (kalori < 1500) {
      jenisKalori = "rendah";
    } else if (kalori >= 1500 && kalori < 2500) {
      jenisKalori = "normal";
    } else {
      jenisKalori = "tinggi";
    }

    setHasil("Kebutuhan kalori Anda: " + Math.round(kalori) + " kkal");

    let link = null;
    if (jenisKalori === "rendah") {
      link = <Link to="/rendah">Lihat rekomendasi makanan</Link>;
    } else if (jenisKalori === "normal") {
      link = <Link to="/normal">Lihat rekomendasi makanan</Link>;
    } else {
      link = <Link to="/tinggi">Lihat rekomendasi makanan</Link>;
    }

    setRekomendasiDiet(link);
  };

  return (
    <>
      <div class="hitung-wrapper">
        <div class="row mx-auto hitung-content align-items-center">
          <div class="col form text">
            <div className="box-hitung d-flex justify-content-center flex-column">
              <h1 className="mb-4">Hitung Kalori Anda</h1>
              <form>
                <label htmlFor="usia">Usia:</label>
                <input
                  type="number"
                  id="usia"
                  required
                  value={usia}
                  onChange={(e) => setUsia(e.target.value)}
                />
                <br />
                <label htmlFor="jenis-kelamin">Pilih Jenis Kelamin:</label>
                <select
                  id="jenis-kelamin"
                  required
                  value={jenisKelamin}
                  onChange={(e) => setJenisKelamin(e.target.value)}
                >
                  <option value="">Pilih Jenis Kelamin</option>
                  <option value="laki-laki">Laki-laki</option>
                  <option value="perempuan">Perempuan</option>
                </select>
                <br />
                <label htmlFor="tinggi-badan">Tinggi Badan (cm):</label>
                <input
                  type="number"
                  id="tinggi-badan"
                  required
                  value={tinggiBadan}
                  onChange={(e) => setTinggiBadan(e.target.value)}
                />
                <br />
                <label htmlFor="berat-badan">Berat Badan (kg):</label>
                <input
                  type="number"
                  id="berat-badan"
                  required
                  value={beratBadan}
                  onChange={(e) => setBeratBadan(e.target.value)}
                />
                <br />
                <button type="button" id="btn-hitung" onClick={handleHitung}>
                  Hitung
                </button>
                <div>
                  <p id="error-text">{errorText}</p>
                </div>
              </form>
              <div>
                <p id="hasil">{hasil}</p>
              </div>
              <div id="rekomendasi-diet">{rekomendasiDiet}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormHitungKalori;
