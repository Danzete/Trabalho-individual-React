import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from "./routes";
import logo from './assets/Logo.jpg';
import './Style.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">
            <img
              src={logo}
              alt="Descrição da imagem"
              style={{ cursor: 'pointer', width: '100px', height: 'auto', display: 'block', margin: 'auto' }}
            />
            <span style={{display: 'flex', margin: ' auto', justifyContent: 'center', alignContent: 'center' }}>←</span>
          </Link>
        </nav>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;