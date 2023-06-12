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

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/alldiet" element={<AllDiet />} />
        <Route path="/makanan-all" element={<PageMakananAll />} />
        <Route path="/olahraga-all" element={<PageOlahragaAll />} />
        <Route path="/details/:id" element={<DetailsPageDiet />} />
        <Route path="/edit-makanan/:uuid" element={<EditMakanan />} />
        <Route path="/edit-olahraga/:uuid" element={<EditOlahraga />} />
        {/* Tambahkan route untuk details */}
      </Routes>
    </Router>
  );
}

export default App;
