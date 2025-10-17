import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LogingPage from './pages/LogingPage/LogingPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LogingPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
