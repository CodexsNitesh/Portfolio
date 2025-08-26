import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Component/Portfolio";
import EcomPic from "./Component/EcomPic";
import TaskPic from "./Component/TaskPic";

function App() {
  return (
    <Router>
      <div className="App font-sans bg-white dark:bg-gray-900 min-h-screen">
        <Routes>
          {/* Portfolio main page */}
          <Route path="/" element={<Portfolio />} />

          {/* Ecommerce demo page */}
          <Route path="/ecompic" element={<EcomPic />} />
          <Route path="/taskpic" element={<TaskPic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
