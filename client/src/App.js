import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Menu from "./Components/Menu/Menu";
import About from "./Components/About/About";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/About" element={<About />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  );
}

export default App;
