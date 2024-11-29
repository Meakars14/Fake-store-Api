import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/View";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <>
    <AppNavbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
