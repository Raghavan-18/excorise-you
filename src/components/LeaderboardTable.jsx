import React from 'react';

const LeaderboardTable = ({ data }) => {
  return (
    <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-green-50 dark:bg-green-900 border-b border-gray-200 dark:border-gray-700">
            <th className="p-4 font-semibold text-gray-700 dark:text-gray-200">Rank</th>
            <th className="p-4 font-semibold text-gray-700 dark:text-gray-200">Name</th>
            <th className="p-4 font-semibold text-gray-700 dark:text-gray-200 text-right">Eco Points</th>
            <th className="p-4 font-semibold text-gray-700 dark:text-gray-200 text-right">Level</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr 
              key={index} 
              className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 transition ${
                index < 3 ? 'font-medium' : ''
              }`}
            >
              <td className="p-4 text-gray-800 dark:text-gray-300">
                {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : user.rank}
              </td>
              <td className="p-4 text-gray-800 dark:text-gray-300">{user.name}</td>
              <td className="p-4 text-right text-green-600 dark:text-green-400 font-bold">{user.points}</td>
              <td className="p-4 text-right text-gray-600 dark:text-gray-400">Lv. {user.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderboardTable;
