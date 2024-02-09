import './App.css';
import React from 'react';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import ParticlesBg from 'particles-bg';
import FaceRecognitionApp from './components/FaceRecognitionApp/FaceRecognitionApp';

function App() {

  return (
    <div className="app">
      <Container>
        <header className="app__header">
          <Logo />
        </header>
        <FaceRecognitionApp />
      </Container>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} config={{ rps: 0.005 }} />
    </div>
  );
}

export default App;
