import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

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
            <Navbar.Text style={{ color: "white" }}>
              Signed in as:{" "}
              <a href="#login" style={{ color: "white" }}>
                {name}
              </a>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
