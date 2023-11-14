import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import ListCategory from "./components/listCategory";
import ListProduct from "./components/listProduct";
import Footer from "./components/footer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Col>
            <div className="px-5 mt-5">
              <ListCategory />
            </div>
            <div className="px-5 mt-5">
              <ListProduct />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
