import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home.jsx'
import Theme from "./pages/Theme";
import Login from "./pages/Login.jsx";
import Signip from './pages/Signip.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/theme" element={<Theme />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signip" element={<Signip />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App

