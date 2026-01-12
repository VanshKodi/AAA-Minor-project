import React from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import DashboardPage from './pages/DashboardPage'
import AuthenticationPage from './components/AuthenticationPage'
import './App.css'
import MyNav from './components/Navbar'
import ProtectedRoute from './components/ProtectedRoute'

function AuthWrapper() {
  const navigate = useNavigate()
  return <AuthenticationPage onAuthSuccess={() => navigate('/dashboard')} />
}

function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthWrapper />} />
        <Route path="/register" element={<AuthWrapper />} />

        {/* 🔐 PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
