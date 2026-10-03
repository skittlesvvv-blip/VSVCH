import './Modal.css';

function Modal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>
        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-image" />
          <div className="modal-info">
            <h2 className="modal-name">{product.name}</h2>
            <p className="modal-price">{product.price} BYN</p>
            <p className="modal-description">{product.description}</p>
            <button
              className="modal-btn"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              ДОБАВИТЬ В КОРЗИНУ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;