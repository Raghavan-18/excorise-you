import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import lessonsData from '../data/lessons.json';

const LessonDetail = () => {
  const { id } = useParams();
  const lesson = lessonsData.find(l => l.id === parseInt(id));

  if (!lesson) {
    return <div className="p-6 text-center text-red-500">Lesson not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/lessons" className="flex items-center text-green-600 hover:text-green-700 mb-6 transition">
        <ArrowLeft size={20} className="mr-2" /> Back to Lessons
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
        <div className="bg-green-700 text-white p-8">
          <div className="flex justify-between items-center mb-4">
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-green-900 text-green-100 uppercase tracking-wider">
              {lesson.level}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold mb-4">{lesson.title}</h1>
        </div>
        
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Overview</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {lesson.explanation}
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Topics Covered</h2>
          <div className="space-y-6 mb-10">
            {lesson.topics.map((topic, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-750 p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-bold mr-4 shrink-0">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{topic.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 ml-12 leading-relaxed">
                  {topic.content}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to={`/quiz/${lesson.id}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition shadow-md hover:shadow-lg"
            >
              <PlayCircle size={24} className="mr-2" /> Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
