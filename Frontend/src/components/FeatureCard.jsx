import Card from 'react-bootstrap/Card';

function FeatureCard({ title, description, icon }) {
  return (
    <Card className="h-100">
      <div className="d-flex justify-content-center p-3">
        {icon}
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FeatureCard;
