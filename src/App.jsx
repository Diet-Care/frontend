import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AllDiet from "./pages/AllDiet";
import DetailsPageDiet from "./components/Details Page/DetailsPage";
import PageOlahragaAll from "./pages/PageOlahragaAll";
import PageMakananAll from "./pages/PageMakananAll";

import AdminPage from "./pages/AdminPage";
import EditMakanan from "./components/Admin/EditData/EditMakanan";
import EditOlahraga from "./components/Admin/EditData/EditOlahraga";


import Navigation from "../src/components/Navigation";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Hero from "./components/Hero";
import DetailOlahraga from "./components/detailOlahraga";

// import "./App.css";
// import HitungKaloriPage from "./pages/HitungKaloriPage";
// import { NormalKalori, RendahKalori, TinggiKalori } from "./components/HitungKalori/Pages/PageRekomendasiMakanan";

// import "./App.css";
import HitungKaloriPage from "./pages/HitungKaloriPage";
import {
  NormalKalori,
  RendahKalori,
  TinggiKalori,
} from "./components/HitungKalori/Pages/PageRekomendasiMakanan";
import AboutUs from "./components/AboutUs/AboutUs";
import EdukasiPage from "./pages/EdukasiPage";
import ContactForm from "./components/Home/Contact/contactForm";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>

        <Route path="/" element={<AdminPage />} />
        {/* <Route path="/about" element={<About />} /> */}


        <Route path="/" element={<HomePage />} />
        <Route path="/hitung-kalori" element={<HitungKaloriPage />} />
        <Route path="/edukasi" element={<EdukasiPage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/alldiet" element={<AllDiet />} />
        <Route path="/makanan-all" element={<PageMakananAll />} />
        <Route path="/olahraga-all" element={<PageOlahragaAll />} />
        <Route path="/details/:id" element={<DetailsPageDiet />} />
        <Route path="/tinggi" element={<TinggiKalori />} />
        <Route path="/normal" element={<NormalKalori />} />
        <Route path="/rendah" element={<RendahKalori />} />
        <Route path="/edit-makanan/:uuid" element={<EditMakanan />} />
        <Route path="/edit-olahraga/:uuid" element={<EditOlahraga />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
