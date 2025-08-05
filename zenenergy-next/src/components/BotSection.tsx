import Link from 'next/link';

const BotSection = () => {
  return (
    <section id="bot" className="py-32 relative">
      <div className="container">
        <div 
          className="bot-section bg-primary text-white rounded-3xl p-16 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-white">ZENenergy Бот</h2>
          <p className="text-[rgba(255,255,255,0.8)] max-w-[600px] mx-auto mb-8">
            Ваш персональний тренер у смартфоні. Отримуйте індивідуальні тренування, мотивацію та поради щодня.
          </p>
          <Link href="" target="_blank" className="btn btn-accent">
            Бот ще в розробці
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BotSection;