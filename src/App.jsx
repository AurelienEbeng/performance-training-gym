import About from "./About";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Reserve from "./Reserve";
import Footer from "./Footer";
import ListOfReservations from "./ListOfReservations";

function App() {
  return (
    <>
      <Navbar />
      <div className="py-8"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/reservations" element={<ListOfReservations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
