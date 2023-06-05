import React from 'react'
import {Container} from 'react-bootstrap'
import ContactForm from './components/contactForm'
import Navigation from './components/navigation/Navigation';

function App () {
  return (
    <>
      <Navigation />
      <Container>
        <ContactForm />
      </Container>
    </>
  );
};

export default App
