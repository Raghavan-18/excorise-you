import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    const mockUser = {
      id: 1,
      name: 'Test Student',
      email,
      role: email.includes('teacher') ? 'teacher' : 'student',
      points: 450,
      level: 5
    };
    login(mockUser);
    navigate(mockUser.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-green-50 dark:bg-gray-900 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-8">Welcome Back</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 outline-none transition"
              placeholder="student@ecorise.in"
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
          
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition shadow-md"
          >
            Login
          </button>
        </form>
        
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <button className="mt-6 w-full flex items-center justify-center px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
            Google Login
          </button>
        </div>
        
        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account? <Link to="/signup" className="text-green-600 hover:text-green-500 font-semibold">Sign up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
