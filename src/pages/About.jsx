import './About.css';

function About() {
  return (
    <main className="about-page">
      {/* Hero-баннер */}
      <div className="hero-banner">
        <img src="/images/about/hero-bags.jpg" alt="SCÀLA About" className="banner-img" />
        <div className="hero-overlay">
          <h1 className="hero-title">О БРЕНДЕ</h1>
        </div>
      </div>

      <div className="about-container">
        {/* Треугольный текст */}
        <section className="about-story">
          <p className="story-text text-tri-1">
            Передвигаясь по миру, вдохновляясь культурами разных стран, изучая и осваивая ценнейшие
          </p>
          <p className="story-text text-tri-2">
            техники кожевенного ремесла, в 2018 году мы создали бренд SCALA, воплощающий
          </p>
          <p className="story-text text-tri-3">
            подлинность, страсть и свободу в самовыражении.
          </p>
        </section>

        {/* Фото + текст */}
        <section className="about-image-section">
          <div className="about-image">
            <img src="/images/about/snake-bags.jpg" alt="SCÀLA Snake Bags" loading="lazy" />
          </div>
          <div className="about-desc">
            <p>
              Создавая новую модель сумки, думая о цвете и фактуре, мы представляем образ современной женщины — сильной и независимой, свободной от чужих оценок, творческой, дикой в своем естестве, которая несмотря на предрассудки меняет мир и привносит свой неоценимый вклад в общество.
            </p>
            <p>
              Мы в свою очередь хотим показать — любая женщина, где бы она ни находилась, обладает законным правом быть собой!
            </p>
          </div>
        </section>

        {/* Цитата */}
        <section className="quote-section">
          <div className="quote-box">
            <h2 className="quote-text">
              НЕ ЖИВИ ПО ПРАВИЛАМ!<br />СОЗДАВАЙ СВОИ ПРАВИЛА!
            </h2>
          </div>
        </section>

        {/* Производство */}
        <section className="production-section">
          <h2 className="section-title">ПРОИЗВОДСТВО</h2>
          <p>В эру стремительного развития технологий и глобальной механизации мы отдаем предпочтение проверенным столетиями техникам производства.</p>
          <p>Мы стремимся поддерживать и развивать ручное мастерство, выстраивать связи с маленькими семейными фабриками, внося вклад в сохранение ремесла.</p>
          <p>Каждая из наших сумок разрабатывается и производится в Италии опытными мастерами, которые уже не одно поколение создают кожаные изделия, сравнимые с произведением искусства.</p>
          <p>Качество не бывает случайным, это результат тщательно продуманных процессов и работы профессионалов. Мы тратим много времени и сил на разработку и улучшение дизайна и достижение высокого уровня.</p>
        </section>

        {/* Видео */}
        <section className="video-section">
          <div className="video-wrapper">
            <img src="/images/about/video-thumb.jpg" alt="SCÀLA Process" className="video-thumb" loading="lazy" />
            <button className="video-play-btn" aria-label="Воспроизвести видео">
              <svg viewBox="0 0 24 24" width="60" height="60" fill="#ffffff">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </section>

        {/* Разумное потребление */}
        <section className="consumption-section">
          <h2 className="section-title">РАЗУМНОЕ ПОТРЕБЛЕНИЕ</h2>
          <p>Мы работаем только с надежными и ответственными поставщиками из Италии. Вся кожа рептилий поставляется с необходимыми документами СИТЕС.</p>
          <p>Мы стремимся к ответственному производству и призываем к осознанному потреблению.</p>
          <div className="consumption-gallery">
            <img src="/images/about/gallery-combined.jpg" alt="SCÀLA Gallery" loading="lazy" />
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;