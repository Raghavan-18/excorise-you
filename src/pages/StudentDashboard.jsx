import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import XPProgressBar from '../components/XPProgressBar';
import Badge from '../components/Badge';
import { motion } from 'framer-motion';
import { BookOpen, Target, Award, Droplet, Sun, Wind } from 'lucide-react';
import lessonsData from '../data/lessons.json';
import challengesData from '../data/challenges.json';

const StudentDashboard = () => {
  const { user } = useContext(AuthContext);
  const [completedLessons, setCompletedLessons] = useState(0);

  useEffect(() => {
    const completed = lessonsData.filter(l => l.progress === 100).length;
    setCompletedLessons(completed);
  }, []);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <XPProgressBar points={user.points} level={user.level} />
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 flex flex-col justify-center items-center">
          <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">{completedLessons}</div>
          <div className="text-gray-500 dark:text-gray-400 font-medium">Lessons Completed</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <Award className="mr-2 text-yellow-500" /> My Badges
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <Badge icon="🌱" title="Seedling" description="Started journey" earned={true} />
            <Badge icon="💧" title="Water Saver" description="Completed water lesson" earned={user.level > 2} />
            <Badge icon="♻️" title="Recycler" description="Sorted waste" earned={user.level > 4} />
            <Badge icon="🚲" title="Cyclist" description="Zero emission commute" earned={false} />
            <Badge icon="☀️" title="Solar Fan" description="Learned renewable energy" earned={false} />
            <Badge icon="🌍" title="Earth Guardian" description="Reached level 10" earned={false} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <Target className="mr-2 text-red-500" /> Current Challenges
          </h2>
          <div className="space-y-4">
            {challengesData.slice(0, 3).map(challenge => (
              <div key={challenge.id} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-800 dark:text-white">{challenge.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{challenge.points} XP</p>
                </div>
                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                  challenge.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                  challenge.status === 'submitted' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100' :
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                }`}>
                  {challenge.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentDashboard;
