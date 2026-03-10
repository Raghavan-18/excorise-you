import React from 'react';
import { motion } from 'framer-motion';

const ChatBubble = ({ message, isBot }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex w-full ${isBot ? 'justify-start' : 'justify-end'} mb-4`}
    >
      <div 
        className={`max-w-[75%] rounded-2xl px-5 py-3 shadow-sm ${
          isBot 
            ? 'bg-white text-gray-800 border border-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 rounded-tl-sm' 
            : 'bg-green-600 text-white rounded-tr-sm'
        }`}
      >
        {message}
      </div>
    </motion.div>
  );
};

export default ChatBubble;
