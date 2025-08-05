'use client'

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Зв'яжіться з нами</h2>
          <p className="section-subtitle">Ми завжди раді новим ідеям та співпраці</p>
        </div>
        <div className="contact-grid">
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Електронна пошта</h3>
            <p><a href="mailto:zenenergy.official.company@gmail.com">zenenergy.official.company@gmail.com</a></p>
          </div>
          <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Соціальні мережі</h3>
            <p><a href="https://instagram.com/zenenergy" target="_blank">Instagram @zenenergy.official</a></p>
          </div>
          <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Telegram</h3>
            <p><a>Ще в розробці</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}