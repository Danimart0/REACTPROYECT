export default function ProductListItem({ product }) {
    return (
        <div className="product-list-item">
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-details">
                <h4>{product.title}</h4>
                <p>${product.price}</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    );
}




