import Button from "react-bootstrap/Button"

function AuthToggle({ mode, setMode }) {
  const getVariant = (value) =>
    mode === value ? "light" : "transparent"

  const getClass = (value) =>
    `w-100 fw-semibold ${mode === value ? "shadow-sm" : ""}`

  return (
    <div
      className="d-flex mb-3 gap-1"
      style={{
        background: "#f1f5f9",
        padding: "5px",
        borderRadius: "8px",
      }}
    >
      <Button
        variant={getVariant("login")}
        className={getClass("login")}
        onClick={() => setMode("login")}
      >
        Login
      </Button>

      <Button
        variant={getVariant("signup")}
        className={getClass("signup")}
        onClick={() => setMode("signup")}
      >
        Sign Up
      </Button>

      
    </div>
  )
}

export default AuthToggle
