const Products = () => {
  const products = [
    {
      icon: "🛍️",
      title: "Спортивні товари",
      description: "Високоякісне спортивне обладнання та аксесуари для тренувань вдома та на вулиці."
    },
    {
      icon: "📚",
      title: "Освітні курси",
      description: "Мікро-курси з фітнесу, харчування та ментального здоров'я від провідних експертів."
    },
    {
      icon: "🤖",
      title: "Персональний бот",
      description: "Інтелектуальний помічник, який створить індивідуальну програму тренувань та відновлення."
    }
  ];

  return (
    <section id="products" className="py-32 relative">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наші продукти</h2>
          <p className="section-subtitle">
            Все, що потрібно для вашого спортивного та ментального розвитку
          </p>
        </div>
        <div className="products-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="product-card bg-white rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-103"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="product-image h-[200px] bg-[#f0f0f0] flex items-center justify-center text-5xl">
                {product.icon}
              </div>
              <div className="product-info p-6">
                <h3 className="text-xl mb-2">{product.title}</h3>
                <p className="text-text-light text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;