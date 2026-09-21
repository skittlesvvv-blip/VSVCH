import './Handmade.css';

function Handmade() {
    return (
        <section className="handmade-section">
            <div className="handmade__container">
                <div className="handmade__image-block">
                    <img src="/images/main/snake-bags.jpg" alt="Змеиная сумка" />
                </div>
                
                <div className="handmade__content-block">
                    <h2 className="handmade__title">СДЕЛАНО ВРУЧНУЮ</h2>
                    <p className="handmade__text">
                        Каждая из наших сумок разрабатывается и производится в Италии опытными мастерами, 
                        которые уже не одно поколение создают кожаные изделия, сравнимые с произведением искусства.
                    </p>
                    <button className="handmade__btn">КУПИТЬ</button>
                </div>
            </div>
        </section>
    );
}

export default Handmade;