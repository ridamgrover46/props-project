import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from './App.jsx'
import Register from "./Components/Register";


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
      <Routes>
        
        <Route path="/" element={<App/>}  />
        <Route path="/register" element={<Register />} />
        <Route path="/App"  element={<App />}  />
      </Routes>
    </Router>

    {/* <App /> */}
    
  </StrictMode>,
)
