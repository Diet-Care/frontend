import CardJurusan from "./CardJurusan";
import Hero from "./hero";
import card1 from "../assets/Home/card (1).jpg";
import card2 from "../assets/Home/card (2).jpg";
import card3 from "../assets/Home/card (3).jpg";
import CardKegiatan from "./CardKegiatan";
import kegiatan1 from "../assets/Home/kegiatan (1).jpg";
import kegiatan2 from "../assets/Home/kegiatan (2).jpg";
import kegiatan3 from "../assets/Home/kegiatan (3).jpg";

const MainContent = () => {
  return (
    <div>
      <Hero />;
      <div className="container">
        {/* jurusan */}
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Jurusan Sekolah</h1>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <CardJurusan
              image={card1}
              title="TKJ"
              deskripsi="TKJ (Teknik Komputer dan Jaringan) adalah ilmu berbasis Teknologi Informasi dan Komunikasi terkait kemampuan algoritma, dan pemrograman komputer"
            />
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <CardJurusan
              image={card2}
              title="TKR"
              deskripsi="Teknik Kendaraan Ringan merupakan kompetensi keahlian dibidang Teknik Otomotif yang menekankan keahlian pada bidang penguasaan jasa perbaikan kendaraan ringan."
            />
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <CardJurusan
              image={card3}
              title="Multimedia"
              deskripsi="Jurusan multimedia merupakan salah satu dari banyaknya jurusan di bidang komputer yang mempelajari mengenai penggunaan komputer guna dalam menyajikan data-data"
            />
          </div>
        </div>
        {/* jurusan */}
        {/* kegiatan */}
        <div className="row">
          <div className="col-12 text-center my-5">
            <h1>Kegiatan</h1>
          </div>
        </div>
        <div className="row gap-5">
          <div className="col-12">
            <CardKegiatan
              image={kegiatan1}
              deskripsi="Pada dasarnya, coding adalah proses ketika kita ingin komputer memecahkan masalah berdasarkan pedoman logika yang kamu sediakan."
            />
          </div>
          <div className="col-12">
            <CardKegiatan
              image={kegiatan2}
              deskripsi="Pada dasarnya, coding adalah proses ketika kita ingin komputer memecahkan masalah berdasarkan pedoman logika yang kamu sediakan."
            />
          </div>
          <div className="col-12">
            <CardKegiatan
              image={kegiatan3}
              deskripsi="Pada dasarnya, coding adalah proses ketika kita ingin komputer memecahkan masalah berdasarkan pedoman logika yang kamu sediakan."
            />
          </div>
        </div>
        {/* kegiatan */}
      </div>
    </div>
  );
};
export default MainContent;
