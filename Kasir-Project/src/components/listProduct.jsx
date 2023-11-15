import { Card, Col } from "react-bootstrap";

const listProduct = (menu) => {
  return (
    <Col>
      <Card style={{ width: "18rem", height: "15rem" }} className="mb-4">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{menu.menu.name}</Card.Title>
          <Card.Text>{menu.menu.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default listProduct;
