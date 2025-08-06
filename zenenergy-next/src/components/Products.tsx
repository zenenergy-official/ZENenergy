'use client'

export default function Products() {
  return (
    <section id="products">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наші продукти</h2>
          <p className="section-subtitle">Все, що потрібно для вашого спортивного та ментального розвитку</p>
        </div>
        <div className="products-grid">
          <div className="product-card" data-aos="fade-up" data-aos-delay="100">
            <div className="product-image">🛍️</div>
            <div className="product-info">
              <h3 className="font-bold">Спортивні товари</h3>
              <p>Високоякісне спортивне обладнання та аксесуари для тренувань вдома та на вулиці.</p>
            </div>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="200">
            <div className="product-image">📚</div>
            <div className="product-info">
              <h3 className="font-bold">Освітні курси</h3>
              <p>Мікро-курси з фітнесу, харчування та ментального здоров&apos;я від провідних експертів.</p>
            </div>
          </div>
          <div className="product-card" data-aos="fade-up" data-aos-delay="300">
            <div className="product-image">🤖</div>
            <div className="product-info">
              <h3 className="font-bold">Персональний бот</h3>
              <p>Інтелектуальний помічник, який створить індивідуальну програму тренувань та відновлення.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}