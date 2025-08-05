import Link from 'next/link';

const Contact = () => {
  const contactMethods = [
    {
      title: "Електронна пошта",
      content: (
        <Link href="mailto:zenenergy.official.company@gmail.com" className="text-accent hover:opacity-80 transition-opacity">
          zenenergy.official.company@gmail.com
        </Link>
      )
    },
    {
      title: "Соціальні мережі",
      content: (
        <Link href="https://instagram.com/zenenergy" target="_blank" className="text-accent hover:opacity-80 transition-opacity">
          Instagram @zenenergy.official
        </Link>
      )
    },
    {
      title: "Telegram",
      content: (
        <Link href="" target="_blank" className="text-accent hover:opacity-80 transition-opacity">
          Ще в розробці
        </Link>
      )
    }
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2>Зв'яжіться з нами</h2>
          <p className="section-subtitle">
            Ми завжди раді новим ідеям та співпраці
          </p>
        </div>
        <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="contact-card bg-white rounded-2xl p-8 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <h3 className="text-xl mb-4">{method.title}</h3>
              <p>{method.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;