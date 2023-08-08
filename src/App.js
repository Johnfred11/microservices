import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/profile';
import FindServices from './components/findServices';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/findServices" element={<FindServices />} />
      </Routes>
    </Router>
  );
}

export default App;
