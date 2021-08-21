import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

interface NavigationBarProps {
  name?: string;
  loginStatus?: boolean;
}

function NavigationBar({ name, loginStatus }: NavigationBarProps): JSX.Element {
  return (
    <Navbar fixed="top" bg="dark">
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white" }}>
          Expense Tracker
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {loginStatus && (
            <>
              <Nav.Link style={{ color: "white" }} disabled>
                Signed in as: {name}
              </Nav.Link>
              <Nav.Link href="/" style={{ color: "white" }}>
                Sign out
              </Nav.Link>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
