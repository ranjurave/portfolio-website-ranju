import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import BrickBreaker from './pages/BrickBreaker';
import DriveMe from "./pages/DriveMe";
import TicTacToe from "./pages/TicTacToe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="bb" element={<BrickBreaker/>}/>
          <Route path="driveme" element={<DriveMe/>}/>
          <Route path="tictactoe" element={<TicTacToe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;