import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import DoctorChoice from "./pages/DoctorChoice";
import PhysicalDoctor from "./pages/PhysicalDoctor";
import AIDoctor from "./pages/AIDoctor";
import Ambulance from "./pages/Ambulance";
import Disease from "./pages/Disease";
import Schemes from "./pages/Shm";
import MedicalCamp from "./pages/Mc";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Registration */}
        <Route path="/register" element={<Register />} />

        {/* Doctor Pages */}
        <Route path="/doctor-choice" element={<DoctorChoice />} />
        <Route path="/physical-doctor" element={<PhysicalDoctor />} />
        <Route path="/ai-doctor" element={<AIDoctor />} />

        {/* Ambulance */}
        <Route path="/ambulance" element={<Ambulance />} />

        {/* Disease */}
        <Route path="/disease" element={<Disease />} />

        {/* Government Schemes */}
        <Route path="/schemes" element={<Schemes />} />

        {/* Medical Camp */}
        <Route path="/medical-camp" element={<MedicalCamp />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;