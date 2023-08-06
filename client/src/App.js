import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Menu from "./Components/Menu/Menu";
import Menu1 from "./Components/Menu1/Menu1";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import ScrollToTop from './Components/Scroll/ScrollToTop'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      {/* <Route path="/Menu" element={<Menu />} /> */}
      <Route path="/Menu" element={<Menu1 />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/" element={<Home />} />

    </Routes>
    <Footer />
    </BrowserRouter>
  
    </>
  );
}

export default App;
