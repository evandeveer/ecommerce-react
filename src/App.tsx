
import './App.css'
import HomePage from "./pages/homepage"
import Panier from "./pages/panier"
import ProductDetail from './pages/product_detail'
import { CartProvider } from './hooks/useCart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return ( 
    <Router>
      <CartProvider>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/product/:id" element={<ProductDetail />} />
       
      </Routes>
       </CartProvider>
    </Router>
  );
}

export default App