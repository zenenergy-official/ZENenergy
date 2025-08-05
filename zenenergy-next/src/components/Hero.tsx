'use client'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="container">
        <div className="hero-content" data-aos="fade-up">
          <h1>Нова ера спорту — <span style={{ color: 'var(--accent)' }}>Sport 2.0</span></h1>
          <p>Поєднання фізичної активності, ментального здоров&apos;я та сучасних технологій для досягнення гармонії тіла та розуму.</p>
          <div className="hero-btns">
            <a href="#products" className="btn">Дізнатися більше</a>
            <a href="#bot" className="btn btn-accent">Бот ще в розробці</a>
          </div>
        </div>
      </div>
    </section>
  )
}