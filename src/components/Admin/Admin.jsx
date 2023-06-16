import React, { useState } from "react";
import { useDispatch } from "react-redux"; // Import the useDispatch hook
import { useNavigate } from "react-router-dom";
import InputForm from "./Form/InputForm";
import "./style/admin.css";
import { DataListMakanan, DataListOlahraga } from "./DataList/DataList";
import UserList from "./UserList/UserList";
import Button from "../Button";
import { setLoginStatus } from "../../redux/actions/actions";

function Admin() {
  const [activeMenu, setActiveMenu] = useState("Input Data");
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Use the useDispatch hook to get the dispatch function

  const menuItems = [
    { id: 1, title: "Input Data", component: <InputForm /> },
    {
      id: 2,
      title: "Data List Makanan",
      component: <DataListMakanan />,
      dataKey: "makanan",
    },
    {
      id: 3,
      title: "Data List Olahraga",
      component: <DataListOlahraga />,
      dataKey: "olahraga",
    },
  ];

  const handleMenuClick = (menuTitle) => {
    setActiveMenu(menuTitle);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setLoginStatus(false)); // Dispatch an action to update the login status
    navigate("/");
  };

  return (
    <div className="admin-wrapper ">
      <div className="wrapper">
        <div className="row">
          <div className="col-md-2 menu-wrapper">
            <div className="border-right" id="sidebar-wrapper">
              <div className="top">
                <div className="dica-logo p-4">
                  <img
                    src="https://i.ibb.co/FzRc6JC/logo-primary.png"
                    alt="logo-primary"
                    border="0"
                    width="75%"
                  />
                </div>
                <div className="list-group list-group-flush">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      className={`admin-menu ${
                        activeMenu === item.title ? "active" : ""
                      }`}
                      onClick={() => handleMenuClick(item.title)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bottom">
                <Button variant="red" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
          <div className="col item-component" style={{ overflowY: "auto" }}>
            {menuItems.map((item) =>
              activeMenu === item.title ? (
                <div key={item.id} className="col-md-12">
                  {item.component}
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
