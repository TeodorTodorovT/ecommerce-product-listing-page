import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar"

import ClothesPLP from "./pages/ClothesPLP";
import ShoesPLP from "./pages/ShoesPLP";


function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/clothes" />} />
          <Route path="/clothes" element={<ClothesPLP />} />
          <Route path="/shoes" element={<ShoesPLP />} />
        </Routes>
      </BrowserRouter>
  )
}



export default App
