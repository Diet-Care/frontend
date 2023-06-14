import React from "react";
import Service from "./Service";

const ServiceContent = () => {
  return (
      <div className="services">
    <div className="container">
        <div className=" row gap-3 flex-md-row flex-column">
          <Service
            icon="fa-solid fa-bowl-food"
            title="Diet Sehat"
            deskripsi="Memberikan informasi dan dukungan diet yang dibutuhkan."
          />
          <Service
            icon="fa-solid fa-utensils"
            title="Rekomendasi Makanan"
            deskripsi="Makanan sehat dapat meningkatkan kesehatan tubuh."
          />
          <Service
            icon="fa-solid fa-dumbbell"
            title="Rekomendasi Olahraga"
            deskripsi="Olahraga teratur penting untuk kesehatan tubuh."
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceContent;
