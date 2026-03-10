import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ icon, title, description, earned }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className={`flex flex-col items-center p-4 rounded-xl border-2 transition ${
        earned 
          ? 'bg-yellow-50 border-yellow-400 dark:bg-yellow-900/30 dark:border-yellow-600' 
          : 'bg-gray-50 border-gray-200 opacity-50 grayscale dark:bg-gray-800 dark:border-gray-700'
      }`}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h4 className="font-bold text-gray-800 dark:text-gray-200 text-center">{title}</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-1">{description}</p>
    </motion.div>
  );
};

export default Badge;
