import './Header.css';

function Header() {
    return (
        <header className="catalog-header">
            <div className="catalog-header__top">
                
                {/* Язык */}
                <div className="catalog-header__lang">
                    <button className="lang-btn active">RU</button>
                    <span className="lang-sep">—</span>
                    <button className="lang-btn">EN</button>
                </div>
                
                {/* Логотип */}
                <div className="catalog-header__logo">
                    <a href="/">SCÁLA</a>
                </div>
                
                {/* Иконки */}
                <div className="catalog-header__icons">
                    <button className="header-icon" title="Сменить тему">
                        <i className="fas fa-adjust"></i>
                    </button>
                    <button className="header-icon" title="Версия для слабовидящих">
                        <i className="fas fa-universal-access"></i>
                    </button>
                    <a href="/login" className="header-icon" title="Войти">
                        <i className="far fa-user"></i>
                    </a>
                    <a href="/favorites" className="header-icon" title="Избранное">
                        <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart" className="header-icon" title="Корзина">
                        <i className="fas fa-shopping-bag"></i>
                        <span className="badge">0</span>
                    </a>
                </div>
            </div>
            
            {/* Навигация */}
            <nav className="catalog-header__nav">
                <ul>
                    <li><a href="/catalog">КАТАЛОГ</a></li>
                    <li><a href="/about">О НАС</a></li>
                    <li><a href="/delivery">ДОСТАВКА И ОПЛАТА</a></li>
                    <li><a href="/custom-order">СДЕЛАНО НА ЗАКАЗ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;