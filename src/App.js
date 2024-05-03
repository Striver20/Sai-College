import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home";
import Prospectus from "./Screens/Prospectus";
import Fees from "./Screens/Fees";
import Barel from "./Screens/Barel";
import Lakhperabagh from "./Screens/Lakhperabagh";
import PrePrimaryBarel from "./Screens/PrePrimaryBarel";
import PhysicsHOD from "./Screens/PhysicsHOD";
import PrimaryBarel from "./Screens/PrimaryBarel";
import JuniorBarel from "./Screens/JuniorBarel";
import SeniorBarel from "./Screens/SeniorBarel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prospectus" element={<Prospectus />} />
        <Route path="/fee" element={<Fees />} />
        <Route path="/barel" element={<Barel />} />
        <Route path="/lakhperabagh" element={<Lakhperabagh />} />
        <Route path="/preprimary-barel" element={<PrePrimaryBarel />} />
        <Route path="/primary-barel" element={<PrimaryBarel />} />
        <Route path="/junior-barel" element={<JuniorBarel />} />
        <Route path="/senior-barel" element={<SeniorBarel />} />
        <Route path="/physicshod" element={<PhysicsHOD />} />
      </Routes>
    </Router>
  );
}

export default App;
