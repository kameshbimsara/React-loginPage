import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LogingPage from './pages/LogingPage/LogingPage'
import HomePage from './pages/HomePage/HomePage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogingPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/home" element={
          localStorage.getItem("afsd-9") ? <HomePage /> : <Navigate to="/login" />
        } />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
