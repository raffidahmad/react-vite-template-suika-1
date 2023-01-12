import "./App.css";
import { Routes, Route } from "react-router-dom";
//import layout items
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
//custom imports
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
