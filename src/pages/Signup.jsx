import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockUser = {
      id: Date.now(),
      name,
      email,
      role,
      points: 0,
      level: 1
    };
    login(mockUser);
    navigate(role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-green-50 dark:bg-gray-900 px-4 py-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-8">Join EcoRise</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
              placeholder="Aarav Sharma"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
              placeholder="aarav@school.in"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">I am a...</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`py-3 rounded-lg font-medium transition border ${
                  role === 'student' 
                    ? 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900 dark:text-green-100' 
                    : 'bg-white border-gray-300 text-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`py-3 rounded-lg font-medium transition border ${
                  role === 'teacher' 
                    ? 'bg-green-100 border-green-500 text-green-800 dark:bg-green-900 dark:text-green-100' 
                    : 'bg-white border-gray-300 text-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 hover:bg-gray-50'
                }`}
              >
                Teacher
              </button>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition shadow-md mt-4"
          >
            Sign Up
          </button>
        </form>
        
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account? <Link to="/login" className="text-green-600 hover:text-green-500 font-semibold">Login</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
