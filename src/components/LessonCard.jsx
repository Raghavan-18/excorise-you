import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LessonCard = ({ lesson }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-100 dark:border-gray-700"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{lesson.title}</h3>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            {lesson.level}
          </span>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-1 text-gray-600 dark:text-gray-400">
            <span>Progress</span>
            <span>{lesson.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${lesson.progress}%` }}></div>
          </div>
        </div>
        
        <Link 
          to={`/lessons/${lesson.id}`}
          className="block w-full text-center py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition font-medium"
        >
          {lesson.progress === 100 ? 'Review Lesson' : 'Start Lesson'}
        </Link>
      </div>
    </motion.div>
  );
};

export default LessonCard;
