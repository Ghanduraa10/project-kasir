import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/navbar";
import ListProduct from "./components/listProduct";
import { Container, Row, Col } from "react-bootstrap";
import { API_URL } from "./utils/constant";
import axios from "axios";
import React, { useState, useEffect } from "react";
import ListCategory from "./components/listCategory";
import Footer from "./components/footer";

function App() {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get(API_URL + "categories");

        const categoriesData = await categoriesResponse.data;
        setCategories(categoriesData);

        const productsResponse = await axios.get(API_URL + "products");
        const productsData = await productsResponse.data;
        setProducts(productsData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const changeCategory = (value) => {
    const filteredProducts = products.filter(
      (product) => product.category.nama === value
    );
    setFilteredData(filteredProducts);
  };

  return (
    <>
      <div className="App">
        <NavbarComponent />
      </div>
      <div className="mt-3">
        <Container fluid>
          <Col className="mx-5 mt-5">
            <ListCategory
              categories={categories}
              changeCategory={changeCategory}
            />
          </Col>
          <Col className="mx-5 mt-5">
            <Row>
              {filteredData && filteredData.length > 0 ? (
                <ListProduct products={filteredData} />
              ) : (
                <ListProduct products={products} />
              )}
            </Row>
          </Col>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       menus: [],
//       categoriMakanan: "Makanan",
//     };
//   }

//   async componentDidMount() {
//     try {
//       const responseMenu = await axios.get(
//         API_URL + "products?category.nama=" + this.state.categoriMakanan
//       );

//       const menus = responseMenu.data;

//       this.setState({ menus });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   changeCategory = (value) => {
//     this.setState;
//     ({ categoriMakanan: value, menus: [] });
//     axios.get(API_URL + "products?category.nama=" + value).then((res) => {
//       const menus = res.data;
//       this.setState({ menus });
//     });
//   };

//   render() {
//     const { menus, categoriMakanan } = this.state;
//     return (
//       <>
//         <div className="App">
//           <NavbarComponent />
//         </div>
//         <div className="mt-3">
//           <Container fluid>
//             <Col className="mx-5 mt-5">
//               <h4>
//                 <strong>Kategori</strong>
//               </h4>
//               <ListCategory
//                 changeCategory={this.changeCategory}
//                 categoriMakanan={categoriMakanan}
//               />
//             </Col>
//             <Col className="mx-5 mt-5">
//               <h4>
//                 <strong>Special Menu For You</strong>
//               </h4>
//               <Row>
//                 {menus &&
//                   menus.map((menu) => (
//                     <ListProduct key={menu.id} menu={menu} />
//                   ))}
//               </Row>
//             </Col>
//           </Container>
//           <Footer />
//         </div>
//       </>
//     );
//   }
// }
