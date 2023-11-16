import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kollev Gendeng</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Image
                style={{ width: "100%", height: "100%" }}
                src="holder.js/371x380"
                roundedCircle
              />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
