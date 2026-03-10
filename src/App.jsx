/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Quiz from './pages/Quiz';
import Challenges from './pages/Challenges';
import Leaderboard from './pages/Leaderboard';
import CarbonCalculator from './pages/CarbonCalculator';
import Chatbot from './pages/Chatbot';

const PrivateRoute = ({ children, role }) => {
  const { user } = React.useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
};

const AppContent = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <div className="flex">
        {user && <Sidebar />}
        <main className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
          <Routes>
            <Route path="/" element={user ? <Navigate to={user.role === 'teacher' ? '/teacher-dashboard' : '/student-dashboard'} /> : <Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Student Routes */}
            <Route path="/student-dashboard" element={<PrivateRoute role="student"><StudentDashboard /></PrivateRoute>} />
            <Route path="/lessons" element={<PrivateRoute role="student"><Lessons /></PrivateRoute>} />
            <Route path="/lessons/:id" element={<PrivateRoute role="student"><LessonDetail /></PrivateRoute>} />
            <Route path="/quiz/:id" element={<PrivateRoute role="student"><Quiz /></PrivateRoute>} />
            <Route path="/challenges" element={<PrivateRoute role="student"><Challenges /></PrivateRoute>} />
            <Route path="/carbon-calculator" element={<PrivateRoute role="student"><CarbonCalculator /></PrivateRoute>} />
            <Route path="/chatbot" element={<PrivateRoute role="student"><Chatbot /></PrivateRoute>} />
            
            {/* Teacher Routes */}
            <Route path="/teacher-dashboard" element={<PrivateRoute role="teacher"><TeacherDashboard /></PrivateRoute>} />
            
            {/* Shared Routes */}
            <Route path="/leaderboard" element={<PrivateRoute><Leaderboard /></PrivateRoute>} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}
