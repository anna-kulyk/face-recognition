import './App.css';
import Container from './components/Container/Container';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

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
    </div>
  );
}

export default App;
