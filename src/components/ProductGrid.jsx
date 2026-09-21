import './ProductGrid.css';

function ProductGrid({ products }) {
    return (
        <div className="catalog-section">
            <div className="catalog__container">
                <div className="catalog__grid">
                    {products.map((product) => (
                        <div className="catalog__item" key={product.id}>
                            <img 
                                src={product.image} 
                                alt="" 
                                className="catalog__image" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductGrid;