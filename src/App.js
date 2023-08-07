import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import BrickBreaker from './pages/BrickBreaker';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="bb" element={<BrickBreaker/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;