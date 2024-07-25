import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<HomePage />} />
          <Route path="/signup" element={<HomePage />} />
          <Route path="/ap" element={<HomePage />} />
          <Route path="/amp" element={<HomePage />} />
          <Route path="/ssc" element={<HomePage />} />
          <Route path="/sap" element={<HomePage />} />
          <Route path="/ml" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
