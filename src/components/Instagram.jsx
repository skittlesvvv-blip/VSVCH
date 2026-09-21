import './Instagram.css';

function Instagram() {
    const photos = [
        { id: 1, image: '/images/main/instagram-1.jpg', type: '' },
        { id: 2, image: '/images/main/instagram-2.jpg', type: 'vertical-text' },
        { id: 3, image: '/images/main/instagram-3.jpg', type: 'video' },
        { id: 4, image: '/images/main/instagram-4.jpg', type: '' },
        { id: 5, image: '/images/main/instagram-5.jpg', type: '' },
        { id: 6, image: '/images/main/instagram-6.jpg', type: '' },
        { id: 7, image: '/images/main/instagram-7.jpg', type: '' },
        { id: 8, image: '/images/main/instagram-8.jpg', type: '' },
        { id: 9, image: '/images/main/instagram-9.jpg', type: 'live-text' },
        { id: 10, image: '/images/main/instagram-10.jpg', type: 'video presents' },
        { id: 11, image: '/images/main/instagram-11.jpg', type: '' },
        { id: 12, image: '/images/main/instagram-12.jpg', type: 'video' },
    ];

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