import React from 'react';

const XPProgressBar = ({ points, level }) => {
  const pointsForNextLevel = level * 1000;
  const progress = (points / pointsForNextLevel) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-end mb-2">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current Level</h3>
          <div className="text-3xl font-bold text-green-600 dark:text-green-400">Lv. {level}</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold text-gray-800 dark:text-white">{points} XP</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">/ {pointsForNextLevel} XP to next level</div>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 mt-4 dark:bg-gray-700 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default XPProgressBar;
