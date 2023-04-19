import './App.css';
import Container from './components/Container/Container';
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
      </Container>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} config={{ rps: 0.005 }} />
    </div>
  );
}

export default App;
