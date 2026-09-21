import './ProductGrid.css';

function ProductGrid() {
    const products = [
        { id: 1, image: '/images/main/bag-blue-orange.jpg' },
        { id: 2, image: '/images/main/bag-leopard-set.jpg' },
        { id: 3, image: '/images/main/bag-snake.jpg' },
        { id: 4, image: '/images/main/bag-leopard.jpg' },
        { id: 5, image: '/images/main/bag-blue-featured.jpg' },
        { id: 6, image: '/images/main/bag-black.jpg' },
    ];

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