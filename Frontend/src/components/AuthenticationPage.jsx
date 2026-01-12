import { useState } from "react"
import AuthCard from "../components/AuthCard"
import AuthToggle from "../components/AuthToggle"
import AuthForm from "../components/AuthForm"

import { login, signup, googleLogin } from "../services/auth"

function AuthenticationPage({ onAuthSuccess }) {
  const [mode, setMode] = useState("login")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (email, password) => {
    setError("")
    setLoading(true)

    try {
      if (mode === "login") {
        await login(email, password)
      } else {
        await signup(email, password)
      }
      onAuthSuccess?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await googleLogin()
      onAuthSuccess?.()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <AuthCard>
      <AuthToggle mode={mode} setMode={setMode} />
      <AuthForm
        mode={mode}
        error={error}
        loading={loading}
        onSubmit={handleSubmit}
        onGoogleLogin={handleGoogleLogin}
      />
    </AuthCard>
  )
}

export default AuthenticationPage
