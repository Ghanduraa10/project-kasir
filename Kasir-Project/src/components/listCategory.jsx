import { Component } from "react";
import { API_URL } from "../utils/constant";
import axios from "axios";
import { Card, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIceCream,
  faBowlFood,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan") return <FontAwesomeIcon icon={faBowlFood} />;
  if (nama === "Cemilan") return <FontAwesomeIcon icon={faIceCream} />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faGlassWater} />;
};

export default class listCategory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kategori: [],
    };
  }

  async componentDidMount() {
    try {
      const responseCategories = await axios.get(API_URL + "categories");
      const category = responseCategories.data;
      this.setState({ category });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { category } = this.state;
    return (
      <>
        <Col md={4} xs={6}>
          {category &&
            category.map((kategori) => (
              <Card
                className="mb-2 shadow"
                key={kategori.id}
                kategori={kategori}
                style={{ width: "10rem" }}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Icon nama={kategori.nama} />{" "}
                  <Card.Text>{kategori.nama}</Card.Text>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </>
    );
  }
}
