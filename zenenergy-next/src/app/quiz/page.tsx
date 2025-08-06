'use client'

import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type QuizOption = {
  text: string
  value: 'energy' | 'calm' | 'balance' | 'flow'
}

type QuizQuestion = {
  question: string
  options: QuizOption[]
}

type QuizResult = {
  title: string
  icon: string
  description: string
  products: string[]
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<('energy' | 'calm' | 'balance' | 'flow')[]>([])
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<QuizResult | null>(null)

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
  ]

  const quizResults: Record<'energy' | 'calm' | 'balance' | 'flow', QuizResult> = {
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
  }

  const selectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex)
    
    setTimeout(() => {
      const selectedValue = quizQuestions[currentQuestion].options[optionIndex].value
      const newAnswers = [...answers, selectedValue]
      setAnswers(newAnswers)
      setSelectedOption(null)
      
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        calculateResult(newAnswers)
        setShowResult(true)
      }
    }, 500)
  }

  const calculateResult = (answers: ('energy' | 'calm' | 'balance' | 'flow')[]) => {
    const resultCounts = {
      energy: 0,
      calm: 0,
      balance: 0,
      flow: 0
    }
    
    answers.forEach(answer => {
      resultCounts[answer] += 1
    })

    let maxCount = 0
    let finalResult: keyof typeof quizResults = 'balance'

    for (const [key, value] of Object.entries(resultCounts)) {
      if (value > maxCount) {
        maxCount = value
        finalResult = key as keyof typeof quizResults
      }
    }

    setResult(quizResults[finalResult])
  }

  const progress = showResult ? 100 : ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <>
      <Head>
        <title>ZENenergy Quiz</title>
        <meta name="description" content="Пройдіть наш тест, щоб дізнатися свій спортивний профіль" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
      </Head>

      <div className="quiz-container">
        <div className="quiz-progress">
          <div 
            className="quiz-progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {!showResult ? (
          <div className={`quiz-question ${!showResult ? 'active' : ''}`}>
            <h3>{quizQuestions[currentQuestion].question}</h3>
            <div className="quiz-options">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div
                  key={index}
                  className={`quiz-option ${selectedOption === index ? 'selected' : ''}`}
                  onClick={() => selectOption(index)}
                >
                  {option.text}
                </div>
              ))}
            </div>
            <Link href="/" className="back-button">
              На головну
            </Link>
          </div>
        ) : (
          <div className={`quiz-result ${showResult ? 'active' : ''}`}>
            <div className="result-icon">{result?.icon}</div>
            <h3 className="result-title">{result?.title}</h3>
            <p className="result-description">{result?.description}</p>
            <div className="result-products font-weight: 700">
              <h4 className='font-bold'>Рекомендовані продукти:</h4>
              <ul>
                {result?.products.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
            <Link href="/" className="back-button">
              На головну
            </Link>
          </div>
        )}
      </div>
    </>
  )
}