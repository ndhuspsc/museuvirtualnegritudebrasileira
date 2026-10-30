import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";
import Home from "./pages/Home";
import Exposicao from "./pages/Exposicao";
import Sobre from "./pages/Sobre";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
        <Route path="/exposicao.html" element={<Exposicao />} />
        <Route path="/sobre.html" element={<Sobre />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </>
  );
}
