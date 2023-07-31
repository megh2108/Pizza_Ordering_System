import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
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
    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  );
}

export default App;
