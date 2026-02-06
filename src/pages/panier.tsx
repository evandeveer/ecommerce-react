import Header from "../components/header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from "../hooks/useCart";
import "../style/panier.css";
import { useNavigate } from 'react-router-dom';

function Panier() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, getTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div>
        <Header />
        <br /><br /><br />

        <div className="panier-vide">
          <p>Votre panier est vide</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <br /><br /><br />

      <div className="panier-container">
        <div className="panier-list">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <div className="panier-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="panier-image"
                />

                <div className="panier-info">
                  <h5>{item.title}</h5>
                  <p className="panier-price">{item.price} €</p>
                </div>

                <div className="panier-actions">
                  <div>Quantité: {item.quantity}</div>
                  <div className="panier-total-item">
                    Total: {(item.price * item.quantity).toFixed(2)} €
                  </div>

                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <Card.Body className="panier-total">
            <h4>Total : {getTotalPrice()} €</h4>
          </Card.Body>
        </Card>

        <br />

        <Button
          variant="outline-primary"
          size="lg"
          onClick={() => navigate('/form_commande')}
        >
          Passer commande
        </Button>
      </div>
    </div>
  );
}

export default Panier;