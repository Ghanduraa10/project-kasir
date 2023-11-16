import { Card, Col } from "react-bootstrap";

const listProduct = (menu) => {
  return (
    <Col md={4} xs={6}>
      <Card className="mb-4 me-5 mt-3 shadow">
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.menu.category.nama.toLowerCase() +
            "/" +
            menu.menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>
            {menu.menu.nama} ({menu.menu.kode})
          </Card.Title>
          <Card.Text> Rp. {menu.menu.harga}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default listProduct;
