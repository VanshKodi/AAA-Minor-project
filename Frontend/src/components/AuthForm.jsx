import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

function AuthForm({ mode, error, loading, onSubmit, onGoogleLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <>
      {error && (
        <div className="text-danger text-center mb-2">
          {error}
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        {mode === "signup" && (
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
        )}

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="user@edu.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button
          type="submit"
          variant="dark"
          className="w-100 mt-2"
          disabled={loading}
        >
          {loading
            ? "Please wait..."
            : mode === "login"
            ? "Login"
            : "Sign Up"}
        </Button>

        <div className="text-center text-muted my-3">or</div>

        <Button
          variant="outline-dark"
          className="w-100"
          onClick={onGoogleLogin}
        >
          Continue with Google
        </Button>
      </Form>
    </>
  )
}

export default AuthForm;
