import { Footer, Header } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, LifePurpose } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/numbers" element={<LifePurpose />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
