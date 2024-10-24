import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BabbleStart from "./Components/BabbleStart";
import BabbleWave from "./Components/BabbleWave";
import BabbleReset from "./Components/BabbleReset";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BabbleStart />} />
        <Route path="/babblewave" element={<BabbleWave />} />
        <Route path="/babblereset" element={<BabbleReset />} />
      </Routes>
    </Router>
  );
};

export default App;
