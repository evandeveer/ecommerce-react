

import CardsComponent from "./card";
import type { Product } from "../type/product.type";
import { useNavigate } from "react-router-dom";


export default Body


type BodyProps = {
    products: Array<Product>
}



function Body({ products }: BodyProps) {

    const navigate = useNavigate();

    const handleOnClick = (id: number) => {
        navigate(`/product/${id}`);
    };

    return (

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', justifyContent: 'center', padding: '20px' }}>

            {products.map((product: Product) => {
                return (

                    <CardsComponent
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description.length > 100 ? product.description.substring(0, 100) + "..." : product.description}
                        image={product.image}
                        onClick={() => handleOnClick(product.id)}
                    />
                )
            })}

        </div>
    )
}



