import React from "react";
import Service from "./Service";
import { NavLink } from "react-router-dom";

const ServiceContent = () => {
  return (
    <div className="services">
      <div className="container">
        <div className=" row gap-3 flex-md-row flex-column">
          <NavLink to="/hitung-kalori" className="col">
            <Service
              icon="fa-solid fa-bowl-food"
              title="Diet Sehat"
              deskripsi="Memberikan informasi dan dukungan diet yang dibutuhkan."
            />
          </NavLink>
          <NavLink to="/#makanan" className="col">
            <Service
              icon="fa-solid fa-utensils"
              title="Rekomendasi Makanan"
              deskripsi="Makanan sehat dapat meningkatkan kesehatan tubuh."
            />
          </NavLink>
          <NavLink to="#olahraga" className="col">
            <Service
              icon="fa-solid fa-dumbbell"
              title="Rekomendasi Olahraga"
              deskripsi="Olahraga teratur penting untuk kesehatan tubuh."
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
