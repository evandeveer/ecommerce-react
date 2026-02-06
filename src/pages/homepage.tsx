import { useEffect, useState } from "react"
import type { Product} from "../type/product.type";
import Body from "../components/body";
import Header from "../components/header";


function HomePage() {
const [products,setProducts] = useState<Product[]>([]);
const [loading,setIsLoading] = useState<boolean>(false);
    

    useEffect(()=>{
        async function fetchProducts() {
        try {
            setIsLoading(true)
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()

            setProducts(data)

        } catch (error) {
        
        }
        finally {
            setIsLoading(false)
        }
    }
        fetchProducts()
        console.log(products)
    }, [])



    if(loading){
        return <div>
            chargement des produits
        </div>
    }

    return <div>
        <Header></Header>
        <br />
        <br />
        <br />
        <Body products={products}/>

    </div>
}

export default HomePage