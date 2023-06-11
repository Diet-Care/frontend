import React from "react";
import InputForm from "./Form/InputForm";
import { DataListMakanan, DataListOlahraga } from "./DataList/DataList";

const Admin = () => {
  return (
    <>
      <InputForm />;
      <div className="container m-auto justify-content-between">
        <div className="col">
          <DataListMakanan />
        </div>
        <div className="col mt-5">
          <DataListOlahraga />
        </div>
      </div>
    </>
  );
};

export default Admin;
