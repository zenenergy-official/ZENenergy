import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="hero min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
      <div className="hero-bg absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f5f5f7] to-[#e5e5e7] z-0"></div>
      <div className="container">
        <div className="hero-content max-w-[800px]" data-aos="fade-up">
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-tight tracking-tight mb-6">
            Нова ера спорту — <span className="text-accent">Sport 2.0</span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.25rem)] text-text-light max-w-[600px] mb-10">
            Поєднання фізичної активності, ментального здоров'я та сучасних технологій для досягнення гармонії тіла та розуму.
          </p>
          <div className="hero-btns">
            <Link href="#products" className="btn">
              Дізнатися більше
            </Link>
            <Link href="#bot" className="btn btn-accent">
              Бот ще в розробці
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;