"use client"
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

type QuizQuestion = {
  question: string;
  options: {
    text: string;
    value: string;
  }[];
};

type QuizResult = {
  title: string;
  icon: string;
  description: string;
  products: string[];
};

const quizQuestions: QuizQuestion[] = [
  {
    question: "Що для тебе спорт — медитація чи змагання?",
    options: [
      { text: "Медитація - це час для себе", value: "calm" },
      { text: "Змагання - люблю виклики", value: "energy" },
      { text: "Поєднання того й іншого", value: "balance" }
    ]
  },
  {
    question: "Ти більше енергія вибуху чи плавного потоку?",
    options: [
      { text: "Вибух - люблю інтенсив", value: "energy" },
      { text: "Плавний потік - це про мене", value: "flow" },
      { text: "Залежить від настрою", value: "balance" }
    ]
  },
  {
    question: "Ранкові пробіжки чи вечірнє відновлення?",
    options: [
      { text: "Ранкові пробіжки - це заряд!", value: "energy" },
      { text: "Вечірнє відновлення - мій ритуал", value: "calm" },
      { text: "Іноді те, іноді інше", value: "balance" }
    ]
  },
  {
    question: "Вибери кольори, які тебе заряджають:",
    options: [
      { text: "Червоний/оранжевий - енергія", value: "energy" },
      { text: "Синій/зелений - спокій", value: "calm" },
      { text: "Фіолетовий/бірюзовий - баланс", value: "balance" }
    ]
  },
  {
    question: "Обери свій ідеальний темп життя:",
    options: [
      { text: "Швидкий та насичений", value: "energy" },
      { text: "Повільний та свідомий", value: "calm" },
      { text: "Змінний - коли як", value: "flow" }
    ]
  }
];

const quizResults: Record<string, QuizResult> = {
  energy: {
    title: "🔥 Core Igniter",
    icon: "🔥",
    description: "Ти - джерело енергії! Потужність, виклики і динаміка — твоя стихія.",
    products: ["Гантелі", "Фітнес-браслет"]
  },
  calm: {
    title: "🌱 Calm Charger",
    icon: "🌱",
    description: "Ти — джерело спокою! Ідеальні практики — йога, розтяжка, медитації.",
    products: ["Йога-мат", "Аромасвічки"]
  },
  balance: {
    title: "🌀 Balance Master",
    icon: "🌀",
    description: "Ти — майстер гармонії. В тобі поєднуються різні підходи до активності.",
    products: ["Масажний ролик", "Фітнес-браслет з медитацією"]
  },
  flow: {
    title: "⚡ Flow Pulse",
    icon: "⚡",
    description: "Ти — енергія руху! Гнучкість, легкість, флоу — твої характеристики.",
    products: ["М'яч для розминки", "Медитації для руху"]
  }
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const selectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      const newAnswers = [...answers, quizQuestions[currentQuestion].options[optionIndex].value];
      setAnswers(newAnswers);
      setSelectedOption(null);
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        calculateResult(newAnswers);
        setShowResult(true);
      }
    }, 500);
  };

  const calculateResult = (answers: string[]) => {
    const resultCounts: Record<string, number> = {};
    
    answers.forEach(answer => {
      resultCounts[answer] = (resultCounts[answer] || 0) + 1;
    });

    let maxCount = 0;
    let finalResult = 'balance';

    for (const [key, value] of Object.entries(resultCounts)) {
      if (value > maxCount) {
        maxCount = value;
        finalResult = key;
      }
    }

    setResult(quizResults[finalResult]);
  };

  const progress = ((currentQuestion) / quizQuestions.length) * 100;

  return (
    <>
      <Head>
        <title>ZENenergy Quiz</title>
        <meta name="description" content="Пройдіть наш тест, щоб дізнатися свій спортивний профіль" />
      </Head>

      <div className="min-h-screen bg-[#F5F5F7] p-8">
        <div className="max-w-[800px] mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="h-1.5 bg-[#e5e5e7] rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-[#FF2D55] transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {!showResult ? (
            <div className="quiz-question">
              <h3 className="text-2xl mb-6">{quizQuestions[currentQuestion].question}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-6 bg-[#F5F5F7] rounded-lg cursor-pointer text-center transition-all ${
                      selectedOption === index ? 'bg-[#FF2D55] text-white' : 'hover:bg-[#e5e5e7]'
                    }`}
                    onClick={() => selectOption(index)}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz-result text-center">
              <div className="text-6xl mb-4">{result?.icon}</div>
              <h3 className="text-3xl mb-4 text-[#FF2D55]">{result?.title}</h3>
              <p className="mb-8">{result?.description}</p>
              <div className="result-products">
                <h4 className="text-xl mb-4">Рекомендовані продукти:</h4>
                <ul className="space-y-2">
                  {result?.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
              <Link href="/" className="inline-block mt-8 btn btn-accent">
                На головну
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}