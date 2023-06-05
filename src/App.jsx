import { useState } from "react";
import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Container from "react-bootstrap/esm/Container";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Container>
        <Hero/>
        
      </Container>
    </>
  );
}

export default App;
