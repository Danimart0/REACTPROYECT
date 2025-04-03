import { useEffect, useState } from "react";
import ProductListItem from "../components/ProductListItem";

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => console.error("Error cargando productos", error));
    }, []);

    return (
        <div>
            <h1>Lista de Productos</h1>

            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div className="container-products">
                    {products.map((product) => (
                        <ProductListItem key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
}
