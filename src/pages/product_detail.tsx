import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../type/product.type";
import Button from 'react-bootstrap/Button';
import Header from "../components/header";
import { useCart } from "../hooks/useCart";
import "../style/product_detail.css";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <div>Chargement du produit...</div>;
  if (!product) return <div>Produit non trouvé</div>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-container">
      <Header />
      <br /><br /><br />

      <div className="product-content">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />

        <div className="product-info">
          <h1>{product.title}</h1>

          <h3 className="product-price">{product.price} €</h3>

          <p>{product.description}</p>

          <div className="product-category">
            {product.category}
          </div>

          <div className="product-rating">
            {"★".repeat(Math.round(product.rating.rate))}
            {"☆".repeat(5 - Math.round(product.rating.rate))}
            
              {product.rating.rate} ({product.rating.count} avis)
            
          </div>

          <Button variant="primary" onClick={handleAddToCart}>
            Ajouter au panier
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;