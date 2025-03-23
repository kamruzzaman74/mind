import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Services from "./Service";
import WhyChooseUs from "./WhyChooseUs";
import NetworkSolutions from "./NetworkSolutions";
import Footer from "./Footer";
import Hero from "./Hero"; // Fixed duplicate import
import Product from "./Product";
import Solutions from "./Solutions"; // Fixed spelling error
import Company from "./Company";
import Contact from "./Contact";
import Isp from "./Isp";
export default function App() {
  return (
    <Router>
      <Header />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/product" element={<Product />} />
          <Route path="/solutions" element={<Solutions />} /> {/* Fixed typo */}
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact/>} />


        </Routes>
      </main>

      <Services />
      <Isp/>
      <WhyChooseUs />
      <NetworkSolutions />
      <Footer />
    </Router>
  );
}
