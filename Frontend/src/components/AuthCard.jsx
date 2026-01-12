import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

function AuthCard({ children }) {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f1f5f9" }}
    >
      <Card style={{ width: "400px", borderRadius: "12px" }} className="p-4">
        <div className="text-center mb-3">
          <h4>Welcome to EduManage</h4>
        </div>
        {children}
      </Card>
    </Container>
  )
}

export default AuthCard
