import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className={`catalog-header ${isHome ? 'catalog-header--over-hero' : 'catalog-header--solid'}`}>
      <div className="catalog-header__top">
        <div className="catalog-header__lang">
          <button className="lang-btn active">RU</button>
          <span className="lang-sep">—</span>
          <button className="lang-btn">EN</button>
        </div>

        <div className="catalog-header__logo">
          <Link to="/">SCÁLA</Link>
        </div>

        <div className="catalog-header__icons">
          <button className="header-icon" title="Сменить тему"><i className="fas fa-adjust"></i></button>
          <button className="header-icon" title="Версия для слабовидящих"><i className="fas fa-universal-access"></i></button>
          <Link to="/login" className="header-icon" title="Войти"><i className="far fa-user"></i></Link>
          <Link to="/favorites" className="header-icon" title="Избранное"><i className="far fa-heart"></i></Link>
          <Link to="/cart" className="header-icon" title="Корзина">
            <i className="fas fa-shopping-bag"></i>
            <span className="badge">0</span>
          </Link>
        </div>
      </div>

      <nav className="catalog-header__nav">
        <ul>
          <li><NavLink to="/catalog">КАТАЛОГ</NavLink></li>
          <li><NavLink to="/about">О НАС</NavLink></li>
          <li><NavLink to="/delivery">ДОСТАВКА И ОПЛАТА</NavLink></li>
          <li><NavLink to="/custom-order">СДЕЛАНО НА ЗАКАЗ</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;