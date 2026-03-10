import React from 'react';
import LessonCard from '../components/LessonCard';
import lessonsData from '../data/lessons.json';

const Lessons = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Eco Lessons</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Learn about the environment and earn XP by completing quizzes.</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessonsData.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
