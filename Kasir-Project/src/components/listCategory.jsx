import { Card, Col } from "react-bootstrap";

const listCategory = (category) => {
  return (
    <Col>
      <Card style={{ width: "10rem" }}>
        <Card.Body>
          <Card.Title>{category.category.kategori}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {category.category.total}
          </Card.Subtitle>
          <Card.Text> </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default listCategory;
