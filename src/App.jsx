import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AllDiet from "./pages/AllDiet";
import DetailsPageDiet from "./components/RekomendasiDIet/DetailsPageDiet";
import PageOlahragaAll from "./pages/PageOlahragaAll";
import PageMakananAll from "./pages/PageMakananAll";
import Navigation from "./components/navigation/Navigation";
import Container from "react-bootstrap/Container";
import Hero from "./components/Hero";
import DetailOlahraga from "./components/detailOlahraga";
import "./App.css";
import HitungKaloriPage from "./pages/HitungKaloriPage";
import { NormalKalori, RendahKalori, TinggiKalori } from "./components/HitungKalori/Pages/PageRekomendasiMakanan";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HitungKaloriPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/alldiet" element={<AllDiet />} />
        <Route path="/makanan-all" element={<PageMakananAll />} />
        <Route path="/olahraga-all" element={<PageOlahragaAll />} />
        <Route path="/details/:id" element={<DetailsPageDiet />} />
        <Route path="/tinggi" element={<TinggiKalori/>} />
        <Route path="/normal" element={<NormalKalori/>} />
        <Route path="/rendah" element={<RendahKalori/>} />
        {/* Tambahkan route untuk details */}
      </Routes>
    </Router>
  );
}

export default App;
