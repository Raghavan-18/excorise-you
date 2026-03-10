import React, { useState } from 'react';
import ChallengeCard from '../components/ChallengeCard';
import challengesData from '../data/challenges.json';

const Challenges = () => {
  const [challenges, setChallenges] = useState(challengesData);

  const handleComplete = (id) => {
    setChallenges(challenges.map(c => 
      c.id === id ? { ...c, status: 'submitted' } : c
    ));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Eco Challenges</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Complete real-world tasks, upload proof, and earn massive XP!</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <ChallengeCard 
            key={challenge.id} 
            challenge={challenge} 
            onComplete={handleComplete} 
          />
        ))}
      </div>
    </div>
  );
};

export default Challenges;
