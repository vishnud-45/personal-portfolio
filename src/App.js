import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Projects from "./Pages/Projects";
import Education from './Pages/Education';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ProjectDisplay from './Pages/ProjectDisplay';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes className="vishnu">
                <Route path="/Home" element={<Home />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/project/:id" element={<ProjectDisplay />} />
                <Route path="/Education" element={<Education/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
