import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="country" element={<Country />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
