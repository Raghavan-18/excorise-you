import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Home, BookOpen, Trophy, Calculator, MessageSquare, Target } from 'lucide-react';

const Sidebar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) return null;

  const links = user.role === 'teacher' ? [
    { name: 'Dashboard', path: '/teacher-dashboard', icon: <Home size={20} /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <Trophy size={20} /> },
  ] : [
    { name: 'Dashboard', path: '/student-dashboard', icon: <Home size={20} /> },
    { name: 'Lessons', path: '/lessons', icon: <BookOpen size={20} /> },
    { name: 'Challenges', path: '/challenges', icon: <Target size={20} /> },
    { name: 'Leaderboard', path: '/leaderboard', icon: <Trophy size={20} /> },
    { name: 'Carbon Calculator', path: '/carbon-calculator', icon: <Calculator size={20} /> },
    { name: 'Eco Chatbot', path: '/chatbot', icon: <MessageSquare size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg h-[calc(100vh-64px)] hidden md:block overflow-y-auto">
      <div className="p-4">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition ${
                  location.pathname === link.path
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
