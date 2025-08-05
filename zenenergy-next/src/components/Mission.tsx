'use client'

export default function Mission() {
  return (
    <section id="mission">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наша філософія</h2>
          <p className="section-subtitle">Ми створюємо екосистему, де спорт стає не просто тренуванням, а способом життя</p>
        </div>
        <div className="mission-cards">
          <div className="mission-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Баланс</h3>
            <p>Поєднуємо фізичні тренування з практиками ментального здоров'я для досягнення гармонії.</p>
          </div>
          <div className="mission-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Технології</h3>
            <p>Використовуємо сучасні рішення для персоналізації вашого спортивного досвіду.</p>
          </div>
          <div className="mission-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Спільнота</h3>
            <p>Об'єднуємо однодумців, які прагнуть розвитку та самовдосконалення.</p>
          </div>
        </div>
      </div>
    </section>
  )
}