import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, LogOut, Leaf } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-green-700 text-white p-4 shadow-md flex justify-between items-center dark:bg-green-900">
      <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
        <Leaf />
        <span>EcoRise</span>
      </Link>
      <div className="flex items-center space-x-4">
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-green-600 dark:hover:bg-green-800 transition">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="hidden sm:inline">Hello, {user.name}</span>
            <button onClick={handleLogout} className="flex items-center space-x-1 hover:text-green-200 transition">
              <LogOut size={20} />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to="/login" className="hover:text-green-200 transition">Login</Link>
            <Link to="/signup" className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
