import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  );
}

export default App;
