import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AllDiet from "./pages/AllDiet";
import DetailsPageDiet from "./components/Details Page/DetailsPage";
import PageOlahragaAll from "./pages/PageOlahragaAll";
import PageMakananAll from "./pages/PageMakananAll";
import Edukasi from "./components/Edukasi/Edukasi";

import AdminPage from "./pages/AdminPage";

import Navigation from "../src/components/Navigation";
import Container from "react-bootstrap/Container";
import Hero from "./components/Hero";
import DetailOlahraga from "./components/detailOlahraga";
import "./App.css";


function App() {
  return (
    <Router>
      {/* <Navigation /> */}
      {/* <Container> */}
        {/* <Hero/> */}
        {/* <DetailOlahraga /> */}
      {/* </Container> */}
      <Routes>
        <Route path="/" element={<Edukasi />} />
        <Route path="/" element={<AdminPage />} />

        <Route path="/about" element={<About />} />
        <Route path="/alldiet" element={<AllDiet />} />
        <Route path="/makanan-all" element={<PageMakananAll />} />
        <Route path="/olahraga-all" element={<PageOlahragaAll />} />
        <Route path="/details/:id" element={<DetailsPageDiet />} />
        {/* Tambahkan route untuk details */}
      </Routes>
    </Router>
  );
}

export default App;
