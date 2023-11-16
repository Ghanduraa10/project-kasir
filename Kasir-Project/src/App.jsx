import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import ListProduct from "./components/listProduct";
import { Container, Row, Col } from "react-bootstrap";
import { API_URL } from "./utils/constant";
import axios from "axios";
import { Component } from "react";
import ListCategory from "./components/listCategory";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
    };
  }

  async componentDidMount() {
    try {
      const responseMenu = await axios.get(API_URL + "products");

      const menus = responseMenu.data;

      this.setState({ menus });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { menus } = this.state;
    return (
      <>
        <div className="App">
          <NavbarComponent />
        </div>
        <div className="mt-3">
          <Container fluid>
            <Col className="mx-5 mt-5">
              <h4>
                <strong>Kategori</strong>
              </h4>
              <ListCategory className="justify-content-start" />
            </Col>
            <Col className="mx-5 mt-5">
              <h4>
                <strong>Special Menu For You</strong>
              </h4>
              <Row>
                {menus &&
                  menus.map((menu) => (
                    <ListProduct key={menu.id} menu={menu} />
                  ))}
              </Row>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}
