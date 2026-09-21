import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                
                {/* Левая колонка */}
                <div className="footer__col footer__col--left">
                    <div className="footer__line"></div>
                    <ul className="footer__list">
                        <li><a href="#" className="footer__link">ОБМЕН И ВОЗВРАТ</a></li>
                        <li><a href="#" className="footer__link">ГАРАНТИЯ И УХОД</a></li>
                        <li><a href="#" className="footer__link">ПОДАРОЧНАЯ КАРТА</a></li>
                    </ul>
                </div>

                {/* Центральная колонка */}
                <div className="footer__center">
                    <img 
                        src="/images/main/footer-logo-s.png" 
                        alt="S Logo" 
                        className="footer__logo-img" 
                    />
                    <p className="footer__subscribe-text">
                        ПОДПИШИТЕСЬ, ЧТОБЫ ПОЛУЧАТЬ ОБНОВЛЕНИЯ, ДОСТУП К ЭКСКЛЮЗИВНЫМ ПРЕДЛОЖЕНИЯМ
                    </p>
                    <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="NAME@EMAIL.COM" 
                            className="footer__input" 
                            required 
                        />
                        <button type="submit" className="footer__btn">
                            ПОДПИСАТЬСЯ
                        </button>
                    </form>
                    <div className="footer__socials">
                        <a href="#" className="footer__social-link" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                            </svg>
                        </a>
                        <a href="#" className="footer__social-link" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/>
                                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Правая колонка */}
                <div className="footer__col footer__col--right">
                    <div className="footer__line"></div>
                    <ul className="footer__list">
                        <li><a href="#" className="footer__link">КОНТАКТЫ</a></li>
                        <li><a href="#" className="footer__link">ПУБЛИЧНАЯ ОФЕРТА</a></li>
                        <li><a href="/vacancies" className="footer__link">ВАКАНСИИ</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;