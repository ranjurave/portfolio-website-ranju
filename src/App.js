import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import MemoryGame from "./pages/MemoryGame";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="mm" element={<MemoryGame/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;