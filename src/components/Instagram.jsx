import './Instagram.css';

function Instagram({ photos }) {
    return (
        <section className="instagram-section">
            <div className="instagram__container">
                <h2 className="instagram__title">
                    СЛЕДИТЕ ЗА НАМИ В <span className="instagram__title-underline">INSTAGRAM</span>
                </h2>
                <div className="instagram__grid">
                    {photos.map((photo) => (
                        <div 
                            className={`instagram__item ${photo.type ? `instagram__item--${photo.type.split(' ').join(' instagram__item--')}` : ''}`}
                            key={photo.id}
                        >
                            <img 
                                src={photo.image} 
                                alt={`Instagram Scala ${photo.id}`} 
                                className="instagram__image" 
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Instagram;