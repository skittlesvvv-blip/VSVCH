import './StoreMap.css';

function StoreMap() {
    return (
        <section className="store-map">
            <div className="container">
                <h2 className="section-title">НАШ МАГАЗИН В МОГИЛЁВЕ</h2>
                <p className="store-address">ТЦ «Атриум», ул. Первомайская, 57</p>
                
                <div className="map-wrapper">
                    <iframe 
                        src="https://yandex.ru/map-widget/v1/?ll=30.33934%2C53.90404&z=17&pt=30.33934%2C53.90404%2Cpm2wtm1"
                        style={{ width: '100%', height: '480px', border: 0, borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                        allowFullScreen 
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Карта магазина SCÁLA"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default StoreMap;