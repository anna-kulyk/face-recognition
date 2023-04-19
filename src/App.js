import './App.css';
import Container from './components/Container/Container';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
        <Logo />
      </Container>
    </div>
  );
}

export default App;
