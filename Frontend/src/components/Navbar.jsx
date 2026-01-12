import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link, useNavigate } from 'react-router-dom'
import favicon from '../assets/favicon.ico'

import { logout } from '../services/auth'
import { useAuth } from '../context/AuthContext'

function MyNav() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src={favicon}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="ScholarSync logo"
            style={{
              filter:
                'invert(37%) sepia(93%) saturate(3862%) hue-rotate(204deg) brightness(101%) contrast(105%)',
            }}
          />
          ScholarSync
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            {user && (
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            )}

            <NavDropdown title="Account" id="basic-nav-dropdown">
              {!user && (
                <>
                  <NavDropdown.Item as={Link} to="/login">
                    Login
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Register
                  </NavDropdown.Item>
                </>
              )}

              {user && (
                <>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNav
