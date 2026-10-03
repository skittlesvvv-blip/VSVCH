import './ProductCard.css';

function ProductCard({ product, onOpenModal, isFavorite, onToggleFavorite }) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper" onClick={() => onOpenModal(product)}>
        <img src={product.image} alt={product.name} className="product-card__image" />
      </div>

      <button
        className={`product-card__fav ${isFavorite ? 'is-active' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(product.id);
        }}
        aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
        title={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" className="product-card__heart">
          <path
            d="M12 21s-7.5-4.9-9.7-9.4C.7 8.5 2.3 4.9 5.8 4.2c1.9-.4 3.8.4 4.9 1.9 1.1-1.5 3-2.3 4.9-1.9 3.5.7 5.1 4.3 3.5 7.4C19.5 16.1 12 21 12 21z"
            fill={isFavorite ? '#e74c3c' : 'none'}
            stroke={isFavorite ? '#e74c3c' : '#fff'}
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="product-card__info" onClick={() => onOpenModal(product)}>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">{product.price} BYN</p>
      </div>
    </div>
  );
}

export default ProductCard;