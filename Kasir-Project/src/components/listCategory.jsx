import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIceCream,
  faBowlFood,
  faGlassWater,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/internal.css";
import React, { useState, useEffect } from "react";

const Icon = ({ nama }) => {
  if (nama === "Makanan") return <FontAwesomeIcon icon={faBowlFood} />;
  if (nama === "Cemilan") return <FontAwesomeIcon icon={faIceCream} />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faGlassWater} />;
};

function listCategory({ changeCategory, categories }) {
  return (
    <>
      <h2>Categories:</h2>
      <Row>
        {categories &&
          categories.map((category) => (
            <Col key={category.id}>
              <Card
                className="mb-2 shadow custom-pointer"
                style={{ width: "10rem" }}
                onClick={() => changeCategory(category.nama)}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                  <Card.Text>{category.nama}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}

export default listCategory;

// export default class listCategory extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       kategori: [],
//     };
//   }

//   async componentDidMount() {
//     try {
//       const responseCategories = await axios.get(API_URL + "categories");
//       const category = responseCategories.data;
//       this.setState({ category });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   render() {
//     const { category } = this.state;
//     const { changeCategory, categoriMakanan } = this.props;
//     return (
//       <>
//         <Row>
//           {category &&
//             category.map((kategori) => (
//               <Col key={kategori.id}>
//                 <Card
//                   className="mb-2 shadow custom-pointer"
//                   style={{ width: "10rem" }}
//                   onClick={() => changeCategory(kategori.nama)}>
//                   <Card.Body>
//                     <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
//                     <Icon nama={kategori.nama} />
//                     <Card.Text>{kategori.nama}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//         </Row>
//       </>
//     );
//   }
// }
