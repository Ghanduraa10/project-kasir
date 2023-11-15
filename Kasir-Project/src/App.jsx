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
      kategoriMakanan: [],
    };
  }

  async componentDidMount() {
    try {
      const responseMenu = await axios.get(API_URL + "Menu");
      const responseCategory = await axios.get(API_URL + "kategoriMakanan");

      const menus = responseMenu.data;
      const kategoriMakanan = responseCategory.data;

      this.setState({ menus, kategoriMakanan });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { menus } = this.state;
    const { kategoriMakanan } = this.state;
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
              <Row>
                {kategoriMakanan &&
                  kategoriMakanan.map((category) => (
                    <ListCategory key={category.id} category={category} />
                  ))}
              </Row>
            </Col>
            <Col className="mx-5 mt-5">
              <h4>
                <strong>Special For You</strong>
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
