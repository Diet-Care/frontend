// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { CgProfile } from "react-icons/cg";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import Button from "./Button";
// import "../style/navigation.css";

// const Navigation = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk menyimpan status login pengguna

//   // Fungsi untuk mengubah status login menjadi true
//   const handleLogin = () => {
//     setIsLoggedIn(false);
//   };

//   // Fungsi untuk menghandle logout
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <Navbar expand="lg" className="navbar-fix">
//       <Container className="nav navbar-nav mt-0 ">
//         <Navbar.Brand href="/" className="me-4">
//           {/* <a> */}
//           <img
//             src="https://i.ibb.co/mCXdQKm/logo-no-background.png"
//             alt="logo-no-background"
//             border="0"
//             width="100%"
//             height={30}
//           />
//           {/* </a> */}
//         </Navbar.Brand>
//         <Navbar.Collapse id="navbarScroll">
//           <Nav className="me-auto my-2 my-lg-0 nav-link-wrapper" navbarScroll>
//             <NavLink exact to="/" activeClassName="active" className="nav-link">
//               Home
//             </NavLink>
//             <NavLink
//               to="/hitung-kalori"
//               activeClassName="active"
//               className="nav-link"
//             >
//               Diet
//             </NavLink>
//             <NavLink
//               to="/edukasi"
//               activeClassName="active"
//               className="nav-link"
//             >
//               Edukasi
//             </NavLink>
//             <NavLink
//               to="/about-us"
//               activeClassName="active"
//               className="nav-link"
//             >
//               About Us
//             </NavLink>
//             <NavLink
//               to="/contact"
//               activeClassName="active"
//               className="nav-link"
//             >
//               Contact
//             </NavLink>{" "}
//           </Nav>
//           {/* after login */}
//           <Nav className="col py-lg-0 py-3 sign d-flex justify-content-lg-end justify-content-center align-items-center gap-2">
//             {!isLoggedIn ? (
//               // Tampilkan tombol Sign Up dan Login jika belum login
//               <>
//                 <NavLink to="/register" className="signup">
//                   <Button>Sign Up</Button>
//                 </NavLink>
//                 <NavLink to="/login" className="login">
//                   <Button onClick={handleLogin}>Login</Button>
//                 </NavLink>
//               </>
//             ) : (
//               // Tampilkan tombol Profile jika sudah login
//               <NavLink to="/profile" className="profile">
//                 <Button onClick={handleLogout}>
//                   <CgProfile /> Profile
//                 </Button>
//               </NavLink>
//             )}
//           </Nav>
//           {/* after login */}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navigation;
