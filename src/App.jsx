import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Container from "react-bootstrap/esm/Container";
import Hero from "./components/Hero";
import DetailOlahraga from "./components/detailOlahraga";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Container>
        {/* <Hero/> */}
        <DetailOlahraga />
      </Container>
    </>
  );
}

export default App;
