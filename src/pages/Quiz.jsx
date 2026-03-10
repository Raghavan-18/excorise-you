import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuizCard from '../components/QuizCard';
import lessonsData from '../data/lessons.json';

const Quiz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lesson = lessonsData.find(l => l.id === parseInt(id));
  const [isCompleted, setIsCompleted] = useState(false);

  if (!lesson) {
    return <div className="p-6 text-center text-red-500">Quiz not found</div>;
  }

  const handleComplete = (score, total) => {
    setIsCompleted(true);
    // In a real app, update user points here
  };

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-[calc(100vh-64px)] flex flex-col justify-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{lesson.title} Quiz</h1>
        <p className="text-gray-600 dark:text-gray-400">Test your knowledge and earn XP!</p>
      </div>
      
      <QuizCard quiz={lesson.quiz} onComplete={handleComplete} />
      
      {isCompleted && (
        <div className="mt-8 text-center">
          <button 
            onClick={() => navigate('/lessons')}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 rounded-lg font-semibold transition"
          >
            Back to Lessons
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
