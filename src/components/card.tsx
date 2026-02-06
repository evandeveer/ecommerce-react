import Card from 'react-bootstrap/Card';


type CardProps = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string; 
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

function CardsComponent({title, price, description, image, onClick}: CardProps) {
   
    return (
      
        <Card onClick={onClick} style={{ width: '18rem' }}>
            
            <Card.Img variant="top" src={image} style={{ height: '300px'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Text>{description}</Card.Text>

                <div className="mt-auto">
                    <h3>{price} €</h3>

                 
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardsComponent;