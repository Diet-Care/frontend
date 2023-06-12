import React, { useState } from "react";
import InputForm from "./Form/InputForm";
import "./style/admin.css";
import { DataListMakanan, DataListOlahraga } from "./DataList/DataList";

function Admin() {
  const [activeMenu, setActiveMenu] = useState("Input Data");

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

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-2 menu-wrapper">
          <div className="  border-right" id="sidebar-wrapper">
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
  );
}

export default Admin;
