const Mission = () => {
  const missionCards = [
    {
      title: "Баланс",
      description: "Поєднуємо фізичні тренування з практиками ментального здоров'я для досягнення гармонії."
    },
    {
      title: "Технології",
      description: "Використовуємо сучасні рішення для персоналізації вашого спортивного досвіду."
    },
    {
      title: "Спільнота",
      description: "Об'єднуємо однодумців, які прагнуть розвитку та самовдосконалення."
    }
  ];

  return (
    <section id="mission" className="py-32 relative">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Наша філософія</h2>
          <p className="section-subtitle">
            Ми створюємо екосистему, де спорт стає не просто тренуванням, а способом життя
          </p>
        </div>
        <div className="mission-cards grid grid-cols-1 md:grid-cols-3 gap-8">
          {missionCards.map((card, index) => (
            <div 
              key={index}
              className="mission-card bg-white rounded-2xl p-10 shadow-lg transition-all hover:-translate-y-2.5 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <h3 className="text-2xl mb-4">{card.title}</h3>
              <p className="text-text-light">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;