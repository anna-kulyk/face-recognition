import './App.css';
import Container from './components/Container/Container';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import ParticlesBg from 'particles-bg'

function App() {
  return (
    <div className="app">
      <Container>
        <div className="app__header">
          <Logo />
          <Navigation />
        </div>
        <ImageLinkForm />
        <FaceRecognition url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" />
      </Container>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} config={{ rps: 0.005 }} />
    </div>
  );
}

export default App;
