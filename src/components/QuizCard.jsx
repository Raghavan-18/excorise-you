import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const QuizCard = ({ quiz, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);
    
    const isCorrect = option === quiz.questions[currentQuestion].answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quiz.questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
        onComplete(score + (isCorrect ? 1 : 0), quiz.questions.length);
      }
    }, 1500);
  };

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-center"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Quiz Completed!</h3>
        <div className="text-6xl mb-4">
          {score === quiz.questions.length ? '🏆' : '👍'}
        </div>
        <p className="text-xl mb-6 text-gray-600 dark:text-gray-300">
          You scored {score} out of {quiz.questions.length}
        </p>
        <div className="text-green-600 font-bold text-lg">
          +{score * 50} XP Earned!
        </div>
      </motion.div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="mb-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
        Question {currentQuestion + 1} of {quiz.questions.length}
      </div>
      <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => {
          let buttonClass = "w-full text-left p-4 rounded-lg border transition ";
          
          if (isAnswered) {
            if (option === question.answer) {
              buttonClass += "bg-green-100 border-green-500 text-green-800 dark:bg-green-900 dark:text-green-100";
            } else if (option === selectedOption) {
              buttonClass += "bg-red-100 border-red-500 text-red-800 dark:bg-red-900 dark:text-red-100";
            } else {
              buttonClass += "border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400";
            }
          } else {
            buttonClass += "border-gray-200 hover:border-green-500 hover:bg-green-50 text-gray-700 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700";
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
              className={buttonClass}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {isAnswered && option === question.answer && <CheckCircle className="text-green-500" size={20} />}
                {isAnswered && option === selectedOption && option !== question.answer && <XCircle className="text-red-500" size={20} />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuizCard;
