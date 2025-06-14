import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      {/*components */}
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
  );
}

export default App;
