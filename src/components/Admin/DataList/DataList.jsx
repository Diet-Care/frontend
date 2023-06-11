import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/data-list.css";

function DataList({ url }) {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      const dataResult = result.data;

      // Sorting data
      dataResult.sort((a, b) => new Date(b.created) - new Date(a.created));

      setData(dataResult);
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat mengambil data");
    }
  };

  const handleDelete = async (uuid) => {
    try {
      const response = await fetch(`${url}/${uuid}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchData();
      } else {
        setErrorMessage("Gagal menghapus data");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat mengirim permintaan");
    }
  };

  return (
    <div>
      <h1 className="data-title">Data</h1>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {data.length > 0 ? (
        <ul className="data-list row">
          {data.map((item) => (
            <li key={item.uuid} className="data-item col">
              <div className="box">
                <img src={item.img} alt="" width="100%" />
                <p className="text-judul">{item.judul}</p>
              </div>
              <div className="button-edit">
                <Link to={`/edit/${item.uuid}`} className="edit-button">
                  Edit
                </Link>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.uuid)}
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data-message">Tidak ada data yang tersedia.</p>
      )}
    </div>
  );
}

function DataListMakanan() {
  const urlMakanan = "https://backend-production-2c47.up.railway.app/makanan";

  return (
    <div className="container  ">
      <h1>Data List Makanan</h1>
      <div className="list-wrapper">
        <DataList url={urlMakanan} />
      </div>
    </div>
  );
}

function DataListOlahraga() {
  const urlOlahraga = "https://backend-production-2c47.up.railway.app/olahraga";

  return (
    <div className="container">
      <h1>Data List Olahraga</h1>
      <div className="list-wrapper">
        <DataList url={urlOlahraga} />
      </div>
    </div>
  );
}

export { DataListMakanan, DataListOlahraga };
