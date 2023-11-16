import { Card, Col, Row } from "react-bootstrap";

const listProduct = ({ products }) => (
  <>
    <h2>Filtered Products:</h2>
    {products &&
      products.map((product) => (
        <Col key={product.id} md={4} xs={6}>
          <Card className="mb-4 me-5 mt-3 shadow" style={{ width: "10rem" }}>
            <Card.Img
              variant="top"
              src={
                "assets/images/" +
                product.category.nama.toLowerCase() +
                "/" +
                product.gambar
              }></Card.Img>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                {product.nama} {product.kode}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
  </>
);

export default listProduct;
