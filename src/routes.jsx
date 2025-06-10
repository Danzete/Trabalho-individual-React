import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tema from './pages/TrocaTema';
import Mensagem from './pages/Mensagem';
import ListaTarefa from './pages/ListaTarefa';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tema" element={<Tema />} />
      <Route path="/mensagem" element={<Mensagem />} />
      <Route path="/lista" element={<ListaTarefa />} />
    </Routes>
  );
}