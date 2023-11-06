import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicExample({ title, image, price }) {
  return (
    <Card style={{ width: "18rem", marginBottom: 30 }}>
      <Card.Img variant="top" src={image} style={{ height: 200 }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
