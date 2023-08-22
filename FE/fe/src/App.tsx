import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Nav from "./components/Nav";
import RouterPropTest from "./routes/Search";
import RouterPropTestResult from "./routes/RouterPropTestResult";
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<RouterPropTest />} />
          <Route
            path="/routerproptestresult"
            element={<RouterPropTestResult />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
