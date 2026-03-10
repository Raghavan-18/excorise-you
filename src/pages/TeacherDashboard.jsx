import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Eye } from 'lucide-react';

const mockSubmissions = [
  { id: 1, student: 'Aarav Sharma', challenge: 'Plant a Sapling', image: 'https://picsum.photos/seed/plant/400/300', date: '2023-10-25', status: 'pending' },
  { id: 2, student: 'Diya Patel', challenge: 'Zero Plastic Day', image: 'https://picsum.photos/seed/bag/400/300', date: '2023-10-26', status: 'pending' },
  { id: 3, student: 'Rohan Gupta', challenge: 'Compost Setup', image: 'https://picsum.photos/seed/compost/400/300', date: '2023-10-26', status: 'approved' },
];

const TeacherDashboard = () => {
  const [submissions, setSubmissions] = useState(mockSubmissions);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAction = (id, action) => {
    setSubmissions(submissions.map(sub => 
      sub.id === id ? { ...sub, status: action } : sub
    ));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Teacher Dashboard</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">Recent Submissions</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 font-semibold text-gray-700 dark:text-gray-200">Student</th>
                <th className="p-4 font-semibold text-gray-700 dark:text-gray-200">Challenge</th>
                <th className="p-4 font-semibold text-gray-700 dark:text-gray-200">Date</th>
                <th className="p-4 font-semibold text-gray-700 dark:text-gray-200">Proof</th>
                <th className="p-4 font-semibold text-gray-700 dark:text-gray-200 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((sub) => (
                <tr key={sub.id} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750">
                  <td className="p-4 text-gray-800 dark:text-gray-300 font-medium">{sub.student}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">{sub.challenge}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-400">{sub.date}</td>
                  <td className="p-4">
                    <button 
                      onClick={() => setSelectedImage(sub.image)}
                      className="flex items-center text-blue-600 hover:text-blue-800 transition"
                    >
                      <Eye size={18} className="mr-1" /> View
                    </button>
                  </td>
                  <td className="p-4 text-right">
                    {sub.status === 'pending' ? (
                      <div className="flex justify-end space-x-2">
                        <button 
                          onClick={() => handleAction(sub.id, 'approved')}
                          className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                          title="Approve"
                        >
                          <Check size={18} />
                        </button>
                        <button 
                          onClick={() => handleAction(sub.id, 'rejected')}
                          className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                          title="Reject"
                        >
                          <X size={18} />
                        </button>
                      </div>
                    ) : (
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        sub.status === 'approved' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                      }`}>
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img src={selectedImage} alt="Proof" className="w-full h-auto rounded-lg shadow-2xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
