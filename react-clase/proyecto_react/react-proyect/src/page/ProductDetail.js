import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error cargando producto", error));
  }, [id]);

  const handleAddToCart = () => {
    const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = existingProducts.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      existingProducts.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(existingProducts));
  };

  return (
    product && (
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>

        <input
          type="number"
          value={quantity}
          min="1"
          max={product.stock}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    )
  );
}
