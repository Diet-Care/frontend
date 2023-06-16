import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/data-list.css";
import Button from "../../Button";

function DataList({ url, category }) {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

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
      setDataLoaded(true);
    } catch (error) {
      console.error(error);
      setErrorMessage("Terjadi kesalahan saat mengambil data");
    }
  };

  const handleDelete = async (uuid) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`${url}/${uuid}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(token);
      console.log(response);
      if (response.ok) {
        fetchData();
      } else {
        setErrorMessage("Gagal menghapus data");
      }
    } catch (error) {
      const errorData = await response.json({
        message
      });
      console.log(error(error.message));
      console.log(error(errorData));
      setErrorMessage("Terjadi kesalahan saat mengirim permintaan");
    }
  };

  const getEditURL = (uuid) => {
    if (category === "makanan") {
      return `admin/edit-makanan/${uuid}`;
    } else if (category === "olahraga") {
      return `admin/edit-olahraga/${uuid}`;
    }
    return "";
  };

  return (
    <div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {dataLoaded ? (
        data.length > 0 ? (
          <table className="data-table">
            <thead>
              <tr>
                <th className="image">Gambar</th>
                <th className="th-makanan" >Nama Makanan</th>
                <th className="level">Level</th>
                <th className="fit-content">Edit</th>
                <th className="fit-content">Hapus</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.uuid}>
                  <td>
                    <img src={item.img} alt="" width="100%" />
                  </td>
                  <td className="nama-makanan">{item.judul}</td>
                  <td>{item.level}</td>
                  <td className="td-edit">
                    <Button className="edit-button">
                      <Link to={getEditURL(item.uuid)} className="text-white ">
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                    </Button>
                  </td>
                  <td className="td-delete">
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(item.uuid)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-data">
            <p className="no-data-message text-center">
              Tidak ada data yang tersedia.
            </p>
          </div>
        )
      ) : (
        <div className="loading text-center d-flex align-items-center justify-content-center">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

function DataListMakanan() {
  const urlMakanan = "https://backend-production-2c47.up.railway.app/makanan";

  return (
    <div>
      <div className="list-wrapper">
        <DataList url={urlMakanan} category="makanan" />
      </div>
    </div>
  );
}

function DataListOlahraga() {
  const urlOlahraga = "https://backend-production-2c47.up.railway.app/olahraga";

  return (
    <div>
      <div className="list-wrapper">
        <DataList url={urlOlahraga} category="olahraga" />
      </div>
    </div>
  );
}

export { DataListMakanan, DataListOlahraga };
