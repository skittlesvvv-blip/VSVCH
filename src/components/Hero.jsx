import './Hero.css';

function Hero({ pageTitle }) {
    return (
        <section className="hero">
            <h1 className="hero__title">{pageTitle}</h1>
        </section>
    );
}

export default Hero;