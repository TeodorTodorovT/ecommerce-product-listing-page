import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ClothesPLP from "./pages/ClothesPLP";
import ShoesPLP from "./pages/ShoesPLP";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/clothes" />} />
        <Route path="/clothes" element={<ClothesPLP />} />
        <Route path="/shoes" element={<ShoesPLP />} />
      </Routes>
    </BrowserRouter>
  )
}



export default App
