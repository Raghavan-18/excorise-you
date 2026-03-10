import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Globe, Award, Users } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <header className="bg-green-700 text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4"
        >
          <Leaf size={64} className="mx-auto mb-6 text-green-300" />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Welcome to EcoRise</h1>
          <p className="text-xl md:text-2xl mb-10 text-green-100">
            The gamified environmental education platform for Indian schools and colleges.
          </p>
          <div className="space-x-4">
            <Link to="/signup" className="bg-white text-green-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-green-100 transition shadow-lg inline-block">
              Get Started
            </Link>
            <Link to="/login" className="bg-green-600 border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-500 transition shadow-lg inline-block">
              Login
            </Link>
          </div>
        </motion.div>
      </header>

      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-green-800 dark:text-green-400">Why EcoRise?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
            <Globe size={48} className="mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-4">Learn</h3>
            <p className="text-gray-600 dark:text-gray-400">Interactive lessons on climate change, waste management, and conservation.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
            <Award size={48} className="mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-bold mb-4">Earn</h3>
            <p className="text-gray-600 dark:text-gray-400">Complete quizzes and real-world challenges to earn XP and badges.</p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
            <Users size={48} className="mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-bold mb-4">Compete</h3>
            <p className="text-gray-600 dark:text-gray-400">Climb the leaderboard and show off your eco-friendly achievements.</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
