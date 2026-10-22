import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import PortCoverage from "./pages/PortCoverage";

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Scroll Position */}
      <ScrollManager />

      {/* Global Navbar */}
      <Navbar />

      {/* Route content: use div to avoid nesting main landmarks */}
      <div>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />

          {/* Port Coverage */}
          <Route path="/ports" element={<PortCoverage />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
