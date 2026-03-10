import React from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import leaderboardData from '../data/leaderboard.json';
import { Trophy } from 'lucide-react';

const Leaderboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        <Trophy size={40} className="text-yellow-500 mr-4" />
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white">Global Leaderboard</h1>
      </div>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10 text-lg">
        Compete with students across India and show off your eco-achievements!
      </p>
      
      <LeaderboardTable data={leaderboardData} />
    </div>
  );
};

export default Leaderboard;
