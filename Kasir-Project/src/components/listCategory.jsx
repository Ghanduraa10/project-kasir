import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

function ListCategory() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/kategoriMakanan"
        );
        const result = await response.data;
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
      <h5>Category</h5>
      <div className="d-flex justify-content-start mt-3">
        {data?.map((category) => (
          <Card
            key={category.id}
            style={{ width: "10rem" }}
            border="black"
            className="pr-3 mx-2">
            <Card.Img
              variant="top"
              src={category.url}
              style={{ width: "5rem" }}
            />
            <Card.Body className="p-2">
              <Card.Title
                style={{
                  fontSize: "1rem",
                  color: "black",
                }}>
                {category.kategori}
              </Card.Title>
              <Card.Text>{category.total}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default ListCategory;
