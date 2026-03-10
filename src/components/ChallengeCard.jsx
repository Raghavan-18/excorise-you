import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle } from 'lucide-react';

const ChallengeCard = ({ challenge, onComplete }) => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState(challenge.status);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (image) {
      setStatus('submitted');
      onComplete(challenge.id);
    }
  };

  return (
    <motion.div 
      whileHover={{ scale: 1.01 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{challenge.title}</h3>
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100">
          {challenge.points} XP
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">{challenge.description}</p>
      
      {status === 'completed' ? (
        <div className="flex items-center text-green-600 font-semibold">
          <CheckCircle className="mr-2" size={20} />
          Challenge Completed!
        </div>
      ) : status === 'submitted' ? (
        <div className="flex items-center text-blue-600 font-semibold">
          <CheckCircle className="mr-2" size={20} />
          Pending Teacher Approval
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
            {image ? (
              <div className="relative">
                <img src={image} alt="Preview" className="max-h-48 mx-auto rounded-md" />
                <button 
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  &times;
                </button>
              </div>
            ) : (
              <label className="cursor-pointer flex flex-col items-center justify-center py-6">
                <Upload className="text-gray-400 mb-2" size={32} />
                <span className="text-sm text-gray-500 dark:text-gray-400">Click to upload photo proof</span>
                <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
              </label>
            )}
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={!image}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              image 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500'
            }`}
          >
            Submit Proof
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ChallengeCard;
