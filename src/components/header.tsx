
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCart ,} from '../hooks/useCart';



function Header() {
    const navigate = useNavigate();
    const { getTotalItems } = useCart();
    const itemCount = getTotalItems();

    return (
        <header >

            <Button
                variant="light"
                onClick={() => navigate('/')}
                style={{ marginRight: '10px' }}
            >
                Accueil
            </Button>

            <Button
                variant="success"
                onClick={() => navigate('/panier')}
            >
                Panier ({itemCount})
            </Button>
        </header>
    );
}

export default Header;