import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListProduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/Menu");
        const result = await response.data;
        console.log(result);
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h5>Special Menu For You</h5>
      <div className="d-flex justify-content-start mt-3">
        {data?.map((menu) => (
          <Card border="dark" style={{ width: "18rem" }} className="pr-3 mx-2">
            <Card.Img variant="top" src={menu.image_url} />
            <Card.Body>
              <Card.Title>{menu.name}</Card.Title>
              <Card.Text>{menu.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ListProduct;
