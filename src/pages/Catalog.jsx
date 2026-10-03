import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import productsData from '../data/products.json';
import './Catalog.css';

function Catalog() {
  // Данные из JSON (можно сразу использовать, без useState)
  const [products] = useState(productsData);

  // Состояние поиска и фильтра
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  // Состояние модального окна
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Состояние избранного (массив id)
  const [favorites, setFavorites] = useState([]);

  // Состояние корзины (массив товаров)
  const [cart, setCart] = useState([]);

  // Фильтрация товаров по поиску и категории
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  // Добавление/удаление из избранного
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Добавление в корзину
  const addToCart = (product) => {
  setCart((prev) => {
    const existing = prev.find((item) => item.id === product.id);
    if (existing) {
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });

  // Показать тост на 2 секунды
  setToast(`${product.name} добавлен в корзину`);
  setTimeout(() => setToast(null), 2000);
};

  // Удаление из корзины
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Общее количество товаров в корзине
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [toast, setToast] = useState(null);

  return (
    <main className="catalog-page">
      <div className="catalog-page__container">
        <h1 className="catalog-page__title">КАТАЛОГ</h1>

        {/* Счётчики состояния (демонстрация работы state) */}
        <div className="catalog-stats">
          <span>В избранном: <b>{favorites.length}</b></span>
          <span>В корзине: <b>{cartCount}</b></span>
        </div>

        {/* Поиск */}
        <div className="catalog-search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Поиск по названию..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              className="clear-btn"
              onClick={() => setSearchTerm('')}
              aria-label="Очистить поиск"
            >
              ✕
            </button>
          )}
        </div>

        {/* Фильтры категорий */}
        <div className="catalog-filters">
          <button
            className={`filter-btn ${category === 'all' ? 'active' : ''}`}
            onClick={() => setCategory('all')}
          >
            Все
          </button>
          <button
            className={`filter-btn ${category === 'classic' ? 'active' : ''}`}
            onClick={() => setCategory('classic')}
          >
            Classic
          </button>
          <button
            className={`filter-btn ${category === 'printed' ? 'active' : ''}`}
            onClick={() => setCategory('printed')}
          >
            Printed
          </button>
        </div>

        {/* Сетка товаров */}
        <div className="catalog-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={setSelectedProduct}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="no-results">Ничего не найдено</p>
        )}

        {/* Корзина (демонстрация удаления) */}
        {cart.length > 0 && (
          <div className="catalog-cart">
            <h2>Корзина ({cartCount})</h2>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <span>{item.name} × {item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Модальное окно */}
      <Modal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
      {toast && <div className="catalog-toast">{toast}</div>}
    </main>
  );
}

export default Catalog;