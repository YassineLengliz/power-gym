import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Activities from './pages/Activities.jsx';
import Musculation from './pages/Musculation.jsx';
import Planning from './pages/Planning.jsx';
import Pricing from './pages/Pricing.jsx';
import Contact from './pages/Contact.jsx';
import SimplePage from './pages/SimplePage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/musculation" element={<Musculation />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/tarifs" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/machines" element={<SimplePage title="Machines" />} />
        <Route path="/dashboard" element={<SimplePage title="Dashboard" />} />
        <Route path="/about" element={<SimplePage title="Power Gym Kelibia" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
