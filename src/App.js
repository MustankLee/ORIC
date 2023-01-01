import "./App.css";
// import Users from './Users.js'
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/GeneralContent/Home/Home.js";
import Contact from "./components/GeneralContent/Contact/Contact.js";
import About from "./components/GeneralContent/About/About.js";
import Project from "./components/Others/Project/Project.js";
import Skill from "./components/Others/Skill/Skill.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <Router>
        <div className="flex max-md:block">
          <Navbar />
          <Home />
          <div className="h-screen w-5/6 overflow-y-auto px-6 py-4 bg-white max-md:w-full">
            <Routes>
              <Route path="/" element={<Navigate to="/home"/>}></Route>
              <Route exact path="/home" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
              <Route exact path="/skill" element={<Skill />}></Route>
              <Route exact path="/project" element={<Project />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
