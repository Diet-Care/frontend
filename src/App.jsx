import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Outlet,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailsPageDiet from "./components/DetailsPage/DetailsPage";
import PageOlahragaAll from "./pages/PageOlahragaAll";
import PageMakananAll from "./pages/PageMakananAll";
import Contact from "./pages/Contact";
import EditMakanan from "./components/Admin/EditData/EditMakanan";
import EditOlahraga from "./components/Admin/EditData/EditOlahraga";
import Footer from "./components/Footer";
import HitungKaloriPage from "./pages/HitungKaloriPage";
import EdukasiPage from "./pages/EdukasiPage";
import Login from "./components/login/Login";
import Navigation from "./components/Navigation";
import AboutUs from "./pages/AboutUsPage";
import {
  TinggiKalori,
  NormalKalori,
  RendahKalori,
} from "./components/HitungKalori/Pages/PageRekomendasiMakanan";
import Register from "./components/register/Register";
import Admin from "./components/Admin/Admin";
import ProfilePage from "./pages/ProfilePage";
import AccountPage from "./pages/AccountPage";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<DefaultRoutes />} />
      </Routes>
    </Router>
  );
}

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="admin/edit-makanan/:uuid" element={<EditMakanan />} />
        <Route path="admin/edit-olahraga/:uuid" element={<EditOlahraga />} />
      </Routes>
    </>
  );
}

function DefaultRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/hitung-kalori" element={<HitungKaloriPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edukasi" element={<EdukasiPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/makanan-all" element={<PageMakananAll />} />
        <Route path="/olahraga-all" element={<PageOlahragaAll />} />
        <Route path="/details/:id" element={<DetailsPageDiet />} />
        <Route path="/tinggi" element={<TinggiKalori />} />
        <Route path="/normal" element={<NormalKalori />} />
        <Route path="/rendah" element={<RendahKalori />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
