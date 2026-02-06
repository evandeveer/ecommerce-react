
import { Button, Container, Form } from 'react-bootstrap';
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const FormCommande = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleConfirm = () => {
    clearCart();
    alert("Commande validée !");
    navigate("/");
  };




  return (
    <div>
      <Header />
      
  
      <Container className="mt-5 pt-5" style={{ maxWidth: '600px' }}>
        
        <h2>Formulaire de commande</h2><br /><br />

        <Form onSubmit={handleConfirm}>
          
          <Form.Group className="mb-3 text-start">
            <Form.Label className="fw-bold">Nom complet</Form.Label>
            <Form.Control type="text" placeholder="Prénom et Nom" required />
          </Form.Group>

       
          <Form.Group className="mb-3 text-start">
            <Form.Label className="fw-bold">Téléphone</Form.Label>
            <Form.Control type="text" placeholder="06 00 00 00 00" required />
          </Form.Group>

       
          <Form.Group className="mb-3 text-start">
            <Form.Label className="fw-bold">E-mail</Form.Label>
            <Form.Control type="email" placeholder="email@gmail.com" required />
          </Form.Group>

  
          <Form.Group className="mb-3 text-start">
            <Form.Label className="fw-bold">Adresse de livraison</Form.Label>
            <Form.Control type="text" placeholder="Adresse" className="mb-2" required />
            <Form.Control type="text" placeholder="Ville" className="mb-2" required />
            <Form.Control type="text" placeholder="Code Postal" className="mb-2" required />
            <Form.Control type="text" placeholder="Pays" required />
          </Form.Group>

          <div className="d-flex justify-content-center mb-5">
            <Button variant="primary" type="submit" className="px-5">
              Confirmer la commande
            </Button>
          </div>

        </Form>
      </Container>
    </div>
  );
};

export default FormCommande;