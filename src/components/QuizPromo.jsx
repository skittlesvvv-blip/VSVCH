import './QuizPromo.css';

function QuizPromo() {
    return (
        <section className="quiz-promo-section">
            <div className="quiz-promo">
                <div className="quiz-promo-text">
                    <h2>Найди свою сумку</h2>
                    <p>Ответьте на 4 вопроса и получите персональные рекомендации</p>
                </div>
                
                <a href="/quiz" className="btn-quiz">
                    НАЙТИ СВОЮ СУМКУ
                </a>
            </div>
        </section>
    );
}

export default QuizPromo;