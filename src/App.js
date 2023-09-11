import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import FindServices from './components/findServices';
import Solicitud from './components/Solicitud';
import TrabajaConNosotros from './components/TrabajaConNosotros';
import PerfilTrabajador from './components/PerfilTrabajador';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/findServices" element={<FindServices />} />
        <Route path="/solicitud" element={<Solicitud/>} />
        <Route path="/trabaja-con-nosotros" element={<TrabajaConNosotros/>} />
        <Route path="/perfil-trabajador" element={<PerfilTrabajador/>} />
      </Routes>
    </Router>
  );
}

export default App;
