import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import Tema from './pages/TrocaTema.js';
import Mensagem from './pages/Mensagem.js';
import ListaTarefa from './pages/ListaTarefa.js';
import logo from './assets/Logo.jpg';
import './Style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav >
          <Link to="/">
            <img
              src={logo}
              alt="Descrição da imagem"
              style={{ cursor: 'pointer', width: '100px', height: 'auto', display: 'block', margin: 'auto' }}
            />
           <span style={{display: 'flex', margin: ' auto', justifyContent: 'center', alignContent: 'center' }}>←</span>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tema" element={<Tema />} />
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/lista" element={<ListaTarefa />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;