import React from 'react'
import {Container} from 'react-bootstrap'
import ContactForm from './components/contactForm'
import Navigation from './components/navigation/Navigation';

function App () {
  return (
    <Container>
      <Navigation />
      <ContactForm />
    </Container>
  );
};

export default App
